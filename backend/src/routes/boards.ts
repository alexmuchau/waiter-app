import { FastifyInstance } from "fastify";
import { getBoards } from "../controllers/boards/getBoards";
import { getActiveBoards } from "../controllers/boards/getActiveBoards";
import { updateStateBoard } from "../controllers/boards/updateStateBoard";

export async function boardsRoutes(fastify: FastifyInstance){
    fastify.get('/boards/', getBoards)
    fastify.get('/boards/active', getActiveBoards)
    fastify.put('/boards/:id', updateStateBoard)
}