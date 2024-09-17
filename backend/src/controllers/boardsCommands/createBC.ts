import { FastifyRequest, FastifyReply } from 'fastify';

export function createBoardCommand(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}