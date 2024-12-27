import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';
import { CommandItemProps } from '../../../../utils/types';

export async function getCommands(req: FastifyRequest, res: FastifyReply) {    
    const commands: CommandItemProps[] = await mobileClient.command.findMany({
        include: {
            activeTableCommand: true
        }
    }).then((commands) => {
        return commands.map((command) => {
            return {
                commandNumber: command.commandNumber.toString(),
                tableNumber: command.activeTableCommand?.tableNumber.toString(),
                isActive: command.activeTableCommand ? true : false
            }
        }
    )})

    return res.send({commands})
}