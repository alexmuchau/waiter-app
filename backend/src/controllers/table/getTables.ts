import { FastifyRequest, FastifyReply } from 'fastify';
import { desktopClient, mobileClient } from '../../../prisma/prisma';
import { TableItemProps } from '../../../../utils/types';

export async function getTables(req: FastifyRequest, res: FastifyReply) {
    const tables: TableItemProps[] = await mobileClient.table.findMany({
        include: {
            activeTableCommand: true
        }
    }).then((tables) => {
        return tables.map((table) => {
            return {
                tableNumber: table.tableNumber.toString(),
                tableDescription: table.tableNumber.toString(),
                isActive: table.activeTableCommand.length > 0 ? true : false
            }
        }
    )})

    return res.send({tables})
}