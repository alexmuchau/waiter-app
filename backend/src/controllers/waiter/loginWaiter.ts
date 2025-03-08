import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function loginWaiter(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    const { username, password } = req.body as {username: string, password: string}

    if(!username || !password) return res.status(400).send({error: "Missing body parameters"})

    const waiter = await mobileClient.waiter.findFirst({
        where: {
            username,
            password
        }
    })

    if(!waiter) return res.status(400).send({error: "Invalid credentials"})

    const newToken = this.jwt.sign({ waiterId: waiter.waiterId })
    
    return res.status(200).send({
        message: "Waiter logged in",
        waiter: {
            id: waiter.waiterId,
            name: waiter.name
        },
        token: newToken
    })
}