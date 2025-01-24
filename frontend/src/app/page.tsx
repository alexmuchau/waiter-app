'use client'

import { useEffect, useState } from "react";
import { ActiveTableItemProps, User } from "../../../utils/types" 
import { LinkButton } from "@/components/Buttons/LinkButton";
import { ActiveTablesList } from "@/components/ActiveTablesList";
import { ConnectionBackend } from "@/components/ConnectionBackend";
import { LoggedUser } from "@/components/LoggedUser";
import api from "@/api/api";
import { useRouter } from "next/navigation";
import { getCookie, getCookies, setCookie, deleteCookie, hasCookie } from 'cookies-next';
import { HeaderTitle } from "@/components/Header/HeaderTitle";

export default function Home() {
    const router = useRouter()
    
    const [ user, setUser ] = useState<User | undefined>(undefined)
    const [ checkingCookies, setCheckingCookies ] = useState<boolean>(true)
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

        const userCookie = getCookie('user');
        
        if (userCookie) {
            setUser(JSON.parse(userCookie))
            checkConnection()
            getActiveTables()
        } else {
            router.push('/login')
        }
        
        setCheckingCookies(false)
    }, [router])
    
    return (
        <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
        { 
            checkingCookies === true
                ? <h1>Checking Cookies</h1>
                : !user
                ? <h1>Sem usuário!</h1>
                : <>
                    <header className="flex gap-4">
                        <LoggedUser
                            user={user}
                        />
                        <ConnectionBackend
                            status={connectedBackend}
                        />
                    </header>
                    <div className="flex flex-col gap-8">
                        <div className="flex w-full">
                            <HeaderTitle text="mesas ativas"/>
                            <LinkButton
                                href="/tableUpdate"
                                disabled={!connectedBackend}
                                fixed={false}
                            >
                                Atualizar comanda mesa
                            </LinkButton>
                        </div>
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
        }
        </main>
    );
}
