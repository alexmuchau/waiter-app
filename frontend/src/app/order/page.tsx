"use client";

import { useEffect, useState } from "react";
import {
    ClientProps,
    TableItemProps,
    CommandItemProps,
    ProductListProps,
} from "../../../../utils/types";
import api from "@/api/api";
import { useCookies } from "react-cookie";
import { OrderScreen } from "@/components/Screens/Order";
import { ProductItemProps } from "@/components/ProductList/ProductItem";

export default function OrderBuild() {
    const [clients, setClients] = useState<ClientProps[]>([]);
    const [tables, setTables] = useState<TableItemProps[]>([]);
    const [commands, setCommands] = useState<CommandItemProps[]>([]);
    const [listCommands, setListCommands] = useState<Array<CommandItemProps & { disabled: boolean }>>([])
    const [chopps, setChopps] = useState<ProductListProps[]>([]);
    const [foods, setFoods] = useState<ProductListProps[]>([]);

    const [client, setClient] = useState<ClientProps | undefined>(undefined);
    const [table, setTable] = useState<TableItemProps | undefined>(undefined);
    const [command, setCommand] = useState<CommandItemProps | undefined>(
        undefined
    );
    const [chosenChopps, setChosenChopps] = useState<ProductItemProps[]>([]);
    const [chosenFoods, setChosenFoods] = useState<ProductItemProps[]>([]);

    const [orderCookies, setOrderCookies, removeOrderCookies] = useCookies([
        "orderCookies",
    ]);

    const [isListingDB, setIsListingDB] = useState<boolean>(true);

    function removeCookies() {
        removeOrderCookies("orderCookies")
    }

    function updateCookiesToResume() {
        setOrderCookies(
            "orderCookies",
            {
                client: client?.id,
                table: table?.tableNumber,
                command: command?.commandNumber,
                chosenChopps: chosenChopps,
                chosenFoods: chosenFoods,
            },
            {
                maxAge: 60 * 60 * 24 * 7,
            }
        );
    }

    function createListCommands(commands: CommandItemProps[], clients: ClientProps[], tableNumber?: string) {
        return setListCommands(commands
            .filter((c) =>
                c.commandNumber == command?.commandNumber
                || !clients.find((client) => client.id === c.commandNumber))
            .map((command) => ({
                ...command,
                disabled: !!tableNumber && !!command.tableNumber && command.tableNumber != tableNumber
            }))
        )
    }

    useEffect(() => {
        console.log("Listing DB");

        function checkCookies(clients: ClientProps[], commands: CommandItemProps[], tables: TableItemProps[]) {
            if (orderCookies.orderCookies) {
                const cookies = orderCookies.orderCookies;

                const client = clients.find(
                    (client) => client.id == cookies.client
                );
                const table = tables.find(
                    (table) => table.tableNumber == cookies.table
                );
                const command = commands.find(
                    (command) => command.commandNumber == cookies.command
                );
                const chopps = cookies.chosenChopps;
                const foods = cookies.chosenFoods;

                setClient(client);
                setTable(table);
                setCommand(command);
                createListCommands(commands, clients, table?.tableNumber)
                setChosenChopps(!chopps ? [] : chopps);
                setChosenFoods(!foods ? [] : foods);
            }
        }

        async function fetchData() {
            const { clients } = (await api.get("/clients")).data as {
                clients: ClientProps[];
            };
            let { commands } = (await api.get("/commands")).data as {
                commands: CommandItemProps[];
            };
            const { tables } = (await api.get("/tables")).data as {
                tables: TableItemProps[];
            };

            const chopps = (await api.get("/products?category=CHOPP")).data as {
                products: ProductListProps[];
            };

            const foods = (await api.get("/products?category=FOOD")).data as {
                products: ProductListProps[];
            };

            setClients(clients);
            setCommands(commands);
            createListCommands(commands, clients)
            setTables(tables);
            setChopps(chopps.products);
            setFoods(foods.products);

            checkCookies(clients, commands, tables);

            setIsListingDB(!isListingDB);
        }

        fetchData();
    }, []);

    return (
        <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
            <OrderScreen
                removeOrderCookies={removeCookies}
                client={client}
                table={table}
                command={command}
                tables={tables}
                commands={commands}
                clients={clients}
                chopps={chopps}
                foods={foods}
                chosenChopps={chosenChopps}
                chosenFoods={chosenFoods}
                setClient={setClient}
                setTable={setTable}
                setCommand={setCommand}
                listCommands={listCommands}
                setListCommands={(tableNumber?: string) => createListCommands(commands, clients, tableNumber)}
                setChosenChopps={setChosenChopps}
                setChosenFoods={setChosenFoods}
                updateCookiesToResume={updateCookiesToResume}
            />
        </main>
    );
}
