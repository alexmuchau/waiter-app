import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function insertProducts(req: FastifyRequest, res: FastifyReply) {
    const { product } = req.body as { product: {
        id: number,
        name: string,
        category: "CHOPP" | "FOOD",
        price: number
    } }

    await mobileClient.product.create({
        data: {
            productId: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
        }
    })

    console.log('Sincronização de produtos concluída!')
}