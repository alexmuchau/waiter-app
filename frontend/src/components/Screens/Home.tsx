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
    const [ connectedBackend, setConnectedBackend ] = useState<boolean>(false)
    const [ activeTables, setActiveTables ] = useState<ActiveTableItemProps[]>([])

    useEffect(() => {
        async function getActiveTables() {
            if (!(await checkConnection())) return
            const { tables } = (await api.get('/tables/active')).data as { tables: ActiveTableItemProps[] }
            setActiveTables(tables)
        }

        async function checkConnection() {
            try {
                await api.get('/')
                setConnectedBackend(true)
            } catch (error) {
                setConnectedBackend(false)
                return false
            }

            return true
        }

        checkConnection()
        getActiveTables()
    })
    
    return (
        <>
            <header className="flex gap-4">
                <LoggedUser
                    user={user}
                />
                <ConnectionBackend
                    status={connectedBackend}
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
                    disabled={!connectedBackend}
                >
                    Construir Pedido
                </LinkButton>
            </footer>
        </>
    )
}