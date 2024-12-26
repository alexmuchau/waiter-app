import { FastifyInstance } from "fastify";
import { getTables } from "../controllers/table/getTables";
import { getActiveTables } from "../controllers/table/getActiveTables";

export async function tablesRoutes(fastify: FastifyInstance){
    fastify.get('/tables', getTables)
    fastify.get('/tables/active', getActiveTables)
}