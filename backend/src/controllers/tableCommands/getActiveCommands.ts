import { FastifyRequest, FastifyReply } from 'fastify';

export function getActiveCommandsOnTable(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}