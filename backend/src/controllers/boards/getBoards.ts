import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../../../prisma/prisma';

export async function getBoards(req: FastifyRequest, res: FastifyReply) {    
    const boards = await prisma.tb_mesa.findMany()
    
    return res.send(boards)
}