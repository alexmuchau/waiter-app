import { FastifyInstance } from "fastify";
import { getActiveBoardsCommands } from "../controllers/boardsCommands/getActiveBC";
import { getActiveCommandsOnBoard } from "../controllers/boardsCommands/getActiveCommandsOnBoard";
import { createBoardCommand } from "../controllers/boardsCommands/createBC";

export async function boardsCommandsRoutes(fastify: FastifyInstance){
    fastify.get('/boards/active/commands', getActiveBoardsCommands)
    fastify.get('/commands/active/board/:id', getActiveCommandsOnBoard)
    fastify.post('/boards/command', createBoardCommand)
}