import { FastifyReply, FastifyRequest } from "fastify";
import { desktopClient } from "../../../prisma/prisma";
import { format } from "date-fns";

export async function printOrder(req: FastifyRequest, reply: FastifyReply) {
    const { commandNumber } = req.query as { commandNumber: number }

    if (!commandNumber) {
        reply.status(401).send('Without commandNumber!')
        return
    }

    const commandId: { Codigo: number } = await desktopClient.$queryRaw`
        SELECT Codigo
        FROM windados.tb_vendas_pre_comandas
        WHERE
            CAST(Numero_Comanda AS UNSIGNED) = ${commandNumber}
            AND Id_Mesa IS NOT NULL
        LIMIT 1
    `

    if (!commandId) {
        reply.status(401).send('Command dont exist!')
        return
    }

    const impId = await desktopClient.tb_movel_0001_impressao.findFirst({
        select: {
            Codigo: true
        },
        orderBy: {
            Codigo: 'desc'
        },
        take: 1
    }).then((res) => !res ? 99 : res.Codigo + 100)



    await desktopClient.tb_movel_0001_impressao.create({
        data: {
            Codigo: impId,
            Data: new Date(),
            Hora: format(new Date(), 'HH:mm:ss'),
            Id_Comanda: commandId.Codigo
        }
    })

    reply.status(200).send('Finished!')
}