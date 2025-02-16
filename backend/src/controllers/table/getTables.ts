import { FastifyRequest, FastifyReply } from 'fastify';
import { desktopClient, mobileClient } from '../../../prisma/prisma';
import { TableItemProps } from '../../../../utils/types';

export async function getTables(req: FastifyRequest, res: FastifyReply) {
    const tables: TableItemProps[] = await mobileClient.table.findMany({
        include: {
            command: true
        }
    }).then((tables) => {
        return tables.map((table) => ({
            id: 'T' + table.tableNumber.toString(),
            description: table.tableDescription,
            tableNumber: table.tableNumber.toString(),
            isActive: table.command.length > 0 ? true : false
        })
    )})

    return res.send({tables})
}