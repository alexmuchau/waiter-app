'use client'

import { CaretDown } from "phosphor-react";
import { ClientProps } from "../../../../../utils/types"
import { ModalClientList } from "./ModalClientList"
import { Button, useDisclosure } from "@heroui/react"

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
            <ModalClientList
                isOpen={isOpen}
                selectedClient={selectedClient}
                onOpenChange={onOpenChange}
                clients={clients}
                addClient={selectClient}
            />
            <Button
                className="flex h-full py-4"
                fullWidth={true}
                radius="md"
                isDisabled={disabled}
                onPress={onOpen}
                color="primary"
                startContent={<h2 className="flex w-full items-start font-bold text-[2rem] text-white">{text}</h2>}
                endContent={<CaretDown width={24} height={24} color="#ffff" />}
                variant="shadow"
            />
        </>
    )
}