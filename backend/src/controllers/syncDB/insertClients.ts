import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function insertClients(req: FastifyRequest, res: FastifyReply) {
    const { client } = req.body as { client: {
        id: number,
        name: string
    } }

    await mobileClient.client.createMany({
        data: {
            clientId: client.id,
            name: client.name
        }
    })

    console.log('Sincronização de clientes concluída!')
}