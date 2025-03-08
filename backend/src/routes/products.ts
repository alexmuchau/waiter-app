import { FastifyInstance } from "fastify";
import { getProducts } from "../controllers/products/getProducts";
import { authMiddleware } from "../middleware";

export async function productsRoutes(fastify: FastifyInstance){
    fastify.route({
        method: 'GET',
        url: '/',
        preHandler: [authMiddleware],
        handler: getProducts
    })
}