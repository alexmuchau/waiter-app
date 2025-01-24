"use client";

import { FormEvent, useEffect, useState } from "react";
import {
    ClientProps,
    CommandItemProps,
    TableItemProps,
    User,
} from "../../../../utils/types";
import api from "@/api/api";

import { HeaderTitle } from "@/components/Header/HeaderTitle";
import { Button } from "@/components/Buttons/Button";
import { useCookies } from "react-cookie";
import { Form } from "@heroui/form";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { TitleClient } from "@/components/Title/Client";
import { ClientItem } from "@/components/ClientItem";
import { Title } from "@/components/Title/Default";
import { IdentifyList } from "@/components/Identify/IdentifyList";
import { BackHeader } from "@/components/Header/BackHeader";
import { LinkButton } from "@/components/Buttons/LinkButton";

export default function TableUpdate() {
    const [tables, setTables] = useState<TableItemProps[]>([]);
    const [commands, setCommands] = useState<CommandItemProps[]>([]);
    const [clients, setClients] = useState<ClientProps[]>([]);
    const [listCommands, setListCommands] = useState<
        Array<CommandItemProps & { disabled: boolean }>
    >([]);
    const [listNewTables, setListNewTables] = useState<
        Array<TableItemProps & { disabled: boolean }>    
    >([])

    const [table, setTable] = useState<TableItemProps | undefined>(undefined);
    const [newTable, setNewTable] = useState<TableItemProps | undefined>(
        undefined,
    );
    const [command, setCommand] = useState<CommandItemProps | undefined>(
        undefined,
    );
    const [client, setClient] = useState<ClientProps | undefined>(undefined);

    const [isListingDB, setIsListingDB] = useState<boolean>(true);

    const router = useRouter();
    
    async function submitUpdate() {
        try {
            await api.put('/commands', {
                commandNumber: command?.commandNumber,
                tableNumber: newTable?.tableNumber
            })
        } catch (error) {
            
        }
    }

    function selectClient(id: string) {
        const client = clients.find((client) => client.id == id);

        setClient(client);
        setCommand(client?.command);

        if (!client?.command.tableNumber) return;

        setTable(
            tables.find(
                (table) => table.tableNumber == client?.command.tableNumber,
            ),
        );
    }
    
    function selectCommand(value: CommandItemProps) {
        if (value.commandNumber === command?.commandNumber) {
            setCommand(undefined);
            selectTable(undefined);
            return
        }
        
        setCommand(value)
        selectTable(tables.find((table) => table.tableNumber == value.tableNumber))
    }
    
    function selectTable(value?: TableItemProps) {
        setTable((prevTable) => value === prevTable ? undefined : value)
        createListCommands(commands, value === table ? undefined : value?.tableNumber)
        createListNewTables(tables, value === table ? undefined : value?.tableNumber)
    }
    
    function selectNewTable(value: TableItemProps) {
        setNewTable((prevTable) => value === prevTable ? undefined : value)
    }

    function removeClient() {
        setClient(undefined);
        setCommand(undefined);
        setTable(undefined);
    }
    
    function createListCommands(commands: CommandItemProps[], tableNumber?: string) {
        setListCommands(
            commands.map((command) => ({
                ...command,
                disabled:
                    !!tableNumber &&
                    !!command.tableNumber &&
                    command.tableNumber != tableNumber,
            })),
        );
    }
    
    function createListNewTables(tables: TableItemProps[], tableNumber?: string) {
        setListNewTables(
            tables.map((table) => ({
                ...table,
                disabled:
                    !!tableNumber &&
                    table.tableNumber == tableNumber,
            })),
        );
    }

    useEffect(() => {
        async function fetchData() {
            const { clients } = (await api.get("/clients")).data as {
                clients: ClientProps[];
            };
            const { commands } = (await api.get("/commands?onlyActive=true"))
                .data as {
                commands: CommandItemProps[];
            };
            const { tables } = (await api.get("/tables")).data as {
                tables: TableItemProps[];
            };

            setClients(clients);
            setCommands(commands);
            setTables(tables);
            
            createListCommands(commands)
            createListNewTables(tables)
            setIsListingDB(false);
        }

        fetchData();
    }, []);

    return (
        <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
            <BackHeader/>
            <header className="flex">
                <HeaderTitle text="atualizar mesa" />
            </header>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                    <TitleClient
                        text="Cliente"
                        selectClient={selectClient}
                        disabled={!!client}
                        clients={clients}
                        selectedClient={client}
                    />
                    {client ? (
                        <ClientItem
                            client={client}
                            removeClient={removeClient}
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <div className="flex flex-col">
                    <Title text="Comanda" />
                    <IdentifyList
                        disabled={!!client}
                        setIdentify={(value: CommandItemProps | TableItemProps) => selectCommand(value as CommandItemProps)}
                        list={listCommands}
                        activeItem={command?.commandNumber}
                    />
                </div>
                <div className="flex flex-col">
                    <Title text="Mesa" />
                    <IdentifyList
                        disabled={!!command?.tableNumber}
                        setIdentify={(value: CommandItemProps | TableItemProps) => selectTable(value as TableItemProps)}
                        list={tables}
                        activeItem={table?.tableNumber}
                    />
                </div>
                <div className="flex flex-col">
                    <Title text="Nova Mesa" />
                    <IdentifyList
                        disabled={!command || !table}
                        setIdentify={(value: CommandItemProps | TableItemProps) => selectNewTable(value as TableItemProps)}
                        list={listNewTables}
                        activeItem={newTable?.tableNumber}
                    />
                </div>
            </div>
            <footer>
                <LinkButton
                    href="/"
                    replace={true}
                    disabled={!command || !table || !newTable}
                    onClick={submitUpdate}
                >
                    Alterar comanda mesa
                </LinkButton>
            </footer>
        </main>
    );
}
