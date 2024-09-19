import { FastifyRequest, FastifyReply } from 'fastify';

export function getActiveBoardsCommands(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}