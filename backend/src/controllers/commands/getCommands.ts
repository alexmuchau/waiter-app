import { FastifyRequest, FastifyReply } from 'fastify';

export function getCommands(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}