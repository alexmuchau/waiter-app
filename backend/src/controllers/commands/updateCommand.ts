import { FastifyRequest, FastifyReply } from "fastify";
import { desktopClient, mobileClient } from "../../../prisma/prisma";

export async function updateCommand(req: FastifyRequest, res: FastifyReply) {
    const { commandNumbers, tableNumber } = req.body as {
        commandNumbers: string[],
        tableNumber: string
    };
    
    const desktopCommands: {Codigo: number, Id_Mesa: number}[] = await desktopClient.$queryRaw`
        SELECT Codigo, Numero_Comanda, Id_Mesa FROM tb_vendas_pre_comandas
        WHERE
            RegExcluido = "0"
            AND CAST(Numero_Comanda AS SIGNED) IN (${commandNumbers.map((command) => command).join(',')})
    `
    
    if (!(desktopCommands.length == commandNumbers.length)) {
        return res.status(500).send("Error when finding command");
    }

    const desktopTable: {Codigo: number} | undefined = await desktopClient.$queryRaw`
        SELECT Codigo FROM tb_mesas
        WHERE
            RegExcluido = "0"
            AND Ativo = '-1'
            AND CAST(Mesa AS SIGNED) = ${tableNumber}
    `.then((res: any) => res.lenght < 1 ? undefined : res[0])
    
    if (!desktopTable) {
        return res.status(500).send("Error when finding table");
    }
    
    const command = await mobileClient.command.updateMany({
        where: {
            commandNumber: {
                in: commandNumbers.map((command) => parseInt(command))
            }
        },
        data: {
            tableNumber: parseInt(tableNumber)
        }
    })
    
    await desktopClient.tb_vendas_pre_comandas.updateMany({
        where: {
            Codigo: {
                in: desktopCommands.map((command) => command.Codigo)
            }
        },
        data: {
            Id_Mesa: desktopTable.Codigo
        }
    })

    return res.send({ command });
}
