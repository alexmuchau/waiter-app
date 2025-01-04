import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function createWaiter(req: FastifyRequest, res: FastifyReply) {
    const { name, username, password } = req.body as {name: string, username: string, password: string}

    if(!name || !username || !password) return res.status(400).send({error: "Missing body parameters"})
    
    await mobileClient.waiter.create({
        data: {
            name,
            username,
            password
        }
    })

    return res.status(200).send({
        message: "Waiter created"
    })
}