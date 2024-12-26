import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function insertTableCommand(req: FastifyRequest, res: FastifyReply) {
    // const { tableCommand } = req.body as { tableCommand: {
    //     command: number
    //     table: number
    // } }

    console.log(req.body)

    // await mobileClient.activeTableCommand.create({
    //     data: {
    //         commandNumber: tableCommand.command,
    //         tableNumber: tableCommand.table
    //     }
    // })

    console.log('Sincronização de mesa-comanda concluída!')
}