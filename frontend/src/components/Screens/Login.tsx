import { Input } from "@nextui-org/input";
import { HeaderTitle } from "../Header/HeaderTitle";
import { useState } from "react";

import { User } from "../../../../utils/types"
import { Button } from "../Buttons/Button";

interface LoginScreenProps {
    setCookie: (user: User) => void
}

export function LoginScreen({ setCookie }: LoginScreenProps) {
    const [ username, setUsername ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')

    function tryLogin() {
        // BACKEND things
        const user: User = {
            login: username,
            password: password,
            name: 'Alex'
        }

        setCookie(user)
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
            </div>
        </>
    )
}