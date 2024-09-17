import { FastifyRequest, FastifyReply } from 'fastify';

export function updateStateCommand(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}