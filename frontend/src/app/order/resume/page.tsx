'use client'

import { BackHeader } from "@/components/Header/BackHeader";
import { IdentifyCard } from "@/components/Identify/IdentifyCard";
import { ProductItemProps, ProductList } from "@/components/ProductList";
import { Title } from "@/components/Title/Default";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { LinkButton } from "@/components/Buttons/LinkButton";
import { OrderProps } from "../../../../../utils/types";
import api from "@/api/api";

export default function Resume() {
    const [ client, setClient ] = useState<string | undefined>(undefined)
    const [ table, setTable ] = useState<string | undefined>(undefined)
    const [ command, setCommand ] = useState<string | undefined>(undefined)
    const [ chopps, setChopps ] = useState<ProductItemProps[]>([])
    const [ foods, setFoods ] = useState<ProductItemProps[]>([])

    const [ orderCookies, setOrderCookies, removeOrderCookies ] = useCookies(['orderCookies']);

    useEffect(() => {
        if (orderCookies.orderCookies) {
            const { client, table, command, chopps, foods } = orderCookies.orderCookies
            setClient(client)
            setTable(table)
            setCommand(command)
            setChopps(chopps)
            setFoods(foods)
        }
    }, [])

    async function finishOrder() {
        removeOrderCookies('orderCookies')

        const order: OrderProps = {
            board: +table!,
            command: +command!,
            items: chopps.concat(foods).map(item => {
                return {
                    id_product: +item.id,
                    quantity: item.quantity
                }
            })
        }

        console.log({bodyOrder: order})

        await api.post('/order', {bodyOrder: order})
    }

    return (
        <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
            <BackHeader href="/order" replace={true} />
            <header className="flex">
                <h1 className="text-3xl">resumo do pedido</h1>
            </header>
            <div className="flex flex-col gap-8 h-screen">
                <div className="flex gap-16">
                    <IdentifyCard title="Mesa" number={table!} />
                    <IdentifyCard title="Comanda" number={command!} />
                </div>
                <div className="flex flex-col gap-8">
                    <Title text="Chopp" />
                    <ProductList
                        key="chopp"
                        listActiveProducts={chopps}
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <Title text="Porções" />
                    <ProductList
                        key="porcoes"
                        listActiveProducts={foods}
                    />
                </div>
            </div>
            <footer>
                <LinkButton href='/' onClick={finishOrder}>
                    Finalizar Pedido
                </LinkButton>
            </footer>
        </main>
    );
}
