'use client';

import { LinkButton } from "@/components/Buttons/LinkButton";
import { ActiveTableItemProps, User } from "../../../../utils/types";
import { LoggedUser } from "../LoggedUser";
import { useEffect, useState } from "react";
import { ActiveTablesList } from "../ActiveTablesList";
import api from "@/api/api";
import { ConnectionBackend } from "../ConnectionBackend";

interface HomeScreenProps {
    user: User
}

export function HomeScreen({ user }: HomeScreenProps) {
    const [ activeTables, setActiveTables ] = useState<ActiveTableItemProps[]>([])

    useEffect(() => {
        async function getActiveTables() {
            const { tables } = (await api.get('/tables/active')).data as { tables: ActiveTableItemProps[] }
            setActiveTables(tables)
        }

        getActiveTables()
    })
    
    return (
        <>
            <header className="flex gap-4">
                <LoggedUser
                    user={user}
                />
                <ConnectionBackend
                    status={true}
                />
            </header>
            <div className="flex flex-col gap-8"> 
                <ActiveTablesList
                    activeTables={activeTables}
                />
            </div>
            <footer>
                <LinkButton
                    href='/order'
                >
                    Construir Pedido
                </LinkButton>
            </footer>
        </>
    )
}