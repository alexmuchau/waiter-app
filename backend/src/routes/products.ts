import { FastifyInstance } from "fastify";
import { getProducts } from "../controllers/products/getProducts";

export async function productsRoutes(fastify: FastifyInstance){
    fastify.get('/products/', getProducts)
}