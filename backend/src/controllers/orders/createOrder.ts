import { FastifyRequest, FastifyReply } from 'fastify';
import type { OrderProps } from '../../../../utils/types';
import { desktopClient } from '../../../prisma/prisma';
import { swapStateCommand } from '../commands/updateStateCommand';
import { swapStateBoard } from '../table/updateStateTable';

async function verifyBoardCommand(bcs: any, board: number, command: number) {
    for ( const bc of bcs ) {
        if (bc.Id_Mesa != board) {
            return -1
        }
        
        if (bc.Id_Mesa == board && bc.Id_Comanda == command) {
            return bc.Codigo
        }
    }
    
    return -2
}

export async function createOrder(req: FastifyRequest, res: FastifyReply) {    
    const { bodyOrder } = req.body as { bodyOrder: OrderProps }
    
    // ############################################
    // Check if board and command exists on db
    // ############################################
    // ---------------------- BOARD AREA
    const board = await desktopClient.tb_mesa.findFirst({
        where: {
            Codigo: bodyOrder.board
        }
    })
    
    if (!board) {
        return res.status(400).send({ error: 'Invalid board number' })
    }
    
    // ---------------------- COMMAND AREA
    const command = await desktopClient.tb_comanda.findFirst({
        where: {
            Codigo: bodyOrder.command
        }
    })
    
    if (!command) {
        return res.status(400).send({ error: 'Invalid command command' })
    }
    
    // ############################################
    
    // ############################################
    // Checking if board command combinations exists or having some issue
    // ############################################
    const boardCommand = await desktopClient.tb_mesa_comanda.findMany({
        where: {
            OR: [
                { Id_Mesa: board.Codigo },
                { Id_Comanda: command.Codigo }
            ]
        }
    })
    
    var boardCommandCode = 0
    
    if (!boardCommand) {
        swapStateBoard(board.Codigo)
        swapStateCommand(command.Codigo)
        
        boardCommandCode = await desktopClient.tb_mesa_comanda.count()
        
        await desktopClient.tb_mesa_comanda.create({
            data: {
                Codigo: boardCommandCode,
                Id_Mesa: board.Codigo,
                Id_Comanda: command.Codigo
            }
        })
    } else {
        boardCommandCode = await verifyBoardCommand(boardCommand, board.Codigo, command.Codigo)
        
        if (boardCommandCode === -1) {
            return res.status(400).send({ error: 'Invalid board and command combination' })
        }
        
        if (boardCommandCode === -2) {
            swapStateBoard(board.Codigo)
            swapStateCommand(command.Codigo)
            
            boardCommandCode = await desktopClient.tb_mesa_comanda.count()
            
            await desktopClient.tb_mesa_comanda.create({
                data: {
                    Codigo: boardCommandCode,
                    Id_Mesa: board.Codigo,
                    Id_Comanda: command.Codigo
                }
            })
        }
    }
    
    // ############################################
    // Check if all products exists on db
    // ############################################
    const qtdProducts = await desktopClient.tb_produtos.count({
        where: {
            Codigo: {
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
    const orderCode = await desktopClient.tb_pedido.count()
    const newOrder = await desktopClient.tb_pedido.create({
        data: {
            Codigo: orderCode,
            Id_Mesa: board.Codigo,
            Id_Comanda: command.Codigo,
        }
    })
    
    let orderItemCode = await desktopClient.tb_pedido_item.count() - 1
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