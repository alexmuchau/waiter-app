import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';
import { ProductListProps } from '../../../../utils/types';

export async function getProducts(req: FastifyRequest, res: FastifyReply) {    
    const { category } = req.query as { category: 'CHOPP' | "FOOD" }

    if (!category) {
        return res.status(400).send({error: 'Category not provided'})
    }

    const products: ProductListProps[] = await mobileClient.product.findMany({
        where: {
            category: category
        }
    }).then((products) => {
        return products.map((product) => ({
            id: product.productId.toString(),
            name: product.name,
            price: product.price
        }))
    })
    
    return res.send({products})
}