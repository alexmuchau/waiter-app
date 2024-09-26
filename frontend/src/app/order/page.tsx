'use client'

import { ProductListProps } from "../page"
import { useEffect, useState } from "react"
import { ProductItemProps, ProductList } from "@/components/ProductList"
import { Title } from "@/components/Title/Default"
import { TitleProduct } from "@/components/Title/Product"
import { IdentifyCard } from "@/components/Identify/IdentifyCard"
import { Button } from "@/components/Buttons/Button"
import { HeaderTitle } from "@/components/Header/HeaderTitle"
import { IdentifyItemProps, IdentifyList } from "@/components/Identify/IdentifyList"
import { BackHeader } from "@/components/Header/BackHeader"
import { TitleClient } from "@/components/Title/Client"
import { ClientItem } from "@/components/ClientItem"

export interface ClientProps {
  id: string,
  name: string
}

export default function OrderBuild() {
  const boards: IdentifyItemProps[] = [
    {
      value: "1",
      isActive: true  
    },
    {
      value: "3",
      isActive: false  
    },
    {
      value: "4",
      isActive: false 
    },
    {
      value: "5",
      isActive: false 
    },
  ]

  const products: ProductListProps[] = [
      {
          id: "1",
          name: "Pilsen 300ml"
      },
      {
          id: "2",
          name: "Pilsen 500ml"
      },
      {
          id: "3",
          name: "Pilsen 1000ml"
      },
      {
          id: "4",
          name: "Vinhedo 473ml"
      },
      {
          id: "5",
          name: "Ipa 1000ml"
      },
  ]

  const productsPorcoes: ProductListProps[] = [
      {
          id: "6",
          name: "Frango á Passarinho"
      },
      {
          id: "7",
          name: "Frango Sassami"
      },
      {
          id: "8",
          name: "Bolinho de Bacalhau"
      },
      {
          id: "9",
          name: "Bolinho 2"
      },
      {
          id: "10",
          name: "Bolinho 3"
      }
  ]

  const clients: ClientProps[] = [
    {
      id: "1",
      name: "Andrei"
    },
    {
      id: "2",
      name: "Padilha"
    },
    {
      id: "3",
      name: "Murilo"
    },
    {
      id: "4",
      name: "Alex"
    },
  ]


  // const [ order, setOrder ] = useState<OrderProps | null>(null)
  const [ client, setClient ] = useState<ClientProps | undefined>(undefined)
  const [ board, setBoard ] = useState<string | undefined>(undefined)
  const [ command, setCommand ] = useState<string | undefined>(undefined)
  const [ chopps, setChopps ] = useState<ProductItemProps[]>([])
  const [ foods, setFoods ] = useState<ProductItemProps[]>([])
  const [ isResume, setIsResume ] = useState<boolean>(false)

  function selectItem(key: "board" | "command", value: string | undefined) {
    switch (key) {
      case "board": {
        setBoard(value)
        setCommand(undefined)
        break;
      }
      case "command": {
        setCommand(value)
      }
      default:
        break;
    }
  }

  function handleIsResume() {
    setIsResume(!isResume)
  }

  function removeChoppItem(id: string) {
    setChopps(chopps!.filter((chopp) => chopp.id != id))
  }

  function removeFoodItem(id: string) {
    setFoods(foods!.filter((food) => food.id != id))
  }

  function addChoppItem(id: string, name: string, quantity: number) {
    let exists = false

    const newChopps = chopps.map((chopp) => {
      if (chopp.id == id) {
        exists = true
        return {
          id: id,
          name: name,
          quantity: chopp.quantity + quantity
        }
      }

      return {
        id: chopp.id,
        name: chopp.name,
        quantity: chopp.quantity
      }
    })

    if (!exists) newChopps.push({ id: id, name: name, quantity: quantity })

    setChopps(newChopps)
  }

  function addFoodItem(id: string, name: string, quantity: number) {
    let exists = false

    const newFoods = foods.map((food) => {
      if (food.id == id) {
        exists = true
        return {
          id: id,
          name: name,
          quantity: food.quantity + quantity
        }
      }

      return {
        id: food.id,
        name: food.name,
        quantity: food.quantity
      }
    })

    if (!exists) newFoods.push({ id: id, name: name, quantity: quantity })

    setFoods(newFoods)
  }

  function selectClient(id:string, name:string) {
    setClient({ id: id, name: name })
  }

  function removeClient() {
    setClient(undefined)
  }

  function finishOrder() {
    // TO DO!
    // redirect('/')
  }

  useEffect(() => {
    console.log(`Board - ${board}, Command - ${command}, !board && !command = ${!board && !command}`)
  }, [board, command])

  return (
    <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
      {
        !isResume
        ? <>
          <BackHeader
            href='/'
          />
          <header className="flex">
            <HeaderTitle text="pedido"/>
          </header>
          <div className="flex flex-col gap-8 h-screen"> 
            <div className="flex flex-col">
              <TitleClient
                text="Cliente"
                selectClient={selectClient}
                disabled={!(!client)}
                clients={clients}
              />
              {
                client
                ? <ClientItem
                  client={client}
                  removeClient={removeClient}
                />
                : <></>
              }
            </div>
            <div className="flex flex-col">
              <Title text="Mesas" />
              <IdentifyList
                key="board"
                disabled={false}
                listKey="board"
                selectItem={selectItem}
                list={boards}
                activeItem={board}
              />
            </div>
            <div className="flex flex-col">
              <Title text="Comandas" />
              <IdentifyList
                key="command"
                listKey="command"
                disabled={!board}
                selectItem={selectItem}
                list={boards}
                activeItem={command}
              />
            </div>
            <div className="flex flex-col gap-8">
              <TitleProduct
                text="Chopp"
                disabled={!board || !command}
                products={products}
                addProduct={addChoppItem}
              />
              <ProductList
                key="chopp"
                listActiveProducts={chopps}
                removeItem={removeChoppItem}
              />
            </div>
            <div className="flex flex-col gap-8">
              <TitleProduct
                text="Porções"
                disabled={!board || !command}
                products={productsPorcoes}
                addProduct={addFoodItem}
              />
              <ProductList
                key="porcoes"
                listActiveProducts={foods}
                removeItem={removeFoodItem}
              />
            </div>
          </div>
          <footer>
            <Button
              onClick={handleIsResume}
              text="Resumo do Pedido"
            />
          </footer>
        </>

        : <>
          <BackHeader href="" onClick={handleIsResume}/>
          <header className="flex">
            <h1 className="text-3xl">
              resumo do pedido
            </h1>
          </header>
          <div className="flex flex-col gap-8 h-screen"> 
            <div className="flex gap-16">
              <IdentifyCard
                title="Mesa"
                number={board!}
              />
              <IdentifyCard
                title="Comanda"
                number={command!}
              />
            </div>
            <div className="flex flex-col gap-8">
              <Title
                text="Chopp"
              />
              <ProductList
                key="chopp"
                listActiveProducts={chopps}
                removeItem={removeChoppItem}
              />
            </div>
            <div className="flex flex-col gap-8">
              <Title
                text="Porções"
              />
              <ProductList
                key="porcoes"
                listActiveProducts={foods}
                removeItem={removeFoodItem}
              />
            </div>
          </div>
          <footer>
            <Button
              onClick={finishOrder}
              text="Finalizar Pedido"
            />
          </footer>
        </>
      }
      
    </main>
  );
}
  