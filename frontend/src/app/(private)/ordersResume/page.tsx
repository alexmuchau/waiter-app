'use client'

import api from "@/api/api";
import { IdentifyList } from "@/components/Identify/IdentifyList";
import { Title } from "@/components/Title/Default";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { CommandItemProps, ResumeOrderProps, TableItemProps } from "../../../../../utils/types";
import { BackHeader } from "@/components/Header/BackHeader";
import { HeaderTitle } from "@/components/Header/HeaderTitle";
import { LinkButton } from "@/components/Buttons/LinkButton";
import { ProductList } from "@/components/ProductList";

export default function OrdersResume() {
    const [command, setCommand] = useState<CommandItemProps>()
    const [commands, setCommands] = useState<CommandItemProps[]>([]);
    const [listCommands, setListCommands] = useState<
        Array<CommandItemProps & { disabled: boolean }>
    >([]);
    const [orders, setOrders] = useState<ResumeOrderProps>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function printOrder() {
        if (!command) return

        const token = getCookie('token');
        const res = await api.get(`/orders/printOrder?commandNumber=${command.commandNumber}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    useEffect(() => {
        async function fetchOrders() {
            if (!command) return

            const token = getCookie('token');
            const res = await api.get(`/orders?commandNumber=${command.commandNumber}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const { orders } = res.data as { orders: ResumeOrderProps }
            setOrders(orders)
        }

        fetchOrders()
    }, [command])

    function createListCommands(commands: CommandItemProps[]) {
        setListCommands(
            commands.map((command) => ({
                ...command,
                disabled: !command.table
            })),
        );
    }

    function selectCommand(value: CommandItemProps) {
        if (value.commandNumber === command?.commandNumber) {
            setCommand(undefined);
            createListCommands(commands)
            return
        }
        
        setCommand(value)
        createListCommands(commands)
    }

    useEffect(() => {
        async function fetchData() {
            const token = getCookie('token')

            const { commands } = (await api.get("/commands?onlyActive=true&useClientName=true", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))
                .data as {
                commands: CommandItemProps[];
            };

            setCommands(commands);
            createListCommands(commands)
        }

        fetchData();
    }, []);
    
    return (
        <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
            <BackHeader/>
            <header className="flex">
                <HeaderTitle text="revisar vendas de comanda" />
            </header>
            <div className="flex flex-col gap-4">
                <Title text="Comanda" />
                <IdentifyList
                    disabled={false}
                    setIdentify={(value: CommandItemProps | TableItemProps) => selectCommand(value as CommandItemProps)}
                    list={listCommands}
                    activeItens={!!command ? [command.id] : []}
                />
            </div>
            <div className="flex flex-col gap-6">
                {
                    Object.keys(orders).map((dt) => (
                        <div key={dt} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <strong>{ dt }</strong>
                                <div className="h-0.5 w-full bg-accent"/>
                            </div>
                            <ProductList
                                listActiveProducts={orders[dt]}
                            />
                        </div>
                    ))
                }
            </div>
            <footer>
                <LinkButton
                    href='/'
                    onClick={() => printOrder()}
                    disabled={!command}
                >
                    Imprimir vendas
                </LinkButton>
            </footer>
        </main>
    )
}