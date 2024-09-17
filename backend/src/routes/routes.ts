import { FastifyInstance } from "fastify";
import { boardsRoutes } from "./boards";

export async function routes(fastify: FastifyInstance){
    fastify.register(boardsRoutes)
    
    fastify.get('/', (req, res) => {
        console.log('Connected')
        res.send('Connected')
    })
}