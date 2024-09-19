import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../../../prisma/prisma';

export async function getCommands(req: FastifyRequest, res: FastifyReply) {    
    const commands = await prisma.tb_comanda.findMany()
    
    return res.send(commands)
}