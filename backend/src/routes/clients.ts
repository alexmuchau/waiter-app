import { FastifyInstance } from "fastify";
import { getClients } from "../controllers/clients/getClients";

export async function clientsRoutes(fastify: FastifyInstance){
    fastify.get('/clients/', getClients)
}