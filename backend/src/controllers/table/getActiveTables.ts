import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';
import { ActiveTableItemProps } from '../../../../utils/types';
import { syncDBs } from '../../tools/syncDBs';

export async function getActiveTables(req: FastifyRequest, res: FastifyReply) {
    const tables: ActiveTableItemProps[] = await mobileClient.table.findMany({
        include: {
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
    }).then((tables) => tables.filter((table) => table.command.length > 0).map((table) => ({
            tableNumber: table.tableNumber.toString(),
            tableDescription: table.tableDescription,
            commands: table.command.map((command) => ({
                commandNumber: command.commandNumber.toString(),
                clientName: command.client?.name
            }))
    })))

    await syncDBs()
    
    return res.status(200).send({tables})
}