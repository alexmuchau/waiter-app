import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../../../prisma/prisma';

export async function getClients(req: FastifyRequest, res: FastifyReply) {    
    // const clients = await prisma.tb_pessoas.findMany()
    
    return res.send('Working!')
}