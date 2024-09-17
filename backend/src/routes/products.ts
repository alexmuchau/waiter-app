import { FastifyInstance } from "fastify";
import { getBoards } from "../controllers/boards/getBoards";

export async function productsRoutes(fastify: FastifyInstance){
    fastify.get('/boards/', getBoards)
}