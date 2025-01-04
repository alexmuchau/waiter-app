import { FastifyInstance } from "fastify";
import { tablesRoutes } from "./tables";
import { clientsRoutes } from "./clients";
import { commandsRoutes } from "./commands";
import { ordersRoutes } from "./orders";
import { productsRoutes } from "./products";
import { syncDBRoutes } from "./syncDB";
import { waitersRoutes } from "./waiters";

export async function routes(fastify: FastifyInstance){
    fastify.register(tablesRoutes)
    fastify.register(clientsRoutes)
    fastify.register(commandsRoutes)
    fastify.register(ordersRoutes)
    fastify.register(productsRoutes)
    fastify.register(waitersRoutes)
    fastify.register(syncDBRoutes)
    
    fastify.get('/', (req, res) => {
        res.status(200).send('Connected')
    })
}