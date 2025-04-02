import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifyJwt } from "@fastify/jwt"

import { routes } from './routes/routes';
import { syncDBs } from './tools/syncDBs';

const HOST = process.env.HOST ?? 'localhost'
const PORT = 8080
const JWT_SECRET = process.env.JWT_SECRET ?? 'secret'

const app = fastify()

app.register(fastifyCors, { origin: '*' })
app.register(fastifyJwt, {
    secret: JWT_SECRET
});

app.register(routes)

app.listen({ host: HOST, port: PORT }).then( async () => {
    await syncDBs()
    console.log(`Server running on http://${HOST}:${PORT}`)
})