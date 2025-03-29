'use client'

import { Input } from "@heroui/input";
import { FormEvent, useState } from "react";
import { User } from "../../../../../utils/types"
import api from "@/api/api";

import { HeaderTitle } from "@/components/Header/HeaderTitle";
import { Button } from "@/components/Buttons/Button";
import { useCookies } from "react-cookie";
import { Form } from "@heroui/form";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Spinner } from "@heroui/react";

export default function LoginScreen() {
    const [ username, setUsername ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>(undefined)
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const router = useRouter()

    async function tryLogin(event: FormEvent) {
        event.preventDefault()
        setIsLoading(true)

        try {
            if(!username || !password) {
                setErrorMessage("Preencha todos os campos!!")
                return
            }

            const res = await api.post('/waiters/login', {
                username,
                password
            })

            const { waiter, token } = res.data as { waiter: User, token: string }
            setCookie("user", waiter, {
                maxAge: 60*60*24*7
            })
            setCookie("token", token )
            router.push('/')
        } catch (error) {
            setErrorMessage("Erro ao fazer login!!")
        }
        setIsLoading(false)
    }
    
    return (
        <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
            <header className="flex">
                <HeaderTitle text="login"/>
            </header>
            <Form className="flex flex-col gap-2" onSubmit={tryLogin}>
                <Input
                    label="nome de usuário"
                    type="text"
                    onValueChange={setUsername}
                    isRequired
                />

                <Input
                    label="senha"
                    type="password"
                    onValueChange={setPassword}
                    isRequired
                />

                <Button type="submit" disabled={isLoading}>
                    <div className="flex gap-2">
                        { isLoading && <Spinner size="sm" /> }
                        Login
                    </div>
                </Button>
                {
                    errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>
                }
            </Form>
        </main>
    )
}