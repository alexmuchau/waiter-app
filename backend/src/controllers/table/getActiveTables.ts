import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function getActiveTables(req: FastifyRequest, res: FastifyReply) {
    const tables = await mobileClient.table.findMany({
        include: {
            activeTableCommand: {
                select: {
                    command: {
                        select: {
                            commandNumber: true,
                            client: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    
    return res.status(200).send({tables: tables.filter(table => table.activeTableCommand.length > 0)})
}