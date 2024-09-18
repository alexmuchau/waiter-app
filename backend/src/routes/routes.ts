import { FastifyInstance } from "fastify";
import { boardsRoutes } from "./boards";
import { boardsCommandsRoutes } from "./boardsCommands";
import { clientsRoutes } from "./clients";
import { commandsRoutes } from "./commands";
import { ordersRoutes } from "./orders";
import { productsRoutes } from "./products";

export async function routes(fastify: FastifyInstance){
    fastify.register(boardsRoutes)
    fastify.register(boardsCommandsRoutes)
    fastify.register(clientsRoutes)
    fastify.register(commandsRoutes)
    fastify.register(ordersRoutes)
    fastify.register(productsRoutes)
    
    fastify.get('/', (req, res) => {
        console.log('Connected')
        res.send('Connected')
    })
}