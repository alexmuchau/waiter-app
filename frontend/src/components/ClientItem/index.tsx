'use client'

import { XCircle } from "phosphor-react"
import { ClientProps } from "../../../../utils/types"

interface ClientItemProps {
    client: ClientProps,
    removeClient: () => void
}

export function ClientItem({ client, removeClient }: ClientItemProps) {
    return (
        <div className="flex px-8 py-2 bg-accent-blur text-slate-900 justify-between items-center rounded-full">
            <p>{client.name}</p>
            <XCircle
                size={20}
                onClick={removeClient}
                weight="bold"
                className="cursor-pointer"
            />
        </div>
    )
}