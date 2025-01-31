import { FastifyRequest, FastifyReply } from "fastify";
import { desktopClient, mobileClient } from "../../../prisma/prisma";

export async function updateCommand(req: FastifyRequest, res: FastifyReply) {
    const { commandNumbers, tableNumber } = req.body as {
        commandNumbers: string[],
        tableNumber: string
    };
    
    const desktopCommands = await desktopClient.tb_vendas_pre_comandas.findMany({
        where: {
            Numero_Comanda: {
                in: commandNumbers.map((command) => command)
            }
        }
    })
    
    if (!(desktopCommands.length == commandNumbers.length)) {
        return res.status(500).send("Error when finding command");
    }
    
    const desktopTable = await desktopClient.tb_mesas.findFirst({
        where: {
            Mesa: tableNumber.padStart(2, '0')
        }
    })
    
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
