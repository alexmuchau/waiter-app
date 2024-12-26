import { FastifyInstance } from "fastify";
import { tablesRoutes } from "./tables";
import { tablesCommandsRoutes } from "./tablesCommands";
import { clientsRoutes } from "./clients";
import { commandsRoutes } from "./commands";
import { ordersRoutes } from "./orders";
import { productsRoutes } from "./products";
import { syncDBRoutes } from "./syncDB";

export async function routes(fastify: FastifyInstance){
    fastify.register(tablesRoutes)
    fastify.register(tablesCommandsRoutes)
    fastify.register(clientsRoutes)
    fastify.register(commandsRoutes)
    fastify.register(ordersRoutes)
    fastify.register(productsRoutes)
    fastify.register(syncDBRoutes)
    
    fastify.get('/', (req, res) => {
        console.log('Connected')
        res.send('Connected')
    })
}