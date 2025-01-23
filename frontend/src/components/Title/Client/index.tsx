'use client'

import { SelectItem } from "@/components/SelectItem"
import { Check, Plus } from "phosphor-react"
import { Key, useState } from "react"
import { ClientProps } from "../../../../../utils/types"
import { ModalClientList } from "./ModalClientList"
import { useDisclosure } from "@heroui/react"

interface TitleProductProps {
    text: string,
    selectedClient: ClientProps | undefined,
    clients: ClientProps[],
    disabled: boolean,
    selectClient: (id: string) => void,
}

export function TitleClient({ text, selectedClient, clients, disabled, selectClient } : TitleProductProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div className={`flex w-full items-center gap-3`}>
                <h2 className="font-bold text-[2rem]">{text}</h2>
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
                            <ModalClientList
                                isOpen={isOpen}
                                selectedClient={selectedClient}
                                onOpenChange={onOpenChange}
                                clients={clients}
                                addClient={selectClient}
                            />
                        </>
                    }
            </div>
        </>
    )
}