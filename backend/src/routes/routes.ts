import { FastifyInstance } from "fastify";
import { tablesRoutes } from "./tables";
import { clientsRoutes } from "./clients";
import { commandsRoutes } from "./commands";
import { ordersRoutes } from "./orders";
import { productsRoutes } from "./products";
import { syncDBRoutes } from "./syncDB";
import { waitersRoutes } from "./waiters";

export async function routes(fastify: FastifyInstance){
    fastify.register(tablesRoutes, { prefix: 'tables' })
    fastify.register(clientsRoutes, { prefix: 'clients' })
    fastify.register(commandsRoutes, { prefix: 'commands' })
    fastify.register(ordersRoutes, { prefix: 'orders' })
    fastify.register(productsRoutes, { prefix: 'products' })
    fastify.register(waitersRoutes, { prefix: 'waiters' })
    fastify.register(syncDBRoutes, { prefix: 'syncDB' })
    
    fastify.get('/', (req, res) => {
        res.status(200).send('Connected')
    })
}