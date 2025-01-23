import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';
import { CategoryGroupedProductProps, ProductListProps } from '../../../../utils/types';

export async function getProducts(req: FastifyRequest, res: FastifyReply) {    
    const { category } = req.query as { category: string }

    const products = await mobileClient.product.findMany({
        include: {
            category: true
        },
        orderBy: [
            { category: { order: 'asc' } },
            { name: 'asc' }
        ]
    })
    
    let groupedProducts: CategoryGroupedProductProps = {}
    
    products.forEach((product) => {
        const p: ProductListProps = {
            id: product.productId.toString(),
            name: product.name,
            price: product.price
        }
        
        if (product.category.name in groupedProducts) groupedProducts[product.category.name].push(p)
        else groupedProducts[product.category.name] = [p]
    })
    
    return res.send({products: groupedProducts})
}