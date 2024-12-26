import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function getProducts(req: FastifyRequest, res: FastifyReply) {    
    const { category } = req.query as { category: string }

    if (!category) {
        return res.status(400).send({error: 'Category not provided'})
    }

    const products = await mobileClient.product.findMany({
        where: {
            category: category
        }
    })
    
    return res.send({products})
}