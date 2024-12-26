import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function getActiveTables(req: FastifyRequest, res: FastifyReply) {
    const tables = await mobileClient.table.findMany({
        where: {
            activeTableCommand: {
                every: {
                    commandNumber: {
                        not: undefined
                    }
                }
            }
        },
        include: {
            activeTableCommand: true
        }
    })
    
    return res.status(200).send(tables)
}