import { desktopClient, mobileClient } from "../../prisma/prisma";

export async function syncDBs() {
    console.log('Iniciando sincronização de bancos...');
    
    await syncCommands()

    await syncClients()
    
    await syncProducts()

    console.log('Sincronização concluída.');
}

export async function syncTables() {
    console.log('Sincronizando mesas...');
    const desktopRecords = await desktopClient.tb_mesas.findMany({
        select: {
            Mesa: true,
            Ativo: true
        },
        where: {
            Ativo: '-1'
        }
    });

    await mobileClient.table.deleteMany();
    await mobileClient.table.createMany({
        data: desktopRecords.map(record => ({
            tableNumber: parseInt(record.Mesa!),
            tableDescription: record.Mesa!.toString(),
        }))
    })
}

export async function syncCommands() {
    await syncTables()
    
    console.log('Sincronizando comandas...');
    const tablesDesktop = await desktopClient.tb_mesas.findMany({
        select: {
            Codigo: true,
            Mesa: true
        },
        where: {
            Mesa: {
                not: null
            }
        }
    })

    const desktopRecords = await desktopClient.tb_vendas_pre_comandas.findMany({
        distinct: "Numero_Comanda",
        select: {
            Numero_Comanda: true,
            Id_Mesa: true
        },
        where: {
            Numero_Comanda: {
                not: null
            },
            OR: [
                {
                    Id_Mesa: {
                        in: tablesDesktop.map(table => table.Codigo)
                    }
                },
                {
                    Id_Mesa: null
                }
            ]
        }
    });

    await mobileClient.command.deleteMany();
    await mobileClient.command.createMany({
        data: desktopRecords.map(record => ({
            commandNumber: parseInt(record.Numero_Comanda!),
            tableNumber: !!record.Id_Mesa ? parseInt(tablesDesktop.find(table => table.Codigo == record.Id_Mesa)!.Mesa!) : null,
        }))
    })
}

export async function syncProducts() {
    console.log('Sincronizando produtos...');
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
            Ativo: '-1',
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

export async function syncClients() {
    console.log('Sincronizando clientes...');
    const commandsDesktops = await desktopClient.tb_vendas_pre_comandas.findMany({
        select: {
            Numero_Comanda: true
        },
        where: {
            Numero_Comanda: {
                not: null
            }
        }
    })

    const desktopRecords = await desktopClient.tb_pessoas.findMany({
        select: {
            Codigo: true,
            Apelido: true
        },
        where: {
            Ativo: '-1',
            Tipo_Pessoa: 'PF - Pessoa Fisica',
            Apelido: {
                in: commandsDesktops.map(command => command.Numero_Comanda!)
            }
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