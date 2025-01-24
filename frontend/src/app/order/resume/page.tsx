'use client'

import { BackHeader } from "@/components/Header/BackHeader";
import { IdentifyCard } from "@/components/Identify/IdentifyCard";
import { ProductList } from "@/components/ProductList";
import { Title } from "@/components/Title/Default";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/Buttons/LinkButton";
import { CategoryGroupedProductProps, OrderProps } from "../../../../../utils/types";
import api from "@/api/api";
import { ProductItemProps } from "@/components/ProductList/ProductItem";
import { getCookie, getCookies, setCookie, deleteCookie, hasCookie } from 'cookies-next';
import { useRouter } from "next/navigation";

export default function Resume() {
    const [ client, setClient ] = useState<string | undefined>(undefined)
    const [ table, setTable ] = useState<string | undefined>(undefined)
    const [ command, setCommand ] = useState<string | undefined>(undefined)
    const [ chosenProducts, setChosenProducts ] = useState<{[category: string]: ProductItemProps[]}>({})
    const router = useRouter()

    useEffect(() => {
        const orderCookies = getCookie("orderCookies")

        if (orderCookies) {
            const { client, table, command, chosenProducts } = JSON.parse(orderCookies)
            setClient(client)
            setTable(table)
            setCommand(command)
            setChosenProducts(chosenProducts)
        } else {
            router.push('/order')
        }
    }, [])

    async function finishOrder() {
        deleteCookie('orderCookies')
        const items = Object.keys(chosenProducts).flatMap((category) => chosenProducts[category].map((item) => ({
            id_product: +item.id,
            quantity: item.quantity
        })))

        const order: OrderProps = {
            board: +table!,
            command: +command!,
            items: items
        }

        await api.post('/order', {bodyOrder: order})
    }

    return (
        <main className="flex flex-col w-full justify-start py-10 px-4 gap-8">
            <BackHeader/>
            <header className="flex">
                <h1 className="text-3xl">resumo do pedido</h1>
            </header>
            <div className="flex flex-col gap-8">
                <div className="flex gap-16">
                    <IdentifyCard title="Mesa" number={table!} />
                    <IdentifyCard title="Comanda" number={command!} />
                </div>
                {
                    Object.keys(chosenProducts).map((category) =>
                        chosenProducts[category].length > 0 &&
                        <div className="flex flex-col gap-8" key={category}>
                            <Title text={category} />
                            <ProductList
                                key={category}
                                listActiveProducts={chosenProducts[category]}
                            />
                        </div>
                    )
                }
            </div>
            <footer>
                <LinkButton href='/' onClick={finishOrder} replace={true}>
                    Finalizar Pedido
                </LinkButton>
            </footer>
        </main>
    );
}
