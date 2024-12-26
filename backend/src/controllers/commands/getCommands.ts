import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function getCommands(req: FastifyRequest, res: FastifyReply) {    
    const commands = mobileClient.command.findMany()
    
    return res.send({commands})
}