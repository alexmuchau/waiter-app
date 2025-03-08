import { FastifyInstance } from "fastify";
import { getCommands } from "../controllers/commands/getCommands";
import { updateCommand } from "../controllers/commands/updateCommand";
import { authMiddleware } from "../middleware";

export async function commandsRoutes(fastify: FastifyInstance) {
    fastify.route({
        method: 'GET',
        url: '/',
        preHandler: [authMiddleware],
        handler: getCommands
    })

    fastify.route({
        method: 'PUT',
        url: '/',
        preHandler: [authMiddleware],
        handler: updateCommand
    })
}
