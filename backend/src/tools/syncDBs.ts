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

    const mobileRecords = await mobileClient.table.findMany({
        where: {
            tableNumber: {
                notIn: desktopRecords.map(record => record.Codigo)
            }
        }
    })

    await mobileClient.table.deleteMany({
        where: {
            tableNumber: {
                in: mobileRecords.map(record => record.tableNumber)
            }
        }
    });

    for (const record of desktopRecords) {
        const existingRecord = await mobileClient.table.findUnique({
            where: {
                tableNumber: record.Codigo
            },
        });

        if (!existingRecord) {
            await mobileClient.table.create({
                data: {
                    tableNumber: record.Codigo,
                    tableDescription: record.Codigo.toString()
                },
            });

            continue
        }
    }
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

    for (const record of desktopRecords) {
        const existingRecord = await mobileClient.command.findUnique({
            where: {
                commandNumber: parseInt(record.Comanda_Numero!)
            },
        });

        if (!existingRecord) {
            await mobileClient.command.create({
                data: {
                    commandNumber: parseInt(record.Comanda_Numero!),
                    tableNumber: record.ID_Mesa ? record.ID_Mesa : null
                },
            });

            continue
        }

        if (existingRecord.tableNumber != record.ID_Mesa) {
            await mobileClient.command.update({
                data: {
                    tableNumber: record.ID_Mesa ? record.ID_Mesa : null
                },
                where: {
                    commandNumber: parseInt(record.Comanda_Numero!)
                }
            });
        }
    }

    const mobileRecords = await mobileClient.command.findMany({
        where: {
            commandNumber: {
                notIn: desktopRecords.map(record => parseInt(record.Comanda_Numero!))
            }
        }
    })

    for (const record of mobileRecords) {
        await mobileClient.command.delete({
            where: {
                commandNumber: record.commandNumber
            }
        });
    }
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

    const categoriesMap: { [key: number]: string } = desktopCategories.reduce((acc, category) => {
        (acc as { [key: number]: string })[category.Codigo] = category.Setor!
        return acc
    })

    interface ProductItem {
        productId: number,
        name: string,
        category: string,
        price: number
    }

    const desktopRecordsMap: { [key: number]: ProductItem } = desktopRecords.reduce((acc, record) => {
        (acc as { [key: number]: ProductItem })[record.Codigo] = {
            productId: record.Codigo,
            name: record.Produto!,
            category: categoriesMap[record.Id_Setor!],
            price: record.Preco_Venda!
        }
        return acc
    }, {})

    const mobileRecords = await mobileClient.product.findMany({
        where: {
            productId: {
                in: desktopRecords.map(record => record.Codigo)
            }
        }
    })

    for (const record of mobileRecords) {
        if (!desktopRecordsMap[record.productId]) {
            await mobileClient.product.delete({
                where: {
                    productId: record.productId
                }
            });

            continue
        }

        if (record.name != desktopRecordsMap[record.productId].name || record.price != desktopRecordsMap[record.productId].price) {
            await mobileClient.product.update({
                data: {
                    name: desktopRecordsMap[record.productId].name,
                    price: desktopRecordsMap[record.productId].price
                },
                where: {
                    productId: record.productId
                }
            });
        }
    }

    for (const record of desktopRecords) {
        if (!desktopRecordsMap[record.Codigo]) continue

        if (!mobileRecords.find(mobileRecord => mobileRecord.productId == record.Codigo)) {
            await mobileClient.product.create({
                data: {
                    productId: record.Codigo,
                    name: record.Produto!,
                    category: categoriesMap[record.Id_Setor!] === 'TAP' ? 'CHOPP' : "FOOD",
                    price: record.Preco_Venda!
                },
            });
        }
    }
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