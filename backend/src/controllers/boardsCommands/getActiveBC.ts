import { FastifyRequest, FastifyReply } from 'fastify';

export function getBoardCommand(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}