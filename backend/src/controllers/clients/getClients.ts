import { FastifyRequest, FastifyReply } from 'fastify';

export function getClients(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}