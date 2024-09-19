import { FastifyInstance } from "fastify";
import { getCommands } from "../controllers/commands/getCommands";
import { updateStateCommand } from "../controllers/commands/updateStateCommand";

export async function commandsRoutes(fastify: FastifyInstance){
    fastify.get('/commands/', getCommands)
    fastify.put('/commands/:id', updateStateCommand)
}