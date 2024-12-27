import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';
import { ActiveTableItemProps } from '../../../../utils/types';

export async function getActiveTables(req: FastifyRequest, res: FastifyReply) {
    const tables: ActiveTableItemProps[] = await mobileClient.table.findMany({
        include: {
            activeTableCommand: {
                select: {
                    command: {
                        select: {
                            commandNumber: true,
                            client: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            }
        }
    }).then((tables) => tables.filter((table) => table.activeTableCommand.length > 0).map((table) => ({
            tableNumber: table.tableNumber.toString(),
            tableDescription: table.tableNumber.toString(),
            commands: table.activeTableCommand.map((activeTableCommand) => ({
                commandNumber: activeTableCommand.command.commandNumber.toString(),
                clientName: activeTableCommand.command.client?.name
            }))
    })))
    
    return res.status(200).send({tables})
}