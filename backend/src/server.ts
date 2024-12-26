import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes/routes';

export default function createServer(){
    const fastify = Fastify({logger: {
        level: 'error'
    }})

    fastify.register(cors, {
        origin: 'http://localhost:3000', // Permitir apenas o frontend
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    });
    fastify.register(routes)
    
    return fastify;
}