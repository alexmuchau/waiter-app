import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';
import { ClientProps } from '../../../../utils/types';

export async function getClients(req: FastifyRequest, res: FastifyReply) {    
    const clients: ClientProps[] = await mobileClient.client.findMany({
        include: {
            command: {
                include: {
                    table: true
                }
            }
        }
    }).then((clients) => {
        return clients.map((client) => ({
            id: String(client.clientId),
            name: client.name,
            command: {
                id: client.command.commandNumber.toString(),
                description: client.command.commandNumber.toString(),
                commandNumber: client.command.commandNumber.toString(),
                table: !!client.command.table ? {
                    id: client.command.table.tableNumber.toString(),
                    description: client.command.table.tableDescription.toString(),
                    tableNumber: client.command.table.tableNumber.toString(),
                    isActive: !!client.command.table,
                } : undefined,
                isActive: !!client.command.table,
            }
        }))
    })
    
    return res.send({clients})
}