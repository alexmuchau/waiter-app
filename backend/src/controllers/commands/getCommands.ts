import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';
import { IdentifyItemProps } from '../../../../utils/types';

export async function getCommands(req: FastifyRequest, res: FastifyReply) {    
    const commands: IdentifyItemProps[] = await mobileClient.$queryRawUnsafe(`
        SELECT
            command."commandNumber" AS value,
            CASE
                WHEN table_command."commandNumber" IS NOT NULL
                    THEN true
                ELSE false
            END AS isActive
        FROM mobile_db.command as command
        LEFT JOIN mobile_db."activeTableCommand" table_command
            ON command."commandNumber" = table_command."commandNumber"
        ORDER BY command."commandNumber" ASC
    `)

    return res.send({commands})
}