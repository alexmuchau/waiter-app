import { FastifyRequest, FastifyReply } from 'fastify';

export function getActiveTablesCommands(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}