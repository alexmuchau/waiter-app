import { desktopClient, mobileClient } from "../../prisma/prisma";

export async function syncDBs() {
    console.log('Iniciando sincronização de bancos...');

    console.log('Sincronizando clientes...');
    await syncClients()

    console.log('Sincronizando produtos...');
    await syncProducts()

    console.log('Sincronizando comandas...');
    await syncCommands()

    console.log('Sincronizando mesas...');
    await syncTables()

    console.log('Sincronização concluída.');
}

async function syncTables() {
    const desktopRecords = await desktopClient.tb_mesas.findMany({
        select: {
            Codigo: true,
            Ativo: true
        }
    });

    await mobileClient.table.deleteMany();

    await mobileClient.table.createMany({
        data: desktopRecords.map(record => ({
            tableNumber: record.Codigo,
            tableDescription: record.Codigo.toString(),
        }))
    })
}

async function syncCommands() {
    const desktopRecords = await desktopClient.tb_comandas.findMany({
        select: {
            Codigo: true,
            Comanda_Numero: true,
            ID_Mesa: true
        },
        where: {
            Ativo: '-1',
            Comanda_Numero: {
                not: null
            }
        }
    });

    await mobileClient.command.deleteMany();
    await mobileClient.command.createMany({
        data: desktopRecords.map(record => ({
            commandNumber: parseInt(record.Comanda_Numero!),
            tableNumber: record.ID_Mesa!,
            commandId: record.Codigo
        }))
    })
}

async function syncProducts() {
    const desktopCategories = await desktopClient.tb_produtos_setor.findMany({
        select: {
            Codigo: true,
            Setor: true
        },
        where: {
            Setor: {
                in: ['TAP', 'PORCAO']
            }
        }
    });

    const desktopRecords = await desktopClient.tb_produtos.findMany({
        select: {
            Codigo: true,
            Produto: true,
            Id_Setor: true,
            Preco_Venda: true
        },
        where: {
            Ativo: 'Sim',
            Id_Setor: {
                in: desktopCategories.map(category => category.Codigo)
            }
        }
    });

    await mobileClient.product.deleteMany();
    await mobileClient.product.createMany({
        data: desktopRecords.map(record => ({
            productId: record.Codigo,
            name: record.Produto!,
            category: desktopCategories.find(category => category.Codigo === record.Id_Setor)?.Setor == 'TAP' ? 'CHOPP' : "FOOD",
            price: record.Preco_Venda!
        }))
    })
}

async function syncClients() {
    const desktopRecords = await desktopClient.tb_pessoas.findMany({
        select: {
            Codigo: true,
            Apelido: true
        },
        where: {
            Ativo: '-1',
            Tipo_Pessoa: 'PF - Pessoa Fisica'
        }
    });

    await mobileClient.client.deleteMany();
    await mobileClient.client.createMany({
        data: desktopRecords.map(record => ({
            clientId: record.Codigo,
            name: record.Apelido!
        }))
    })
}