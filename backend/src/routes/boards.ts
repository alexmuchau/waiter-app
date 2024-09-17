import { FastifyInstance } from "fastify";
import { getBoards } from "../controllers/boards/getBoards";

export async function boardsRoutes(fastify: FastifyInstance){
    fastify.get('/boards/', getBoards)
}