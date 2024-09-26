'use client'

import { ProductListProps } from "@/app/page"
import { SelectItem } from "@/components/SelectItem"
import { Input } from "@nextui-org/input"
import { Check, Plus } from "phosphor-react"
import { Key, useState } from "react"

interface TitleProductProps {
    text: string,
    products: ProductListProps[],
    disabled: boolean,
    addProduct: (id: string, name:string, qtd: number) => void
}

export function TitleProduct({ text, products, addProduct, disabled } : TitleProductProps) {
    const [ isAdding, setIsAdding ] = useState<boolean>(false)
    const [ productIdToAdd, setProductIdToAdd ] = useState<string | undefined>(undefined)
    const [ quantityToAdd, setQuantityToAdd ] = useState<string | undefined>(undefined)
    
    function handleIsAdding() {
        setIsAdding(!isAdding)
    }

    function finishAdd() {
        if (productIdToAdd && quantityToAdd ) {
            const productName = products.filter((p) => p.id == productIdToAdd)[0].name
            addProduct(productIdToAdd, productName, +quantityToAdd)
            handleIsAdding()
        }
    }

    function onSelectionChange(id: Key | null) {
        if (id) setProductIdToAdd(id.toString())
    }

    return (
        <>
            { isAdding
                ? <div className="flex w-full gap-4 items-end">
                    <SelectItem
                        label={text}
                        items={products}
                        onChange={onSelectionChange}
                    />
                    <Input
                        label="Qtd"
                        type="number"
                        variant="bordered"
                        className="w-1/4"
                        onValueChange={setQuantityToAdd}
                        defaultValue="1"
                    />
                    <button
                        className="flex cursor-pointer bg-accent rounded-full px-4 py-4"
                        onClick={finishAdd}
                    >
                        <Check
                            size={20}
                            weight="bold"
                        />
                    </button>
                </div>

                : <div className={`flex w-full items-center gap-3 ${!disabled ? "" : "opacity-20"}`}>
                    <h2 className="font-bold text-[2rem]">{text}</h2>
                    <div className="w-full bg-slate-900 h-[0.125rem]"/>
                    {
                        !disabled
                        ? <Plus
                            onClick={handleIsAdding}
                            size={40}
                            weight="bold"
                            className="cursor-pointer"
                        />
                        : <></>
                    }
                </div>  
            }
        </>
    )
}