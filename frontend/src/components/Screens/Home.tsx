'use client';

import { LinkButton } from "@/components/Buttons/LinkButton";
import { HeaderTitle } from "@/components/Header/HeaderTitle";
import { User } from "../../../../utils/types";
import { LoggedUser } from "../LoggedUser";

interface HomeScreenProps {
    user: User
}

export function HomeScreen({ user }: HomeScreenProps) {
    return (
        <>
            <header className="flex">
                <LoggedUser
                    user={user}
                />
            </header>
            <div className="flex flex-col gap-8"> 
                <HeaderTitle text="mesas ativas"/>                
            </div>
            <footer>
                <LinkButton
                    text="Construir Pedido"
                    href='/order'
                />
            </footer>
        </>
    )
}