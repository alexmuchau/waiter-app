import { FastifyReply, FastifyRequest } from "fastify";
import { desktopClient } from "../../../prisma/prisma";
import { ResumeOrderProps } from "../../../../utils/types";

interface PreOrderProps {
    Codigo: number,
    Data_Movimento: Date,
    Hora_Finalizacao: string,
    Id_Produto: number,
    Produto_Curto: string,
    Quantidade: number,
    Unitario: number,
    Total: number
}

export async function listOrdersOnCommand(req: FastifyRequest, reply: FastifyReply) {
    const { commandNumber } = req.query as { commandNumber: string }

    if (!commandNumber) {
        reply.status(400).send('Command is undefined!')
        return
    }

    const command = await desktopClient.tb_vendas_pre_comandas.findFirst({
        where: {
            Numero_Comanda: commandNumber
        }
    })

    if (!command) {
        reply.status(400).send('Command is not found!')
        return
    }

    const orders: PreOrderProps[] = await desktopClient.$queryRaw`
        SELECT
            vp.Codigo,
            vp.Data_Movimento,
            vp.Hora_Finalizacao,
            pp.Id_Produto,
            p.Produto_Curto,
            pp.Quantidade,
            pp.Unitario,
            pp.Total
        FROM windados.tb_vendas_pre vp
        INNER JOIN windados.tb_vendas_produtos_pre pp
            ON vp.Codigo = pp.Id_Venda
        INNER JOIN windados.tb_produtos p
            ON p.Codigo = pp.Id_Produto
        WHERE
            vp.Id_Venda IS NULL
            AND Id_Comanda = ${command?.Codigo}
    `

    console.log(orders)

    let res: ResumeOrderProps = {}

    for (const order of orders) {
        order.Data_Movimento.setTime(order.Data_Movimento.getTime() + (4 * 60 * 60 * 1000))
        const dt = order.Data_Movimento.toLocaleDateString('pt-BR') + ' - ' + order.Hora_Finalizacao
        console.log(`${dt}`)
        console.log(order.Data_Movimento)
        res[dt] = (res[dt] ?? [])

        res[dt].push({
            id: `${order.Codigo}${order.Id_Produto}`,
            name: order.Produto_Curto,
            quantity: order.Quantidade,
            price: order.Unitario,
            totalPrice: order.Total
        })
    }


    reply.send({
        orders: res
    })
}