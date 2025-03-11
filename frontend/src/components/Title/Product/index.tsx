'use client'

import { SelectItem } from "@/components/SelectItem"
import { Input } from "@heroui/input"
import { CaretDown, Check, Plus } from "phosphor-react"
import { Key, useEffect, useState } from "react"
import { ProductListProps } from "../../../../../utils/types"
import { Button, useDisclosure } from "@heroui/react"
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
        <>
            <ModalProductList
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                products={products}
                chosenProducts={chosenProducts}
                addProduct={addProduct}
                category={category}
            />
            <Button
                className="flex h-full py-5"
                fullWidth={true}
                radius="md"
                isDisabled={disabled}
                onPress={onOpen}
                color="primary"
                startContent={<h2 className="flex w-full items-start font-bold text-[2rem] capitalize text-white">{category}</h2>}
                endContent={<CaretDown width={24} height={24} color="#ffff" />}
                variant="shadow"
            >
            </Button>
        </> 
    )
}