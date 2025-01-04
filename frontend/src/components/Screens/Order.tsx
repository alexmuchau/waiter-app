import { useEffect, useState } from "react";
import {
    ClientProps,
    CommandItemProps,
    ProductListProps,
    TableItemProps,
} from "../../../../utils/types";
import { LinkButton } from "../Buttons/LinkButton";
import { ClientItem } from "../ClientItem";
import { BackHeader } from "../Header/BackHeader";
import { HeaderTitle } from "../Header/HeaderTitle";
import { IdentifyList } from "../Identify/IdentifyList";
import { ProductList } from "../ProductList";
import { ProductItemProps } from "../ProductList/ProductItem";
import { TitleClient } from "../Title/Client";
import { Title } from "../Title/Default";
import { TitleProduct } from "../Title/Product";
import { create } from "domain";

interface OrderScreenProps {
    removeOrderCookies: () => void;
    client: ClientProps | undefined;
    table: TableItemProps | undefined;
    command: CommandItemProps | undefined;
    tables: TableItemProps[];
    commands: CommandItemProps[];
    listCommands: Array<CommandItemProps & { disabled: boolean }>;
    clients: ClientProps[];
    chopps: ProductListProps[];
    foods: ProductListProps[];
    chosenChopps: ProductItemProps[];
    chosenFoods: ProductItemProps[];
    setClient: (client: ClientProps | undefined) => void;
    setTable: (table: TableItemProps | undefined) => void;
    setCommand: (command: CommandItemProps | undefined) => void;
    setListCommands: (tableNumber?: string) => void;
    setChosenChopps: (chopps: ProductItemProps[]) => void;
    setChosenFoods: (foods: ProductItemProps[]) => void;
    updateCookiesToResume: () => void;
}

export function OrderScreen({
    removeOrderCookies,
    client,
    table,
    command,
    tables,
    listCommands,
    commands,
    clients,
    chopps,
    foods,
    chosenChopps,
    chosenFoods,
    setClient,
    setTable,
    setCommand,
    setListCommands,
    setChosenChopps,
    setChosenFoods,
    updateCookiesToResume
}: OrderScreenProps) {
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
                
                setListCommands(value)
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
        setClient({ id: id, name: name });
        const command = commands.find((command) => command.tableNumber == id);

        if (!command) return;

        setCommand(command);
        setTable(
            command.tableNumber
                ? tables.find(
                      (table) => table.tableNumber == command.tableNumber
                  )
                : undefined
        );
    }

    function removeClient() {
        setClient(undefined);
        setCommand(undefined);
        setTable(undefined);
    }

    return (
        <>
            <BackHeader
                href="/"
                onClick={() => removeOrderCookies()}
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
                        disabled={client ? true : false}
                        selectItem={selectItem}
                        list={listCommands}
                        activeItem={command?.commandNumber}
                    />
                </div>
                <div className="flex flex-col">
                    <Title text="Mesa" />
                    <IdentifyList
                        key="table"
                        disabled={command?.tableNumber ? true : false}
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
    );
}
