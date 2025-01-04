import { FastifyInstance } from "fastify";
import { createOrder } from "../controllers/orders/createOrder";
import { loginWaiter } from "../controllers/waiter/loginWaiter";
import { createWaiter } from "../controllers/waiter/createWaiter";

export async function waitersRoutes(fastify: FastifyInstance){
    fastify.post('/waiters/login', loginWaiter)
    fastify.post('/waiters', createWaiter)
}