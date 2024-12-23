'use client'

import { HomeScreen } from "@/components/Screens/Home";
import { LoginScreen } from "@/components/Screens/Login";
import { useEffect, useState } from "react";
import { User } from "../../../utils/types" 
import { CookiesProvider, useCookies } from "react-cookie";

export interface ProductListProps {
  id: string,
  name: string
}

export default function Home() {
  const [ user, setUser ] = useState<User | undefined>(undefined)
  const [ checkingCookies, setCheckingCookies ] = useState<boolean>(true)

  const [ cookies, setCookie ] = useCookies(['user']);

  function setUserCredentialsCookie(user: User) {
    setCheckingCookies(true)

    // 7 days max age, in seconds
    setCookie("user", user, {
      maxAge: 60*60*24*7
    })
  }

  useEffect(() => {
    if (cookies.user) {
      setUser(cookies.user)
    }

    setCheckingCookies(false)
  }, [cookies])

  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
        { 
          checkingCookies === true
          ? <h1>Checking Cookies</h1>
          : !user
          ? <LoginScreen
              setCookie={setUserCredentialsCookie}
            />
          : <HomeScreen
              user={user}
            />
        }
      </main>
    </CookiesProvider>
  );
}
