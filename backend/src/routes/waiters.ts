import { FastifyInstance } from "fastify";
import { loginWaiter } from "../controllers/waiter/loginWaiter";
import { createWaiter } from "../controllers/waiter/createWaiter";
import { authMiddleware } from "../middleware";

export async function waitersRoutes(fastify: FastifyInstance){
    fastify.route({
        method: 'POST',
        url: '/login',
        handler: loginWaiter
    })

    fastify.route({
        method: 'GET',
        url: '/active',
        preHandler: [authMiddleware],
        handler: createWaiter
    })
}