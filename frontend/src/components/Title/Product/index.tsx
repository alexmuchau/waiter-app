'use client'

import { SelectItem } from "@/components/SelectItem"
import { Input } from "@heroui/input"
import { Check, Plus } from "phosphor-react"
import { Key, useEffect, useState } from "react"
import { ProductListProps } from "../../../../../utils/types"
import { useDisclosure } from "@heroui/react"
import { ModalProductList } from "./ModalProductList"
import { ProductItemProps } from "@/components/ProductList/ProductItem"

interface TitleProductProps {
    category: string,
    products: ProductListProps[],
    chosenProducts: ProductItemProps[],
    disabled: boolean,
    addProduct: (id: string, name:string, price: number, category: string, quantity: number) => void
}

export function TitleProduct({ category, products, chosenProducts, addProduct, disabled } : TitleProductProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className={`flex w-full items-center gap-3 ${!disabled ? "" : "opacity-20"} justify-between`}>
            <h2 className="flex min-w-max max-w-[50vw] font-bold text-[2rem] capitalize">{category}</h2>
            <div className="w-full bg-slate-900 h-[0.125rem]"/>
            {
                !disabled
                && <>
                    <Plus
                        onClick={onOpen}
                        size={40}
                        weight="bold"
                        className="cursor-pointer"
                    />
                    <ModalProductList
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        products={products}
                        chosenProducts={chosenProducts}
                        addProduct={addProduct}
                        category={category}
                    />
                </> 
            }
        </div>  
    )
}