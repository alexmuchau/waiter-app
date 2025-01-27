import { desktopClient, mobileClient } from "../../prisma/prisma";

export async function syncDBs() {
    console.log("Iniciando sincronização de bancos...");

    await syncCommands();

    await syncClients();

    await syncProducts();

    console.log("Sincronização concluída.");
}

export async function syncTables() {
    console.log("Sincronizando mesas...");
    const desktopRecords = await desktopClient.tb_mesas.findMany({
        select: {
            Mesa: true,
            Ativo: true,
        },
        where: {
            Ativo: "-1",
        },
    });

    await mobileClient.table.deleteMany();
    await mobileClient.table.createMany({
        data: desktopRecords.map((record) => ({
            tableNumber: parseInt(record.Mesa!),
            tableDescription: record.Mesa!.toString(),
        })),
    });
}

export async function syncCommands() {
    await syncTables();

    console.log("Sincronizando comandas...");
    const tablesDesktop = await desktopClient.tb_mesas.findMany({
        select: {
            Codigo: true,
            Mesa: true,
        },
        where: {
            Mesa: {
                not: null,
            },
        },
    });

    const desktopRecords = await desktopClient.tb_vendas_pre_comandas.findMany({
        distinct: "Numero_Comanda",
        select: {
            Numero_Comanda: true,
            Id_Mesa: true,
        },
        where: {
            Numero_Comanda: {
                not: null,
            },
            OR: [
                {
                    Id_Mesa: {
                        in: tablesDesktop.map((table) => table.Codigo),
                    },
                },
                {
                    Id_Mesa: null,
                },
            ],
        },
    });

    await mobileClient.command.deleteMany();
    await mobileClient.command.createMany({
        data: desktopRecords.map((record) => ({
            commandNumber: parseInt(record.Numero_Comanda!),
            tableNumber: !!record.Id_Mesa
                ? parseInt(
                      tablesDesktop.find(
                          (table) => table.Codigo == record.Id_Mesa,
                      )!.Mesa!,
                  )
                : null,
        })),
    });
}

export async function syncProducts() {
    console.log("Sincronizando produtos...");

    const desktopRecords = await desktopClient.tb_produtos.findMany({
        select: {
            Codigo: true,
            Produto: true,
            Id_Setor: true,
            Preco_Venda: true,
        },
        where: {
            Ativo: "-1",
            Funcao: {
                contains: "5600",
            },
            Id_Setor: {
                not: null,
            },
        },
    });

    const desktopCategories = await desktopClient.tb_produtos_setor.findMany({
        select: {
            Codigo: true,
            Setor: true,
        },
        where: {
            Ativo: "-1",
            Codigo: {
                in: [
                    ...new Set(
                        desktopRecords.map((record) => record.Id_Setor!),
                    ),
                ],
            },
        },
    });

    for (const category of desktopCategories) {
        if (!category.Setor) continue;

        let categoryOrder: number | undefined = parseInt(
            category.Setor.split("-")[0],
        );
        let categoryName = category.Setor.split("-")[1].toLowerCase();

        if (!categoryOrder) {
            categoryOrder = undefined;
            categoryName = category.Setor.toLowerCase();
        }

        await mobileClient.category.upsert({
            where: {
                categoryId: category.Codigo,
            },
            update: {
                name: categoryName,
                order: categoryOrder,
            },
            create: {
                categoryId: category.Codigo,
                name: categoryName,
                order: categoryOrder,
            },
        });
    }

    await mobileClient.product.deleteMany();
    await mobileClient.product.createMany({
        data: desktopRecords.map((record) => ({
            productId: record.Codigo,
            name: record.Produto!,
            categoryId: record.Id_Setor!,
            price: record.Preco_Venda!,
        })),
    });
}

export async function syncClients() {
    console.log("Sincronizando clientes...");
    const commandsDesktops =
        await desktopClient.tb_vendas_pre_comandas.findMany({
            select: {
                Numero_Comanda: true,
            },
            where: {
                Numero_Comanda: {
                    not: null,
                },
            },
        });

    const desktopRecords = await desktopClient.tb_pessoas.findMany({
        select: {
            Codigo: true,
            Apelido: true,
        },
        where: {
            Ativo: "-1",
            Tipo_Pessoa: "PF - Pessoa Fisica",
            Apelido: {
                in: commandsDesktops.map((command) => command.Numero_Comanda!),
            },
        },
    });

    await mobileClient.client.deleteMany();
    await mobileClient.client.createMany({
        data: desktopRecords.map((record) => ({
            clientId: record.Codigo,
            name: record.Apelido!,
        })),
    });
}
