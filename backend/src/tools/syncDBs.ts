import { desktopClient, mobileClient } from "../../prisma/prisma";

export async function syncDBs() {
    console.log('Iniciando sincronização de bancos...');

    console.log('Sincronizando clientes...');
    await syncClients()

    console.log('Sincronizando produtos...');
    await syncProducts()

    console.log('Sincronizando mesa-comanda...');
    await syncTableCommands()

    // TO-DO -> SINCRONIZAÇÃO DE TB_MESAS E TB_COMANDAS

    console.log('Sincronização concluída.');
}

async function syncTableCommands() {
    const desktopRecords = await desktopClient.tb_mesa_comanda.findMany({
        where: {
            Id_Comanda: {
                not: null
            },
            Id_Mesa: {
                not: null
            }
        }
    });

    for (const record of desktopRecords) {
        if (!record.Id_Comanda || !record.Id_Mesa) continue

        const existingRecord = await mobileClient.activeTableCommand.findUnique({
            where: {
                commandNumber: record.Id_Comanda
            },
        });

        if (!existingRecord) {
            await mobileClient.activeTableCommand.create({
                data: {
                    commandNumber: record.Id_Comanda,
                    tableNumber: record.Id_Mesa
                },
            });

            continue
        }

        if (existingRecord.tableNumber != record.Id_Mesa) {
            await mobileClient.activeTableCommand.update({
                data: {
                    tableNumber: record.Id_Mesa,
                },
                where: {
                    commandNumber: record.Id_Comanda
                }
            });
        }
    }

    await mobileClient.activeTableCommand.deleteMany({
        where: {
            NOT: {
                commandNumber: {
                    in: desktopRecords.map(record => record.Id_Comanda!)
                }
            }
        }
    });
}

async function syncProducts() {
    const desktopRecords = await desktopClient.tb_produtos.findMany();

    for (const record of desktopRecords) {
        if (!record.Produto || !record.Preco_Venda) continue

        const existingRecord = await mobileClient.product.findUnique({
            where: {
                productId: record.Codigo
            },
        });

        if (!existingRecord) {
            await mobileClient.product.create({
                data: {
                    productId: record.Codigo,
                    name: record.Produto,
                    category: '',
                    price: record.Preco_Venda
                },
            });

            continue
        }

        if (existingRecord.name != record.Produto || existingRecord.price != record.Preco_Venda) {
            await mobileClient.product.update({
                data: {
                    name: record.Produto,
                    price: record.Preco_Venda
                },
                where: {
                    productId: record.Codigo
                }
            });
        }
    }
}

async function syncClients() {
    const desktopRecords = await desktopClient.tb_pessoas.findMany();

    for (const record of desktopRecords) {
        if (!record.Apelido) continue

        const existingRecord = await mobileClient.client.findUnique({
            where: {
                clientId: record.Codigo
            },
        });

        if (!existingRecord) {
            await mobileClient.client.create({
                data: {
                    clientId: record.Codigo,
                    name: record.Apelido
                },
            });

            continue
        }

        if (existingRecord.name != record.Apelido) {
            await mobileClient.client.update({
                data: {
                    name: record.Apelido
                },
                where: {
                    clientId: record.Codigo
                }
            });
        }
    }
}