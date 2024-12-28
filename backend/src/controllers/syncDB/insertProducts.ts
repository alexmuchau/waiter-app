import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function insertProducts(req: FastifyRequest, res: FastifyReply) {
    const { products } = req.body as { products: {
        id: number,
        name: string,
        category: "CHOPP" | "FOOD",
        price: number
    }[] }

    await mobileClient.product.createMany({
        data: products.map((product) => ({
            productId: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
        }))
    })

    console.log('Sincronização de produtos concluída!')
}