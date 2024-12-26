import { FastifyRequest, FastifyReply } from 'fastify';
import { desktopClient, mobileClient } from '../../../prisma/prisma';

export async function getTables(req: FastifyRequest, res: FastifyReply) {
    const tables = await mobileClient.table.findMany({
        include: {
            activeTableCommand: true
        }
    })

    return res.send({tables})
}