import { FastifyRequest, FastifyReply } from 'fastify';
import { desktopClient, mobileClient } from '../../../prisma/prisma';

export async function getClients(req: FastifyRequest, res: FastifyReply) {    
    const clients = await mobileClient.client.findMany({
        include: {
            command: {
                select: {
                    commandNumber: true,
                    activeTableCommand: {
                        select: {
                            tableNumber: true,
                        }
                    }
                }
            }
        }
    })
    
    return res.send({clients})
}