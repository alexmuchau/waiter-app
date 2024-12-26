import { FastifyInstance } from "fastify";
import { insertClients } from "../controllers/syncDB/insertClients";
import { updateClients } from "../controllers/syncDB/updateClient";
import { insertProducts } from "../controllers/syncDB/insertProducts";
import { updateProduct } from "../controllers/syncDB/updateProduct";
import { insertTableCommand } from "../controllers/syncDB/insertTableCommand";
import { deleteTableCommand } from "../controllers/syncDB/deleteTableCommand";

export async function syncDBRoutes(fastify: FastifyInstance){
    fastify.post('/syncDB/clients', insertClients)
    fastify.put('/syncDB/clients', updateClients)

    fastify.post('/syncDB/products', insertProducts)
    fastify.put('/syncDB/products', updateProduct)

    fastify.post('/syncDB/tableCommand', insertTableCommand)
    fastify.delete('/syncDB/tableCommand', deleteTableCommand)
}