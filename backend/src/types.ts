export interface AuthPayload {
    userId: number;
    companyId: number;
}

declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: AuthPayload;
    }
}