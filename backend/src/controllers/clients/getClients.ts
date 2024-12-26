import { FastifyRequest, FastifyReply } from 'fastify';
import { desktopClient, mobileClient } from '../../../prisma/prisma';

export async function getClients(req: FastifyRequest, res: FastifyReply) {    
    const clients = await mobileClient.client.findMany()
    
    return res.send({clients})
}