import { FastifyRequest, FastifyReply } from 'fastify';

export function getProducts(req: FastifyRequest, res: FastifyReply) {    
    return res.send('Working!')
}