import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function updateProduct(req: FastifyRequest, res: FastifyReply) {
    const { product } = req.body as { product: {
        id: number,
        name: string,
        category: "CHOPP" | "FOOD",
        price: number
    } }

    await mobileClient.product.update({
        data: {
            name: product.name,
            category: product.category,
            price: product.price,
        },
        where: {
            productId: product.id
        }
    })

    console.log('Sincronização de produto concluída!')
}