import { FastifyRequest, FastifyReply } from 'fastify';

export function getBoards(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Get Boards')
}