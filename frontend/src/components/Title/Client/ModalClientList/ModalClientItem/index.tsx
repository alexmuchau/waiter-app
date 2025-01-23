import { Button } from "@heroui/react";
import { useState } from "react";
import { ClientProps } from "../../../../../../../utils/types";

interface ModalClientItemProps {
    client: ClientProps
    addClient: (id: string) => void
    isSelected: boolean
}

export function ModalClientItem({ client, addClient, isSelected }: ModalClientItemProps) {
    return (
        <Button
            className="flex h-full py-2 gap-4 items-center justify-between"
            color={!isSelected ? "default" : "primary"}
            onPress={() => addClient(client.id)}
        >
            <p className="flex-wrap max-w-64 whitespace-normal text-start">{client.name}</p>
        </Button>
    )
}