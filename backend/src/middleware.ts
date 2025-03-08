import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthPayload } from './types';

export async function authMiddleware(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
        // Get the Authorization header
        const authHeader = request.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            reply.status(401).send({ error: 'Unauthorized: Missing or invalid token' });
            return;
        }

        const token = authHeader.split(' ')[1];

        const payload = await request.jwtVerify<AuthPayload>();

        request.user = payload;
    } catch (err) {
        reply.status(401).send({ error: 'Unauthorized: Invalid or expired token' });
    }
}
