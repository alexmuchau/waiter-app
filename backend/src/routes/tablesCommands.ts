import { FastifyInstance } from "fastify";
import { getActiveTablesCommands } from "../controllers/tableCommands/getActiveTC";
import { getActiveCommandsOnTable } from "../controllers/tableCommands/getActiveCommands";
import { createTableCommand } from "../controllers/tableCommands/createTC";

export async function tablesCommandsRoutes(fastify: FastifyInstance){
    fastify.get('/boards/active/commands', getActiveTablesCommands)
    fastify.get('/commands/active/board/:id', getActiveCommandsOnTable)
    fastify.post('/boards/command', createTableCommand)
}