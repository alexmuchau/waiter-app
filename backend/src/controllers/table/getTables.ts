import { FastifyRequest, FastifyReply } from 'fastify';
import { desktopClient, mobileClient } from '../../../prisma/prisma';
import { IdentifyItemProps } from '../../../../utils/types';

export async function getTables(req: FastifyRequest, res: FastifyReply) {
    const tables: IdentifyItemProps[] = await mobileClient.$queryRawUnsafe(`
    SELECT DISTINCT
        tb."tableNumber" as value,
        CASE
            WHEN table_command."tableNumber" IS NOT NULL
                THEN true
            ELSE false
        END AS isActive
    FROM mobile_db.table as tb
    LEFT JOIN mobile_db."activeTableCommand" table_command
        ON tb."tableNumber" = table_command."tableNumber"
    ORDER BY tb."tableNumber" ASC
    `)

    return res.send({tables})
}