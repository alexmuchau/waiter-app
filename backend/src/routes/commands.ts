import { FastifyInstance } from "fastify";
import { getCommands } from "../controllers/commands/getCommands";
import { updateCommand } from "../controllers/commands/updateCommand";

export async function commandsRoutes(fastify: FastifyInstance) {
    fastify.get("/commands", getCommands);
    fastify.put("/commands", updateCommand);
}
