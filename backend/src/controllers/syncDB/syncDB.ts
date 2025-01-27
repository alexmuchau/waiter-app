import { FastifyRequest, FastifyReply } from "fastify";
import {
    syncClients,
    syncCommands,
    syncDBs,
    syncProducts,
    syncTables,
} from "../../tools/syncDBs";

export async function syncDB(req: FastifyRequest, res: FastifyReply) {
    const { table } = req.query as { table: "produto" | "cliente" | "comanda" };

    const syncs = {
        produto: syncProducts,
        cliente: syncClients,
        comanda: syncCommands,
        mesa: syncTables,
        syncAll: syncDBs,
    };

    if (!table || !(table in syncs)) syncs["syncAll"]();
    else syncs[table]();

    return res.send("Sincronização concluída");
}
