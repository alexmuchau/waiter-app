'use client'

import { ProductListProps } from "@/app/page"
import { SelectItem } from "@/components/SelectItem"
import { Check, Plus } from "phosphor-react"
import { Key, useState } from "react"

interface TitleProductProps {
    text: string,
    clients: ProductListProps[],
    disabled: boolean,
    selectClient: (id: string, name:string) => void,
}

export function TitleClient({ text, clients, disabled, selectClient } : TitleProductProps) {
    const [ isSelecting, setIsSelecting ] = useState<boolean>(false)
    const [ selectedClientId, setSelectedClientId ] = useState<string | undefined>(undefined)

    function handleIsSelecting() {
        setIsSelecting(!isSelecting)
    }

    function finishSelection() {
        if (selectedClientId ) {
            const clientName = clients.filter((p) => p.id == selectedClientId)[0].name
            selectClient(selectedClientId, clientName)
            handleIsSelecting()
        }
    }

    function onSelectionChange(id: Key | null) {
        if (id) setSelectedClientId(id.toString())
    }

    return (
        <>
            { isSelecting
                ? <div className="flex flex-col w-full gap-4 items-end">
                    <SelectItem
                        label={text}
                        items={clients}
                        onChange={onSelectionChange}
                    />
                    <button
                        className="flex w-full cursor-pointer bg-accent rounded-full px-4 py-4"
                        onClick={finishSelection}
                    >
                        <Check
                            size={20}
                            weight="bold"
                        />
                    </button>
                </div>

                : <div className={`flex w-full items-center gap-3`}>
                    <h2 className="font-bold text-[2rem]">{text}</h2>
                    <div className="w-full bg-slate-900 h-[0.125rem]"/>
                        {
                            !disabled
                            ? <Plus
                                onClick={handleIsSelecting}
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