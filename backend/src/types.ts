export interface AuthPayload {
    waiterId: number;
}

declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: AuthPayload;
    }
}