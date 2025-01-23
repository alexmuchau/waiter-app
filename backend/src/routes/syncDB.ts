import { FastifyInstance } from "fastify";
import { syncDB } from "../controllers/syncDB/syncDB";

export async function syncDBRoutes(fastify: FastifyInstance){
    fastify.post('/syncDB', syncDB)
}