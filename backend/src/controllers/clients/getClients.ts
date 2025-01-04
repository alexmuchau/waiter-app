import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';
import { ClientProps } from '../../../../utils/types';

export async function getClients(req: FastifyRequest, res: FastifyReply) {    
    const clients: ClientProps[] = await mobileClient.client.findMany({
        include: {
            command: true
        }
    }).then((clients) => {
        return clients.map((client) => ({
            id: String(client.clientId),
            name: client.name,
            command: {
                commandNumber: client.command.commandNumber?.toString(),
                tableNumber: client.command.tableNumber?.toString(),
                isActive: !!client.command.tableNumber
            }
        }))
    })
    
    return res.send({clients})
}