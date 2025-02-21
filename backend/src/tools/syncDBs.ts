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
            Codigo: true,
            Mesa: true,
            Ativo: true,
        },
        where: {
            Ativo: "-1",
            RegExcluido: "0",
            Mesa: {
                not: null
            }
        },
        orderBy: {
            Mesa: "asc"
        }
    });

    await mobileClient.table.deleteMany({
        where: {
            tableNumber: {
                notIn: desktopRecords.map((t) => parseInt(t.Mesa!))
            }
        }
    });

    for (const record of desktopRecords) {
        await mobileClient.table.upsert({
            create: {
                tableNumber: parseInt(record.Mesa!),
                tableDescription: parseInt(record.Mesa!).toString(),
            },
            update: {
                tableDescription: parseInt(record.Mesa!).toString(),
            },
            where: {
                tableNumber: parseInt(record.Mesa!)
            }
        });
    }

    return desktopRecords
}

export async function syncCommands() {
    const tablesDesktop = await syncTables();

    console.log("Sincronizando comandas...");

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
            RegExcluido: "0"
        },
    });

    await mobileClient.command.deleteMany({
        where: {
            tableNumber: {
                notIn: desktopRecords.map((t) => parseInt(t.Numero_Comanda!))
            }
        }
    });

    let created: {[commandNumber: number]: boolean} = {}
    for (const record of desktopRecords) {
        const commandNumber = parseInt(record.Numero_Comanda!)
        if (commandNumber in created) continue
        
        const tableNumber = !!record.Id_Mesa
            ? parseInt(
                tablesDesktop.find(
                    (table) => table.Codigo == record.Id_Mesa,
                )!.Mesa!,
            )
            : null

        await mobileClient.command.upsert({
            create: {
                commandNumber: commandNumber,
                tableNumber: tableNumber,
            },
            update: {
                tableNumber: tableNumber,
            },
            where: {
                commandNumber: commandNumber
            }
        });

        created[commandNumber] = true
    }

    return desktopRecords
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
            RegExcluido: "0"
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
            RegExcluido: "0"
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
    const commandsDesktops = await syncCommands()

    console.log("Sincronizando clientes...");

    const desktopRecords = await desktopClient.tb_pessoas.findMany({
        select: {
            Codigo: true,
            Pessoa: true,
            Apelido: true,
        },
        where: {
            Ativo: "-1",
            Codigo: {
                in: commandsDesktops.map((command) => parseInt(command.Numero_Comanda!)),
            },
            RegExcluido: "0"
        },
    });

    await mobileClient.client.deleteMany();
    await mobileClient.client.createMany({
        data: desktopRecords.map((record) => ({
            clientId: record.Codigo,
            name: !!record.Apelido ? record.Apelido : record.Pessoa!,
        })),
    });
}
