import { FastifyRequest, FastifyReply } from 'fastify';

export function getActiveBoards(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}