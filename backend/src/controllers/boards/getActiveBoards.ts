import { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../../../prisma/prisma';
import { equal } from 'assert';

export async function getActiveBoards(req: FastifyRequest, res: FastifyReply) {
    const activeBoards = await prisma.tb_mesa.findMany({
        where: {
            Ativo: {
                equals: "Sim"
            }
        }
    })
    
    return res.status(200).send(activeBoards)
}