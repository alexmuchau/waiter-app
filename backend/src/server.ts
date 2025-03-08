import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifyJwt } from "@fastify/jwt"

import { authMiddleware } from './middleware';
import { routes } from './routes/routes';
import { syncDBs } from './tools/syncDBs';

const app = fastify()

app.register(fastifyCors, { origin: '*' })
app.register(fastifyJwt, {
    secret: 'your-secret-key'
});

app.register(routes)

app.listen({ host: '192.168.0.36', port: 8080 }).then( async () => {
    await syncDBs()
    
    console.log('Server running')
})