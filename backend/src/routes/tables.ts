import { FastifyInstance } from "fastify";
import { getTables } from "../controllers/table/getTables";
import { getActiveTables } from "../controllers/table/getActiveTables";
import { updateStateBoard } from "../controllers/table/updateStateTable";

export async function tablesRoutes(fastify: FastifyInstance){
    fastify.get('/tables/', getTables)
    fastify.get('/tables/active', getActiveTables)
    fastify.put('/tables/:id', updateStateBoard)
}