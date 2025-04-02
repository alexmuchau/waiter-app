import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifyJwt } from "@fastify/jwt"

import { authMiddleware } from './middleware';
import { routes } from './routes/routes';
import { syncDBs } from './tools/syncDBs';

const app = fastify()

app.register(fastifyCors, { origin: '*' })
app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET ?? 'secret'
});

app.register(routes)

app.listen({ host: process.env.HOST, port: 8080 }).then( async () => {
    await syncDBs()
    
    console.log('Server running')
})