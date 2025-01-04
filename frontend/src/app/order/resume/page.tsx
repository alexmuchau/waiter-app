'use client'

import { BackHeader } from "@/components/Header/BackHeader";
import { IdentifyCard } from "@/components/Identify/IdentifyCard";
import { ProductList } from "@/components/ProductList";
import { Title } from "@/components/Title/Default";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { LinkButton } from "@/components/Buttons/LinkButton";
import { OrderProps } from "../../../../../utils/types";
import api from "@/api/api";
import { ProductItemProps } from "@/components/ProductList/ProductItem";

export default function Resume() {
    const [ client, setClient ] = useState<string | undefined>(undefined)
    const [ table, setTable ] = useState<string | undefined>(undefined)
    const [ command, setCommand ] = useState<string | undefined>(undefined)
    const [ chosenChopps, setChosenChopps ] = useState<ProductItemProps[]>([])
    const [ chosenFoods, setChosenFoods ] = useState<ProductItemProps[]>([])

    const [ orderCookies, setOrderCookies, removeOrderCookies ] = useCookies(['orderCookies']);

    useEffect(() => {
        if (orderCookies.orderCookies) {
            const { client, table, command, chosenChopps, chosenFoods } = orderCookies.orderCookies
            setClient(client)
            setTable(table)
            setCommand(command)
            setChosenChopps(chosenChopps)
            setChosenFoods(chosenFoods)
        }
    }, [])

    async function finishOrder() {
        removeOrderCookies('orderCookies')

        const order: OrderProps = {
            board: +table!,
            command: +command!,
            items: chosenChopps.concat(chosenFoods).map(item => {
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
        <main className="flex flex-col w-full justify-start py-10 px-4 gap-8">
            <BackHeader href="/order" replace={true} />
            <header className="flex">
                <h1 className="text-3xl">resumo do pedido</h1>
            </header>
            <div className="flex flex-col gap-8">
                <div className="flex gap-16">
                    <IdentifyCard title="Mesa" number={table!} />
                    <IdentifyCard title="Comanda" number={command!} />
                </div>
                <div className="flex flex-col gap-8">
                    <Title text="Chopp" />
                    <ProductList
                        key="chopp"
                        listActiveProducts={chosenChopps}
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <Title text="Porções" />
                    <ProductList
                        key="porcoes"
                        listActiveProducts={chosenFoods}
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
