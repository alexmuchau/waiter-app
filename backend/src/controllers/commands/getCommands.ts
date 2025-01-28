import { FastifyRequest, FastifyReply } from "fastify";
import { mobileClient } from "../../../prisma/prisma";
import { CommandItemProps } from "../../../../utils/types";

export async function getCommands(req: FastifyRequest, res: FastifyReply) {
    const { onlyActive, useClientName } = req.query as { onlyActive: boolean, useClientName: boolean };

    const commands: CommandItemProps[] = await mobileClient.command
        .findMany({
            include: {
                table: true,
                client: true,
            },
            where: !!onlyActive ? {
                tableNumber: {
                    not: null,
                },
            } : undefined,
        })
        .then((commands) => 
            commands.map((command) => ({
                id: 'C' + command.commandNumber.toString(),
                description: !!command.client && useClientName ? command.client.name : command.commandNumber.toString(),
                commandNumber: command.commandNumber.toString(),
                table: !!command.table ? {
                    id: command.table.tableNumber.toString(),
                    description: command.table.tableDescription.toString(),
                    tableNumber: command.table.tableNumber.toString(),
                    isActive: true,
                } : undefined,
                isActive: command.tableNumber ? true : false,
            }))
        );

    return res.send({ commands });
}
