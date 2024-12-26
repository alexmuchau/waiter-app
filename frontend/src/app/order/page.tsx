'use client'

import { ProductListProps } from "../page"
import { useEffect, useState } from "react"
import { ProductItemProps, ProductList } from "@/components/ProductList"
import { Title } from "@/components/Title/Default"
import { TitleProduct } from "@/components/Title/Product"
import { HeaderTitle } from "@/components/Header/HeaderTitle"
import { IdentifyList } from "@/components/Identify/IdentifyList"
import { BackHeader } from "@/components/Header/BackHeader"
import { TitleClient } from "@/components/Title/Client"
import { ClientItem } from "@/components/ClientItem"
import { ClientProps, IdentifyItemProps } from "../../../../utils/types"
import api from "@/api/api"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { useCookies } from "react-cookie"

export default function OrderBuild() {
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

  const [ clients, setClients ] = useState<ClientProps[]>([])
  const [ tables, setTables ] = useState<IdentifyItemProps[]>([])
  const [ commands, setCommands ] = useState<IdentifyItemProps[]>([])

  // const [ order, setOrder ] = useState<OrderProps | null>(null)
  const [ client, setClient ] = useState<ClientProps | undefined>(undefined)
  const [ board, setBoard ] = useState<string | undefined>(undefined)
  const [ command, setCommand ] = useState<string | undefined>(undefined)
  const [ chopps, setChopps ] = useState<ProductItemProps[]>([])
  const [ foods, setFoods ] = useState<ProductItemProps[]>([])

  const [ orderCookies, setOrderCookies, removeOrderCookies ] = useCookies(['orderCookies']);

  const [ isListingDB, setIsListingDB ] = useState<boolean>(true)

  function selectItem(key: "board" | "command", value: string | undefined) {
    switch (key) {
      case "board": {
        setBoard(value)
        break;
      }
      case "command": {
        setCommand(value)
        break;
      }
      default:
        break;
    }
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

  function selectClient(id: string, name:string) {
    setClient({ id: id, name: name })
    setCommand(id)
    setBoard(tables.find((table) => table.value == id)?.value)
  }

  function removeClient() {
    setClient(undefined)
    setCommand(undefined)
    setBoard(undefined)
  }

  function handleResumeOrder() {
    setOrderCookies('orderCookies', {
      client: client,
      board: board,
      command: command,
      chopps: chopps,
      foods: foods
    }, {
      maxAge: 60*60*24*7
    })
  }

  useEffect(() => {
    console.log('Listing DB')

    async function fetchData() {
      const { clients } = (await api.get('/clients')).data as { clients: ClientProps[] }
      const { commands } = (await api.get('/commands')).data as { commands: IdentifyItemProps[] }
      const { tables } = (await api.get('/tables')).data as { tables: IdentifyItemProps[] }

      console.log(commands)

      setClients(clients)
      setCommands(commands)
      setTables(tables)
      setIsListingDB(!isListingDB)
    }

    fetchData()

    if (orderCookies.orderCookies) {
      const { client, board, command, chopps, foods } = orderCookies.orderCookies
      setClient(client)
      setBoard(board)
      setCommand(command)
      setChopps(chopps)
      setFoods(foods)
    }
  }, [])

  return (
    <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
      <BackHeader
        href='/'
        onClick={() => removeOrderCookies('orderCookies')}
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
            disabled={client && tables.find((table) => table.value == client.id) ? true : false}
            listKey="board"
            selectItem={selectItem}
            list={tables}
            activeItem={board}
          />
        </div>
        <div className="flex flex-col">
          <Title text="Comandas" />
          <IdentifyList
            key="command"
            listKey="command"
            disabled={client ? true : false}
            selectItem={selectItem}
            list={commands}
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
        <LinkButton
          href="/order/resume"
          onClick={handleResumeOrder}
          text="Resumo do Pedido"
        />
      </footer>
    </main>
  );
}
  