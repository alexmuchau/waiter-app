import { FastifyInstance } from "fastify";
import { getClients } from "../controllers/clients/getClients";
import { authMiddleware } from "../middleware";

export async function clientsRoutes(fastify: FastifyInstance){
    fastify.route({
        method: 'GET',
        url: '/',
        preHandler: [authMiddleware],
        handler: getClients
    })
}