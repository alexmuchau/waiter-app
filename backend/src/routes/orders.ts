import { FastifyInstance } from "fastify";
import { createOrder } from "../controllers/orders/createOrder";
import { authMiddleware } from "../middleware";
import { listOrdersOnCommand } from "../controllers/orders/listOrdersOnCommand";
import { printOrder } from "../controllers/orders/printOrder";

export async function ordersRoutes(fastify: FastifyInstance){
    fastify.route({
        method: 'GET',
        url: '/',
        preHandler: [authMiddleware],
        handler: listOrdersOnCommand
    })
    
    fastify.route({
        method: 'POST',
        url: '/',
        preHandler: [authMiddleware],
        handler: createOrder
    })

    fastify.route({
        method: 'GET',
        url: '/printOrder',
        preHandler: [authMiddleware],
        handler: printOrder
    })
}