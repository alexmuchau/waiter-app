import { FastifyInstance } from "fastify";
import { createOrder } from "../controllers/orders/createOrder";

export async function ordersRoutes(fastify: FastifyInstance){
    fastify.post('/order', createOrder)
}