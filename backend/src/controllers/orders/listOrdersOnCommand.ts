import { FastifyReply, FastifyRequest } from "fastify";
import { desktopClient } from "../../../prisma/prisma";
import { ResumeOrderProps } from "../../../../utils/types";

interface PreOrderProps {
    Id_Produto: number,
    Produto_Curto: string,
    Unitario: number,
    Quantidade_Total: number,
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

    const productsTotal: ResumeOrderProps = await desktopClient.$queryRaw`
        SELECT
            pp.Id_Produto,
            p.Produto_Curto,
            pp.Unitario,
            SUM(pp.Quantidade) AS Quantidade_Total,
            SUM(pp.Total) AS Total
        FROM windados.tb_vendas_pre vp
        INNER JOIN windados.tb_vendas_produtos_pre pp
            ON vp.Codigo = pp.Id_Venda
        INNER JOIN windados.tb_produtos p
            ON p.Codigo = pp.Id_Produto
        WHERE
            vp.Id_Venda IS NULL
            AND Id_Comanda = ${command?.Codigo}
        GROUP BY Id_Produto, Produto_Curto, Unitario
    `.then((res: any) => ({
        products: res.map((productTotal: PreOrderProps) => ({
            id: productTotal.Id_Produto.toString(),
            name: productTotal.Produto_Curto,
            price: productTotal.Unitario,
            quantity: productTotal.Quantidade_Total,
        })),
        total: res.reduce((acc: number, productTotal: PreOrderProps) => acc + productTotal.Total, 0)
    }))

    reply.send({productsTotal})
}