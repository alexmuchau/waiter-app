import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function deleteTableCommand(req: FastifyRequest, res: FastifyReply) {
    const { tableCommand } = req.body as { tableCommand: {
        command: number
        table: number
    } }

    await mobileClient.activeTableCommand.delete({
        where: {
            commandNumber: tableCommand.command
        }
    })

    console.log('Sincronização de mesa-comanda concluída!')
}