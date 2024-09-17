import { FastifyRequest, FastifyReply } from 'fastify';

export function createOrder(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}