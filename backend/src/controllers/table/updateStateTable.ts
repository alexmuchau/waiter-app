import { FastifyRequest, FastifyReply } from 'fastify';
import { desktopClient } from '../../../prisma/prisma';

export async function swapStateBoard(id: number) {
    const board = await desktopClient.tb_mesa.findUnique({
        where: {
            Codigo: id
        }
    })
    
    if (!board) {
        return null
    }
    
    const updatedBoard = await desktopClient.tb_mesa.update({
        where: {
            Codigo: id
        },
        data: {
            Ativo: board.Ativo === 'Sim' ? 'Não' : 'Sim'
        }
    })
    
    return updatedBoard
}

export async function updateStateBoard(req: FastifyRequest, res: FastifyReply) {    
    const { id } = req.params as { id: string }
    
    const updatedBoard = await swapStateBoard(parseInt(id))
    
    if (!updatedBoard) {
        return res.status(404).send({ message: 'Board not found' })
    }
    
    return res.send(updatedBoard)
}