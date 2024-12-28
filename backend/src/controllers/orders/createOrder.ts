import { FastifyRequest, FastifyReply } from 'fastify';
import type { OrderProps } from '../../../../utils/types';
import { desktopClient, mobileClient } from '../../../prisma/prisma';

async function swapStates(tableNumber: number, commandNumber: number, active: 'Sim' | 'Não') {
    await desktopClient.tb_mesas.update({
        where: {
            Codigo: tableNumber
        },
        data: {
            Ativo: active
        }
    })

    await desktopClient.tb_comandas.update({
        where: {
            Codigo: commandNumber
        },
        data: {
            Ativo: active
        }
    })
}

export async function createOrder(req: FastifyRequest, res: FastifyReply) {    
    const { bodyOrder } = req.body as { bodyOrder: OrderProps }
    
    // ############################################
    // Check if board and command exists on db
    // ############################################
    // ---------------------- BOARD AREA
    const board = await desktopClient.tb_mesas.findFirst({
        where: {
            Codigo: bodyOrder.board
        }
    })
    
    if (!board) {
        return res.status(400).send({ error: 'Invalid board number' })
    }
    
    // ---------------------- COMMAND AREA
    const command = await desktopClient.tb_comandas.findFirst({
        where: {
            Comanda_Numero: bodyOrder.command.toString()
        }
    })
    
    if (!command) {
        return res.status(400).send({ error: 'Invalid command number' })
    }

    if (command.ID_Mesa && command.ID_Mesa !== board.Codigo) {
        return res.status(400).send({ error: 'Invalid board and command combination' })
    }
    
    if (!command.ID_Mesa) {
        swapStates(board.Codigo, command.Codigo, 'Sim')
        
        await desktopClient.tb_comandas.update({
            where: {
                Codigo: command.Codigo
            },
            data: {
                ID_Mesa: board.Codigo
            }
        })

    }
    
    // ############################################
    // Check if all products exists on db
    // ############################################
    const qtdProducts = await mobileClient.product.count({
        where: {
            productId: {
                in: bodyOrder.items.map(item => item.id_product)
            }
        }
    })
    
    if (qtdProducts !== bodyOrder.items.length) {
        return res.status(400).send({ error: 'Invalid product' })
    }
    
    // ############################################
    // Create order
    // ############################################
    const orderCode = await desktopClient.tb_vendas_pre.findMany({
        orderBy: {
            Codigo: 'desc'
        },
        select: {
            Codigo: true
        }
    }).then(order => order[0].Codigo + 1)

    // const newOrder = await desktopClient.tb_vendas_pre.create({
    //     data: {
    //         Codigo: orderCode,
    //         Id_Cliente: bodyOrder.command,

    //     }
    // })
    
    // let orderItemCode = await desktopClient.tb_pedido_item.findMany({
    //     orderBy: {
    //         Codigo: 'desc'
    //     },
    //     select: {
    //         Codigo: true
    //     }
    // }).then(order => order[0].Codigo + 1)

    // const orderItems = await desktopClient.tb_pedido_item.createMany({
    //     data: bodyOrder.items.map(item => {
    //         return {
    //             Codigo: orderItemCode + 1,
    //             Id_Pedido: newOrder.Codigo,
    //             Id_Produto: item.id_product,
    //             Quantidade: item.quantity
    //         }
    //     })
    // })
    
    return res.send('Working!')
}