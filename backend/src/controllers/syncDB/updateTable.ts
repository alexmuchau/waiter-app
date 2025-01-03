import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function updateTable(req: FastifyRequest, res: FastifyReply) {
    const { table } = req.body as { table: {
        tableNumber: number,
        tableDescription: string,
        active: '0' | '-1'
    } }

    if (table.active === '0') {
        await mobileClient.table.delete({
            where: {
                tableNumber: table.tableNumber
            }
        })
    } else {
        await mobileClient.table.update({
            data: {
                tableNumber: table.tableNumber,
                tableDescription: table.tableDescription,
            },
            where: {
                tableNumber: table.tableNumber
            }
        })
    }

    console.log('Sincronização de mesa concluída!')
}