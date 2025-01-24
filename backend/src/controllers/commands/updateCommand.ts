import { FastifyRequest, FastifyReply } from "fastify";
import { desktopClient, mobileClient } from "../../../prisma/prisma";
import { CommandItemProps } from "../../../../utils/types";
import { syncCommands } from "../../tools/syncDBs";

export async function updateCommand(req: FastifyRequest, res: FastifyReply) {
    const { commandNumber, tableNumber } = req.body as {
        commandNumber: string,
        tableNumber: string
    };
    
    console.log(commandNumber, tableNumber)
    
    const desktopCommand = await desktopClient.tb_vendas_pre_comandas.findFirst({
        where: {
            Numero_Comanda: commandNumber
        }
    })
    
    if (!desktopCommand) {
        return res.status(500).send("Error when finding table");
    }
    
    const desktopTable = await desktopClient.tb_mesas.findFirst({
        where: {
            Mesa: tableNumber.padStart(2, '0')
        }
    })
    
    if (!desktopTable) {
        return res.status(500).send("Error when finding table");
    }
    
    const command = await mobileClient.command.update({
        where: {
            commandNumber: parseInt(commandNumber)
        },
        data: {
            tableNumber: parseInt(tableNumber)
        }
    })
    
    console.log(command)
    
    await desktopClient.tb_vendas_pre_comandas.update({
        where: {
            Codigo: desktopCommand.Codigo
        },
        data: {
            Id_Mesa: desktopTable.Codigo
        }
    })

    return res.send({ command });
}
