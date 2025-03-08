import { FastifyInstance } from "fastify";
import { getTables } from "../controllers/table/getTables";
import { getActiveTables } from "../controllers/table/getActiveTables";
import { authMiddleware } from "../middleware";

export async function tablesRoutes(fastify: FastifyInstance){
    fastify.route({
        method: 'GET',
        url: '/',
        preHandler: [authMiddleware],
        handler: getTables
    })

    fastify.route({
        method: 'GET',
        url: '/active',
        preHandler: [authMiddleware],
        handler: getActiveTables
    })
}