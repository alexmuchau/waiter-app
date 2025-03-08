import { FastifyInstance } from "fastify";
import { createOrder } from "../controllers/orders/createOrder";
import { authMiddleware } from "../middleware";

export async function ordersRoutes(fastify: FastifyInstance){
    fastify.route({
        method: 'POST',
        url: '/',
        preHandler: [authMiddleware],
        handler: createOrder
    })
}