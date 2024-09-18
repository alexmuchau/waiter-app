import { FastifyRequest, FastifyReply } from 'fastify';
import type { OrderProps } from '../../../../utils/types';

export function createOrder(req: FastifyRequest, res: FastifyReply) {    
    const { order } = req.body as { order: OrderProps }
    
    return res.send('Working!')
}