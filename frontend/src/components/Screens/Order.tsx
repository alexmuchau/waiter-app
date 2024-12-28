import { ProductListProps } from "@/app/page";
import {
    ClientProps,
    CommandItemProps,
    TableItemProps,
} from "../../../../utils/types";
import { LinkButton } from "../Buttons/LinkButton";
import { ClientItem } from "../ClientItem";
import { BackHeader } from "../Header/BackHeader";
import { HeaderTitle } from "../Header/HeaderTitle";
import { IdentifyList } from "../Identify/IdentifyList";
import { ProductItemProps, ProductList } from "../ProductList";
import { TitleClient } from "../Title/Client";
import { Title } from "../Title/Default";
import { TitleProduct } from "../Title/Product";

interface OrderScreenProps {
    removeOrderCookies: () => void;
    client: ClientProps | undefined;
    table: TableItemProps | undefined;
    command: CommandItemProps | undefined;
    tables: TableItemProps[];
    commands: CommandItemProps[];
    clients: ClientProps[];
    products: ProductListProps[];
    productsPorcoes: ProductListProps[];
    chopps: ProductItemProps[];
    foods: ProductItemProps[];
    setClient: (client: ClientProps | undefined) => void;
    setTable: (table: TableItemProps | undefined) => void;
    setCommand: (command: CommandItemProps | undefined) => void;
    setChopps: (chopps: ProductItemProps[]) => void;
    setFoods: (foods: ProductItemProps[]) => void;
    updateCookiesToResume: () => void;
}

export function OrderScreen({
    removeOrderCookies,
    client,
    table,
    command,
    tables,
    commands,
    clients,
    products,
    productsPorcoes,
    chopps,
    foods,
    setClient,
    setTable,
    setCommand,
    setChopps,
    setFoods,
    updateCookiesToResume
}: OrderScreenProps) {
    function selectItem(key: "table" | "command", value: string | undefined) {
        switch (key) {
            case "table": {
                setTable(
                    value
                        ? tables.find((table) => table.tableNumber == value)
                        : undefined
                );
                break;
            }
            case "command": {
                setCommand(
                    value
                        ? commands.find(
                              (command) => command.commandNumber == value
                          )
                        : undefined
                );
                break;
            }
            default:
                break;
        }
    }

    function removeChoppItem(id: string) {
        setChopps(chopps!.filter((chopp) => chopp.id != id));
    }

    function removeFoodItem(id: string) {
        setFoods(foods!.filter((food) => food.id != id));
    }

    function addChoppItem(id: string, name: string, quantity: number) {
        let exists = false;

        const newChopps = chopps.map((chopp) => {
            if (chopp.id == id) {
                exists = true;
                return {
                    id: id,
                    name: name,
                    quantity: chopp.quantity + quantity,
                };
            }

            return {
                id: chopp.id,
                name: chopp.name,
                quantity: chopp.quantity,
            };
        });

        if (!exists) newChopps.push({ id: id, name: name, quantity: quantity });

        setChopps(newChopps);
    }

    function addFoodItem(id: string, name: string, quantity: number) {
        let exists = false;

        const newFoods = foods.map((food) => {
            if (food.id == id) {
                exists = true;
                return {
                    id: id,
                    name: name,
                    quantity: food.quantity + quantity,
                };
            }

            return {
                id: food.id,
                name: food.name,
                quantity: food.quantity,
            };
        });

        if (!exists) newFoods.push({ id: id, name: name, quantity: quantity });

        setFoods(newFoods);
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
            <div className="flex flex-col gap-8 h-screen">
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
                    <Title text="Mesas" />
                    <IdentifyList
                        key="table"
                        disabled={false}
                        listKey="table"
                        selectItem={selectItem}
                        list={tables}
                        activeItem={table?.tableNumber}
                    />
                </div>
                <div className="flex flex-col">
                    <Title text="Comandas" />
                    <IdentifyList
                        key="command"
                        listKey="command"
                        disabled={client ? true : false}
                        selectItem={selectItem}
                        list={commands}
                        activeItem={command?.commandNumber}
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <TitleProduct
                        text="Chopp"
                        disabled={!table || !command}
                        products={products}
                        addProduct={addChoppItem}
                    />
                    <ProductList
                        key="chopp"
                        listActiveProducts={chopps}
                        removeItem={removeChoppItem}
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <TitleProduct
                        text="Porções"
                        disabled={!table || !command}
                        products={productsPorcoes}
                        addProduct={addFoodItem}
                    />
                    <ProductList
                        key="porcoes"
                        listActiveProducts={foods}
                        removeItem={removeFoodItem}
                    />
                </div>
            </div>
            <footer>
                <LinkButton
                    href="/order/resume"
                    onClick={updateCookiesToResume}
                >
                    Resumo do Pedido
                </LinkButton>
            </footer>
        </>
    );
}
