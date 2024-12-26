import { FastifyRequest, FastifyReply } from 'fastify';
import type { OrderProps } from '../../../../utils/types';
import { desktopClient, mobileClient } from '../../../prisma/prisma';

async function swapStates(tableNumber: number, commandNumber: number, active: 'Sim' | 'Não') {
    await desktopClient.tb_mesa.update({
        where: {
            Codigo: tableNumber
        },
        data: {
            Ativo: active
        }
    })

    await desktopClient.tb_comanda.update({
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
    const board = await mobileClient.table.findFirst({
        where: {
            tableNumber: bodyOrder.board
        }
    })
    
    if (!board) {
        return res.status(400).send({ error: 'Invalid board number' })
    }
    
    // ---------------------- COMMAND AREA
    const command = await mobileClient.command.findFirst({
        where: {
            commandNumber: bodyOrder.command
        }
    })
    
    if (!command) {
        return res.status(400).send({ error: 'Invalid command command' })
    }
    
    // ############################################
    
    // ############################################
    // Checking if board command combinations exists or having some issue
    // ############################################
    const tableCommand = await mobileClient.activeTableCommand.findFirst({
        where: {
            commandNumber: bodyOrder.command
        }
    })
    
    if (!tableCommand) {
        swapStates(board.tableNumber, command.commandNumber, 'Sim')
        
        const boardCommandCode = await desktopClient.tb_mesa_comanda.count()
        
        await mobileClient.activeTableCommand.create({
            data: {
                commandNumber: command.commandNumber,
                tableNumber: board.tableNumber
            }
        })

        await desktopClient.tb_mesa_comanda.create({
            data: {
                Codigo: boardCommandCode,
                Id_Mesa: board.tableNumber,
                Id_Comanda: command.commandNumber
            }
        })

    } else {
        if (tableCommand.tableNumber !== board.tableNumber) {
            return res.status(400).send({ error: 'Invalid board and command combination' })
        }

        const boardCommandCode = await desktopClient.tb_mesa_comanda.findFirst({
            where: {
                Id_Mesa: board.tableNumber,
                Id_Comanda: command.commandNumber
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
    const orderCode = await desktopClient.tb_pedido.findMany({
        orderBy: {
            Codigo: 'desc'
        },
        select: {
            Codigo: true
        }
    }).then(order => order[0].Codigo + 1)

    const newOrder = await desktopClient.tb_pedido.create({
        data: {
            Codigo: orderCode,
            Id_Mesa: board.tableNumber,
            Id_Comanda: command.commandNumber,
        }
    })
    
    let orderItemCode = await desktopClient.tb_pedido_item.findMany({
        orderBy: {
            Codigo: 'desc'
        },
        select: {
            Codigo: true
        }
    }).then(order => order[0].Codigo + 1)

    const orderItems = await desktopClient.tb_pedido_item.createMany({
        data: bodyOrder.items.map(item => {
            return {
                Codigo: orderItemCode + 1,
                Id_Pedido: newOrder.Codigo,
                Id_Produto: item.id_product,
                Quantidade: item.quantity
            }
        })
    })
    
    return res.send('Working!')
}