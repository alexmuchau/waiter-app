import { FastifyRequest, FastifyReply } from 'fastify';
import { desktopClient } from '../../../prisma/prisma';

export async function swapStateCommand(id: number) {
    const command = await desktopClient.tb_mesa.findUnique({
        where: {
            Codigo: id
        }
    })
    
    if (!command) {
        return null
    }
    
    const updatedCommand = await desktopClient.tb_mesa.update({
        where: {
            Codigo: id
        },
        data: {
            Ativo: command.Ativo === 'Sim' ? 'Não' : 'Sim'
        }
    })
    
    return updatedCommand
}

export async function updateStateCommand(req: FastifyRequest, res: FastifyReply) {    
    const { id } = req.params as { id: string }
    
    const updatedCommand = await swapStateCommand(parseInt(id))
    
    if (!updatedCommand) {
        return res.status(404).send({ message: 'Command not found' })
    }
    
    return res.send(updatedCommand)
}