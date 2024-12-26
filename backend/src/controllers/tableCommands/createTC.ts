import { FastifyRequest, FastifyReply } from 'fastify';

export function createTableCommand(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}