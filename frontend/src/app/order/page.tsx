"use client";

import { useEffect, useState } from "react";
import api from "@/api/api";

import {
    ClientProps,
    TableItemProps,
    CommandItemProps,
    ProductListProps,
    CategoryGroupedProductProps,
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
import {
    getCookie,
    getCookies,
    setCookie,
    deleteCookie,
    hasCookie,
} from "cookies-next";

export default function Order() {
    const [clients, setClients] = useState<ClientProps[]>([]);
    const [tables, setTables] = useState<TableItemProps[]>([]);
    const [commands, setCommands] = useState<CommandItemProps[]>([]);
    const [listCommands, setListCommands] = useState<
        Array<CommandItemProps & { disabled: boolean }>
    >([]);
    const [products, setProducts] = useState<CategoryGroupedProductProps>({});

    const [client, setClient] = useState<ClientProps | undefined>(undefined);
    const [table, setTable] = useState<TableItemProps | undefined>(undefined);
    const [command, setCommand] = useState<CommandItemProps | undefined>(
        undefined,
    );
    const [chosenProducts, setChosenProducts] = useState<{
        [category: string]: ProductItemProps[];
    }>({});

    const [isListingDB, setIsListingDB] = useState<boolean>(true);
    const [isReadyToResume, setIsReadyToResume] = useState<boolean>(false);

    function updateCookiesToResume() {
        setCookie("orderCookies", {
            client: client?.id,
            table: table?.tableNumber,
            command: command?.commandNumber,
            chosenProducts: chosenProducts,
        });
    }

    function createListCommands(commands: CommandItemProps[], table?: TableItemProps, commandNumber?: string) {
        setListCommands(
            commands.map((command) => ({
                ...command,
                disabled:
                    (
                        !!commandNumber &&
                        command.commandNumber !== commandNumber
                    ) || (
                        !!table && table.isActive &&
                        command.tableNumber !== table.tableNumber
                    )
            })),
        );
    }

    useEffect(() => {
        function checkCookies(
            clients: ClientProps[],
            commands: CommandItemProps[],
            tables: TableItemProps[],
            chosenProducts: { [category: string]: ProductItemProps[] }
        ) {
            const orderCookies = getCookie("orderCookies");

            if (orderCookies) {
                const order = JSON.parse(orderCookies);

                const client = clients.find(
                    (client) => client.id == order.client,
                );

                const command = !!client
                    ? client.command
                    : commands.find(
                          (command) => command.commandNumber == order.command,
                      );

                const table = !!command?.tableNumber
                    ? tables.find(
                          (table) => table.tableNumber == command.tableNumber,
                      )
                    : tables.find((table) => table.tableNumber == order.table);
                    
                if (order.chosenProducts) {
                    let newChosenProducts = chosenProducts
                    for (const key of Object.keys(order.chosenProducts)) {
                        newChosenProducts[key] = newChosenProducts[key].concat(order.chosenProducts[key])
                    }
                    
                    setChosenProducts(newChosenProducts)
                }

                setClient(client);
                setTable(table);
                setCommand(command);
                
                createListCommands(commands, table)
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

            const { products } = (await api.get("/products")).data as {
                products: CategoryGroupedProductProps;
            };

            let chosenProducts: { [category: string]: ProductItemProps[] } = {};
            for (const key of Object.keys(products)) {
                chosenProducts[key] = [];
            }

            setClients(clients);
            setCommands(commands);
            setTables(tables);
            setProducts(products);
            setChosenProducts(chosenProducts);

            createListCommands(commands)
            checkCookies(clients, commands, tables, chosenProducts);

            setIsListingDB(false);
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (!chosenProducts) return;

        if (!client && (!table || !command)) {
            setIsReadyToResume(false);
            return;
        }

        for (const key of Object.keys(chosenProducts)) {
            if (chosenProducts[key].length > 0) {
                setIsReadyToResume(true);
                return;
            }
        }

        setIsReadyToResume(false);
    }, [client, table, command, chosenProducts]);
    
    function removeProduct(id: string, category: string) {
        const categoryChosenProducts = chosenProducts[category].filter(
            (product) => product.id != id,
        );
        setChosenProducts((prevChosenProducts) => ({
            ...prevChosenProducts,
            [category]: categoryChosenProducts,
        }));
    }

    function addProduct(
        id: string,
        name: string,
        price: number,
        category: string,
        quantity: number,
    ) {
        let exists = false;

        if (quantity == 0) return removeProduct(id, category);

        const categoryChosenProducts = chosenProducts[category].map(
            (product) => {
                if (product.id == id) {
                    exists = true;
                    return {
                        id: id,
                        name: product.name,
                        price: product.price,
                        quantity: quantity,
                    };
                }

                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                };
            },
        );

        if (!exists)
            categoryChosenProducts.push({
                id: id,
                name: name,
                price: price,
                quantity: quantity,
            });

        setChosenProducts((prevChosenProducts) => ({
            ...prevChosenProducts,
            [category]: categoryChosenProducts,
        }));
    }
    
    function selectCommand(value: CommandItemProps) {
        if (value.commandNumber === command?.commandNumber) {
            setCommand(undefined);
            
            setTable(undefined)
            createListCommands(commands, undefined, undefined)
            return
        }
        
        setCommand(value)
        
        const newTable = value.tableNumber ? tables.find((table) => table.tableNumber == value.tableNumber) : undefined
        if (!!newTable) setTable(newTable)
        createListCommands(commands, newTable, value.commandNumber)
    }
    
    function selectTable(value?: TableItemProps) {
        const newTable = value === table ? undefined : value
        
        setTable(newTable)
        if(!command) createListCommands(commands, newTable)
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

    function removeClient() {
        setClient(undefined);
        setCommand(undefined);
        setTable(undefined);
    }

    return (
        <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
            {!!isListingDB ? (
                <h1>Listing DB</h1>
            ) : (
                <>
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
                        {Object.keys(products).map((category) => (
                            <div className="flex flex-col gap-8" key={category}>
                                <TitleProduct
                                    category={category}
                                    disabled={!table || !command}
                                    products={products[category]}
                                    chosenProducts={chosenProducts[category]}
                                    addProduct={addProduct}
                                />
                                <ProductList
                                    key={category}
                                    listActiveProducts={
                                        chosenProducts[category]
                                    }
                                    removeItem={(id: string) =>
                                        removeProduct(id, category)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                    <footer>
                        <LinkButton
                            href="/order/resume"
                            onClick={updateCookiesToResume}
                            disabled={!isReadyToResume}
                        >
                            Resumo do Pedido
                        </LinkButton>
                    </footer>
                </>
            )}
        </main>
    );
}
