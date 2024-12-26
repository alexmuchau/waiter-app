import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function updateClients(req: FastifyRequest, res: FastifyReply) {
    const { client } = req.body as { client: {
        id: number,
        name: string
    } }

    await mobileClient.client.update({
        data: {
            name: client.name
        },
        where: {
            clientId: client.id
        }
    })

    console.log('Atualização de cliente concluída!')
}