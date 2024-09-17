import { FastifyInstance } from "fastify";
import { getBoards } from "../controllers/boards/getBoards";

export async function ordersRoutes(fastify: FastifyInstance){
    fastify.get('/boards/', getBoards)
}