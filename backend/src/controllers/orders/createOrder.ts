import { FastifyRequest, FastifyReply } from 'fastify';
import type { OrderProps } from '../../../../utils/types';
import { desktopClient, mobileClient } from '../../../prisma/prisma';
import { format } from 'date-fns';

export async function createOrder(req: FastifyRequest, res: FastifyReply) {    
    const { bodyOrder } = req.body as { bodyOrder: OrderProps }

    console.log(bodyOrder)
    
    const products = await checkProducts(bodyOrder.items)
    if (!products) return res.status(400).send('Products error')

    const table = await checkTable(bodyOrder.board)
    if (!table) return res.status(400).send('Table not found')

    const command = await checkCommand(bodyOrder.command, table.Codigo)
    if (!command) return res.status(400).send('Command error')

    await createPreOrder(command.Codigo, table.Codigo, bodyOrder.items, products)
    
    return res.send('Working!')
}

async function checkCommand(commandNumber: number, tableNumber: number) {
    const command = await desktopClient.tb_vendas_pre_comandas.findFirst({
        where: {
            Numero_Comanda: commandNumber.toString()
        }
    })
    
    if (!command) {
        return undefined
    }

    if (command.Id_Mesa && command.Id_Mesa !== tableNumber) {
        return undefined
    }

    if (!command.Id_Mesa) {
        await desktopClient.tb_vendas_pre_comandas.update({
            where: {
                Codigo: command.Codigo
            },
            data: {
                Id_Mesa: tableNumber
            }
        })
    }

    return command
}

async function checkTable(tableNumber: number) {
    const board = await desktopClient.tb_mesas.findFirst({
        where: {
            Mesa: tableNumber < 10 ? `0${tableNumber}` : tableNumber.toString()
        }
    })
    
    if (!board) {
        return undefined
    }

    return board
}

async function checkProducts(items: OrderProps['items']) {
    const products = await mobileClient.product.findMany({
        where: {
            productId: {
                in: items.map(item => item.id_product)
            }
        }
    })
    
    if (products.length !== items.length) {
        return undefined
    }

    return products
}

async function createPreOrder(commandNumber: number, tableId: number, products: OrderProps['items'], productsDB: any) {
    const orderCode = await desktopClient.tb_vendas_pre.findMany({
        orderBy: {
            Codigo: 'desc'
        },
        select: {
            Codigo: true
        },
    }).then(order => {
        const foundOrder = order.find(order => order.Codigo % 100 == 99);
        return foundOrder ? foundOrder.Codigo + 100 : 99;
    })

    const params = await desktopClient.tb_parametros_execucao.findFirst({
        select: {
            Id_Operacao_Movimento_Ret: true,
            IDUser: true,
            IDEmpresa: true
        },
        where: {
            Codigo: 199
        }
    })

    console.log(format(new Date(), 'yyyy-MM-dd'))

    const order = await desktopClient.tb_vendas_pre.create({
        data: {
            Codigo: orderCode,
            Data_Movimento: (new Date()).toISOString(),
            Hora_Inicio: format(new Date(), 'HH:mm:ss'),
            Hora_Finalizacao: format(new Date(), 'HH:mm:ss'),
            Id_Cliente: 0,
            Id_Operacao: params?.Id_Operacao_Movimento_Ret,
            Desconto_Venda: 0,
            Total_Produtos: 0,
            Total_Desconto: 0,
            Total_Acrescimo: 0,
            Total_Frete: 0,
            Total_A_Receber: 0,
            Total_Itens: 0,
            Total_Peso: 0,
            Troco: 0,
            RegExcluido: '0',
            DHU: new Date().toString(),
            MODO: 'MODO PDV',
            Tempo: parseInt(format(new Date().getTime() - new Date('2000-01-01T00:00:00').getTime(), 'hmmmss')),
            Observacao: null,
            IDUser: params?.IDUser,
            IDEmpresa: params?.IDEmpresa,
            Id_Comanda: commandNumber,
            Id_Mesa: tableId
        }
    })

    let orderItemCode = await desktopClient.tb_vendas_produtos_pre.findMany({
        select: {
            Codigo: true
        }
    }).then(orderItem => {
        const foundOrderItem = orderItem.find(orderItem => orderItem.Codigo % 100 == 99);
        return foundOrderItem ? foundOrderItem.Codigo + 100 : 99;
    })

    const orderItems = await desktopClient.tb_vendas_produtos_pre.createMany({
        data: products.map(product => {
            orderItemCode += 1
            const productDB = productsDB.find((productDB: any) => productDB.productId === product.id_product)
            
            return {
                Codigo: orderItemCode,
                Item: 0,
                Id_Venda: orderCode,
                Id_Produto: product.id_product,
                Codigo_Barras: '0',
                Quantidade: product.quantity,
                Unitario: parseFloat(productDB.Preco_Venda),
                Total: parseFloat(productDB.Preco_Venda) * product.quantity,
                Acrescimo: 0,
                Desconto: 0,
                Frete: 0,
                Total_A_Receber: 0,
                Peso: 0,
                Unitario_Referencia: 0,
                Id_Vendedor: 0,
                Comissao: 0,
                Comissao_Referencia: 0,
                Reservado: '0',
                RegExcluido: '0',
                Via_Oferta: '0',
                DHU: format(new Date(), 'hhmmss'),
                Desconto_Venda: 0,
                Custo: parseFloat(productDB.Preco_Compra),
                Proc_Estoque: '0',
                IDUser: params?.IDUser,
                Preco_Digitado: 0,
                Valor_FPag_DEsconto: 0,
                Valor_FPag_Acrescimo: 0,
            }
        })
    })


}