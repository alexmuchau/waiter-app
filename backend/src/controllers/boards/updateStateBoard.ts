import { FastifyRequest, FastifyReply } from 'fastify';

export function updateStateBoard(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}