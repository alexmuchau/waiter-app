import { FastifyRequest, FastifyReply } from 'fastify';
import type { OrderProps } from '../../../../utils/types';
import { prisma } from '../../../prisma/prisma';
import { swapStateCommand } from '../commands/updateStateCommand';
import { swapStateBoard } from '../boards/updateStateBoard';

async function verifyBoardCommand(bcs: any, board: number, command: number) {
    for ( const bc of bcs ) {
        if (bc.Id_Mesa != board && bc.Id_Comanda == command) {
            return false
        }
        
        if (bc.Id_Mesa == board && bc.Id_Comanda == command) {
            return true
        }
    }
    
    return false
}

export async function createOrder(req: FastifyRequest, res: FastifyReply) {    
    const { order } = req.body as { order: OrderProps }
    
    const board = await prisma.tb_mesa.findFirst({
        where: {
            Codigo: order.board
        }
    })
    
    if (!board) {
        return res.status(400).send({ error: 'Invalid board number' })
    }
    
    const command = await prisma.tb_comanda.findFirst({
        where: {
            Codigo: order.command
        }
    })
    
    if (!command) {
        return res.status(400).send({ error: 'Invalid command command' })
    }
    
    const boardCommand = await prisma.tb_mesa_comanda.findMany({
        where: {
            OR: [
                { Id_Mesa: board.Codigo },
                { Id_Comanda: command.Codigo }
            ]
        }
    })
    
    if (!boardCommand) {
        swapStateBoard(board.Codigo)
        swapStateBoard(command.Codigo)
    } else {
        const isCombinationRight = verifyBoardCommand(boardCommand, board.Codigo, command.Codigo)
        
        if (!isCombinationRight) {
            return res.status(400).send({ error: 'Invalid board and command combination' })
        }
    }
    
    
    if (command.Ativo == 'Nao') {
        swapStateCommand(command.Codigo)
    }
    
    if (command.Ativo == 'Sim') {
        
    }
    
    // Check if all products exists on db
    const qtdProducts = await prisma.tb_produtos.count({
        where: {
            Codigo: {
                in: order.items.map(item => item.id_product)
            }
        }
    })
    
    if (qtdProducts !== order.items.length) {
        return res.status(400).send({ error: 'Invalid product' })
    }
    
    return res.send('Working!')
}