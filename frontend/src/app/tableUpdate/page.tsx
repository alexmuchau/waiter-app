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
    const [activeCommands, setActiveCommands] = useState<CommandItemProps[]>([]);

    const [isListingDB, setIsListingDB] = useState<boolean>(true);

    const router = useRouter();
    
    async function submitUpdate() {
        try {
            await api.put('/commands', {
                commandNumbers: activeCommands.map((command) => command.commandNumber),
                tableNumber: newTable?.tableNumber
            })
        } catch (error) {
            
        }
    }
    
    function selectCommand(value: CommandItemProps) {
        const activeCommand = activeCommands.find((command) => command.id === value.id)
        if (value.id === activeCommand?.id) {
            setActiveCommands(activeCommands.filter((command) => command.id !== value.id));
            return
        }
        
        setActiveCommands(activeCommands.concat([value]))
    }
    
    function selectTable(value?: TableItemProps) {
        setTable((prevTable) => value === prevTable ? undefined : value)
        createListCommands(commands, value === table ? undefined : value?.tableNumber)
        createListNewTables(tables, value === table ? undefined : value?.tableNumber)
    }
    
    function selectNewTable(value: TableItemProps) {
        setNewTable((prevTable) => value === prevTable ? undefined : value)
    }

    function createListCommands(commands: CommandItemProps[], tableNumber?: string) {
        setListCommands(
            commands.map((command) => ({
                ...command,
                disabled:
                    !!tableNumber && !!command.table &&
                    command.table.tableNumber != tableNumber,
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
            const { commands } = (await api.get("/commands?onlyActive=true&useClientName=true"))
                .data as {
                commands: CommandItemProps[];
            };
            const { tables } = (await api.get("/tables")).data as {
                tables: TableItemProps[];
            };

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
                    <Title text="Mesa" />
                    <IdentifyList
                        disabled={false}
                        setIdentify={(value: CommandItemProps | TableItemProps) => selectTable(value as TableItemProps)}
                        list={tables}
                        activeItens={!!table ? [table.id] : []}
                    />
                </div>
                <div className="flex flex-col">
                    <Title text="Comanda" />
                    <IdentifyList
                        disabled={!table}
                        setIdentify={(value: CommandItemProps | TableItemProps) => selectCommand(value as CommandItemProps)}
                        list={listCommands}
                        activeItens={activeCommands.map((c) => c.id)}
                    />
                </div>
                <div className="flex flex-col">
                    <Title text="Nova Mesa" />
                    <IdentifyList
                        disabled={activeCommands.length < 1 || !table}
                        setIdentify={(value: CommandItemProps | TableItemProps) => selectNewTable(value as TableItemProps)}
                        list={listNewTables}
                        activeItens={!!newTable ? [newTable.id] : []}
                    />
                </div>
            </div>
            <footer>
                <LinkButton
                    href="/"
                    replace={true}
                    disabled={!table || activeCommands.length < 1 || !newTable}
                    onClick={submitUpdate}
                >
                    Alterar comanda mesa
                </LinkButton>
            </footer>
        </main>
    );
}
