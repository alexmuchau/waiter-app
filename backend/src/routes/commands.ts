import { FastifyInstance } from "fastify";
import { getCommands } from "../controllers/commands/getCommands";

export async function commandsRoutes(fastify: FastifyInstance){
    fastify.get('/commands', getCommands)
}