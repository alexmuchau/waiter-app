import { FastifyRequest, FastifyReply } from "fastify";
import { mobileClient } from "../../../prisma/prisma";
import { CommandItemProps } from "../../../../utils/types";

export async function getCommands(req: FastifyRequest, res: FastifyReply) {
    const { onlyActive } = req.query as { onlyActive: boolean };

    if (!onlyActive) {
        var commands: CommandItemProps[] = await mobileClient.command
            .findMany({
                include: {
                    table: true,
                },
                where: {
                    client: {
                        is: null,
                    },
                },
            })
            .then((commands) => {
                return commands.map((command) => ({
                    commandNumber: command.commandNumber.toString(),
                    tableNumber: command.tableNumber?.toString(),
                    isActive: command.tableNumber ? true : false,
                }));
            });
    } else {
        var commands: CommandItemProps[] = await mobileClient.command
            .findMany({
                include: {
                    table: true,
                },
                where: {
                    tableNumber: {
                        not: null,
                    },
                },
            })
            .then((commands) => {
                return commands.map((command) => ({
                    commandNumber: command.commandNumber.toString(),
                    tableNumber: command.tableNumber?.toString(),
                    isActive: command.tableNumber ? true : false,
                }));
            });
    }

    return res.send({ commands });
}
