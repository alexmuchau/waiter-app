import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function updateCommand(req: FastifyRequest, res: FastifyReply) {
    const { command } = req.body as { command: {
        commandNumber: number,
        tableNumber: number
        active: '0' | '-1'
    } }

    if (command.active === '0') {
        await mobileClient.command.delete({
            where: {
                commandNumber: command.commandNumber
            }
        })
    } else {
        await mobileClient.command.update({
            data: {
                commandNumber: command.commandNumber,
                tableNumber: command.tableNumber,
            },
            where: {
                commandNumber: command.commandNumber
            }
        })
    }

    console.log('Sincronização de comanda concluída!')
}