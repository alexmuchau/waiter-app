import { Input } from "@nextui-org/input";
import { HeaderTitle } from "../Header/HeaderTitle";
import { useState } from "react";

import { User } from "../../../../utils/types"
import { Button } from "../Buttons/Button";
import api from "@/api/api";

interface LoginScreenProps {
    setCookie: (user: User) => void
}

export function LoginScreen({ setCookie }: LoginScreenProps) {
    const [ username, setUsername ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>(undefined)

    async function tryLogin() {
        try {
            if(!username || !password) {
                setErrorMessage("Preencha todos os campos!!")
                return
            }

            const res = await api.post('/waiters/login', {
                username,
                password
            })

            const { waiter } = res.data as { waiter: User }
            setCookie(waiter)
        } catch (error) {
            setErrorMessage("Erro ao fazer login!!")
        }
    }
    
    return (
        <>
            <header className="flex">
                <HeaderTitle text="login"/>
            </header>
            <div className="flex flex-col gap-2">
                <Input
                    label="nome de usuário"
                    type="text"
                    onValueChange={setUsername}
                />

                <Input
                    label="senha"
                    type="password"
                    onValueChange={setPassword}
                />

                <Button
                    onClick={tryLogin}
                    text="Login"
                />

                {
                    errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>
                }
            </div>
        </>
    )
}