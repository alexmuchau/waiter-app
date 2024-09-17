import { FastifyRequest, FastifyReply } from 'fastify';

export function getActiveCommandsOnBoard(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}