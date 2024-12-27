"use client";

import { ProductListProps } from "../page";
import { useEffect, useState } from "react";
import { ProductItemProps } from "@/components/ProductList";
import {
    ClientProps,
    TableItemProps,
    CommandItemProps,
} from "../../../../utils/types";
import api from "@/api/api";
import { useCookies } from "react-cookie";
import { OrderScreen } from "@/components/Screens/Order";

export default function OrderBuild() {
    const products: ProductListProps[] = [
        {
            id: "1",
            name: "Pilsen 300ml",
        },
        {
            id: "2",
            name: "Pilsen 500ml",
        },
        {
            id: "3",
            name: "Pilsen 1000ml",
        },
        {
            id: "4",
            name: "Vinhedo 473ml",
        },
        {
            id: "5",
            name: "Ipa 1000ml",
        },
    ];

    const productsPorcoes: ProductListProps[] = [
        {
            id: "6",
            name: "Frango á Passarinho",
        },
        {
            id: "7",
            name: "Frango Sassami",
        },
        {
            id: "8",
            name: "Bolinho de Bacalhau",
        },
        {
            id: "9",
            name: "Bolinho 2",
        },
        {
            id: "10",
            name: "Bolinho 3",
        },
    ];

    const [clients, setClients] = useState<ClientProps[]>([]);
    const [tables, setTables] = useState<TableItemProps[]>([]);
    const [commands, setCommands] = useState<CommandItemProps[]>([]);

    const [client, setClient] = useState<ClientProps | undefined>(undefined);
    const [table, setTable] = useState<TableItemProps | undefined>(undefined);
    const [command, setCommand] = useState<CommandItemProps | undefined>(
        undefined
    );
    const [chopps, setChopps] = useState<ProductItemProps[]>([]);
    const [foods, setFoods] = useState<ProductItemProps[]>([]);

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
                chopps: chopps,
                foods: foods,
            },
            {
                maxAge: 60 * 60 * 24 * 7,
            }
        );
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
                const chopps = cookies.chopps;
                const foods = cookies.foods;

                setClient(client);
                setTable(table);
                setCommand(command);
                setChopps(chopps);
                setFoods(foods);
            }
        }

        async function fetchData() {
            const { clients } = (await api.get("/clients")).data as {
                clients: ClientProps[];
            };
            const { commands } = (await api.get("/commands")).data as {
                commands: CommandItemProps[];
            };
            const { tables } = (await api.get("/tables")).data as {
                tables: TableItemProps[];
            };

            setClients(clients);
            setCommands(commands);
            setTables(tables);

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
                products={products}
                productsPorcoes={productsPorcoes}
                chopps={chopps}
                foods={foods}
                setClient={setClient}
                setTable={setTable}
                setCommand={setCommand}
                setChopps={setChopps}
                setFoods={setFoods}
                updateCookiesToResume={updateCookiesToResume}
            />
        </main>
    );
}
