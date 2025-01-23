"use client";

import { useEffect, useState } from "react";
import api from "@/api/api";

import {
    ClientProps,
    TableItemProps,
    CommandItemProps,
    ProductListProps,
} from "../../../../utils/types";

import { ProductItemProps } from "@/components/ProductList/ProductItem";
import { BackHeader } from "@/components/Header/BackHeader";
import { HeaderTitle } from "@/components/Header/HeaderTitle";
import { TitleClient } from "@/components/Title/Client";
import { ClientItem } from "@/components/ClientItem";
import { IdentifyList } from "@/components/Identify/IdentifyList";
import { Title } from "@/components/Title/Default";
import { TitleProduct } from "@/components/Title/Product";
import { ProductList } from "@/components/ProductList";
import { LinkButton } from "@/components/Buttons/LinkButton";
import { getCookie, getCookies, setCookie, deleteCookie, hasCookie } from 'cookies-next';

export default function Order() {
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

    const [isListingDB, setIsListingDB] = useState<boolean>(true);

    function updateCookiesToResume() {
        setCookie("orderCookies", {
            client: client?.id,
            table: table?.tableNumber,
            command: command?.commandNumber,
            chosenChopps: chosenChopps,
            chosenFoods: chosenFoods,
        });
    }

    function createListCommands(commands: CommandItemProps[], clients: ClientProps[], tableNumber?: string) {
        setListCommands(commands
            .map((command) => ({
                ...command,
                disabled: !!tableNumber && !!command.tableNumber && command.tableNumber != tableNumber
            }))
        )
    }

    useEffect(() => {
        function checkCookies(clients: ClientProps[], commands: CommandItemProps[], tables: TableItemProps[]) {
            const orderCookies = getCookie('orderCookies')
            console.log(orderCookies)

            if (orderCookies) {
                const order = JSON.parse(orderCookies);

                const client = clients.find(
                    (client) => client.id == order.client
                );

                const command = !!client
                    ? client.command
                    : commands.find((command) => command.commandNumber == order.command)

                const table = !!command?.tableNumber
                    ? tables.find((table) => table.tableNumber == command.tableNumber)
                    : tables.find((table) => table.tableNumber == order.table)

                const chopps = order.chosenChopps;
                const foods = order.chosenFoods;

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

            checkCookies(clients, commands, tables);

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

            setIsListingDB(false);
        }

        fetchData();
    }, []);

    function selectItem(key: "table" | "command", value: string | undefined) {
        switch (key) {
            case "command": {
                const newCommand = value ? commands.find( (command) => command.commandNumber == value) : undefined
                setCommand(newCommand);

                const table = tables.find((table) => table.tableNumber == newCommand?.tableNumber)
                setTable(table)
                break;
            }
            case "table": {
                const newTable = tables.find((table) => table.tableNumber == value)
                setTable(newTable);
                
                createListCommands(commands, clients, value)
                break;
            }
            default:
                break;
        }
    }

    function removeChoppItem(id: string) {
        setChosenChopps(chosenChopps!.filter((chopp) => chopp.id != id));
    }

    function removeFoodItem(id: string) {
        setChosenFoods(chosenFoods!.filter((food) => food.id != id));
    }

    function addChoppItem(id: string, name: string, price: number, quantity: number) {
        let exists = false;

        const newChopps = chosenChopps.map((chopp) => {
            if (chopp.id == id) {
                exists = true;
                return {
                    id: id,
                    name: name,
                    price: price,
                    quantity: chopp.quantity + quantity,
                };
            }

            return {
                id: chopp.id,
                name: chopp.name,
                price: chopp.price,
                quantity: chopp.quantity,
            };
        });

        if (!exists) newChopps.push({ id: id, name: name, price: price, quantity: quantity });

        setChosenChopps(newChopps);
    }

    function addFoodItem(id: string, name: string, price: number, quantity: number) {
        let exists = false;

        const newFoods = chosenFoods.map((food) => {
            if (food.id == id) {
                exists = true;
                return {
                    id: id,
                    name: name,
                    price: price,
                    quantity: food.quantity + quantity,
                };
            }

            return {
                id: food.id,
                name: food.name,
                price: food.price,
                quantity: food.quantity,
            };
        });

        if (!exists) newFoods.push({ id: id, name: name, price: price, quantity: quantity });

        setChosenFoods(newFoods);
    }

    function selectClient(id: string, name: string) {
        const client = clients.find((client) => client.id == id);
        setClient(client);
        setCommand(client?.command);

        console.log(client)

        if (!client?.command.tableNumber) return
        
        setTable(tables.find((table) => table.tableNumber == client?.command.tableNumber));
    }

    function removeClient() {
        setClient(undefined);
        setCommand(undefined);
        setTable(undefined);
    }

    return (
        <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
            {
                !!isListingDB
                ? <h1>Listing DB</h1>
                : <>
                    <BackHeader
                        additionalOnClick={() => deleteCookie("orderCookies")}
                    />
                    <header className="flex">
                        <HeaderTitle text="pedido" />
                    </header>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col">
                            <TitleClient
                                text="Cliente"
                                selectClient={selectClient}
                                disabled={!!client}
                                clients={clients}
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
                                key="command"
                                listKey="command"
                                disabled={!!client}
                                selectItem={selectItem}
                                list={listCommands}
                                activeItem={command?.commandNumber}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Title text="Mesa" />
                            <IdentifyList
                                key="table"
                                disabled={!!command?.tableNumber}
                                listKey="table"
                                selectItem={selectItem}
                                list={tables}
                                activeItem={table?.tableNumber}
                            />
                        </div>
                        <div className="flex flex-col gap-8">
                            <TitleProduct
                                text="Chopp"
                                disabled={!table || !command}
                                products={chopps}
                                addProduct={addChoppItem}
                            />
                            <ProductList
                                key="chopp"
                                listActiveProducts={chosenChopps}
                                removeItem={removeChoppItem}
                            />
                        </div>
                        <div className="flex flex-col gap-8">
                            <TitleProduct
                                text="Porções"
                                disabled={!table || !command}
                                products={foods}
                                addProduct={addFoodItem}
                            />
                            <ProductList
                                key="porcoes"
                                listActiveProducts={chosenFoods}
                                removeItem={removeFoodItem}
                            />
                        </div>
                    </div>
                    <footer>
                        <LinkButton
                            href="/order/resume"
                            onClick={updateCookiesToResume}
                            disabled={!table || !command || (!chosenChopps.length && !chosenFoods.length)}
                        >
                            Resumo do Pedido
                        </LinkButton>
                    </footer>
                </>
            }
        </main>
    );
}

{/* <OrderScreen
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
/> */}
