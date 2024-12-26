import { FastifyRequest, FastifyReply } from 'fastify';
import { mobileClient } from '../../../prisma/prisma';

export async function getCommands(req: FastifyRequest, res: FastifyReply) {    
    const commands = await mobileClient.$queryRawUnsafe(`
        SELECT
            command."commandNumber",
            CASE
                WHEN table_command."commandNumber" IS NOT NULL
                    THEN true
                ELSE false
            END AS has_table
        FROM mobile_db.command as command
        LEFT JOIN mobile_db."activeTableCommand" table_command
            ON command."commandNumber" = table_command."commandNumber"
    `)
    
    return res.send({commands})
}