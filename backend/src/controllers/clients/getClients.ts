import { FastifyRequest, FastifyReply } from 'fastify';
import { desktopClient, mobileClient } from '../../../prisma/prisma';
import { ClientProps } from '../../../../utils/types';

export async function getClients(req: FastifyRequest, res: FastifyReply) {    
    const clients: ClientProps[] = await mobileClient.client.findMany().then((clients) => {
        return clients.map((client) => ({
            id: String(client.clientId),
            name: client.name
        }))
    })
    
    return res.send({clients})
}