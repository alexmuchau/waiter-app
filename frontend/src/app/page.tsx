'use client'
import { ItemList, ItemProps } from "@/components/ItemList";
import { Title } from "@/components/Title/Default";
import { useEffect, useState } from "react";
// import { OrderProps } from "../../../utils/types"
import { BackButton } from "@/components/BackButton";
import { ProductItemProps, ProductList } from "@/components/ProductList";
import { TitleProduct } from "@/components/Title/Product";

export interface ProductListProps {
  id: string,
  name: string
}

export default function Home() {
  const boards: ItemProps[] = [
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


  // const [ order, setOrder ] = useState<OrderProps | null>(null)
  const [ board, setBoard ] = useState<string | undefined>(undefined)
  const [ command, setCommand ] = useState<string | undefined>(undefined)
  const [ chopps, setChopps ] = useState<ProductItemProps[]>([])

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

  function removeChoppItem(id: string) {
    setChopps(chopps!.filter((chopp) => chopp.id != id))
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

  useEffect(() => {
    console.log(`Mesa - ${board}, Comanda - ${command}`)
  }, [board, command])

  return (
    <main className="flex flex-col w-full h-full justify-start py-10 px-4">
      <BackButton />
      <header className="flex py-8">
        <h1 className="text-3xl">
          pedido
        </h1>
      </header>
      <div className="flex flex-col gap-8"> 
        <div className="flex flex-col">
          <Title text="Mesas"></Title>
          <ItemList
            key="board"
            disabled={false}
            listKey="board"
            selectItem={selectItem}
            list={boards}
            activeItem={board}
          />
        </div>
        <div className="flex flex-col">
          <Title text="Comandas"></Title>
          <ItemList
            key="command"
            listKey="command"
            disabled={!board ? true : false}
            selectItem={selectItem}
            list={boards}
            activeItem={command}
          />
        </div>
        <div className="flex flex-col gap-8">
          <TitleProduct
            text="Chopp"
            products={products}
            addProduct={addChoppItem}
          />
          <ProductList
            key="chopp"
            listActiveProducts={chopps}
            removeItem={removeChoppItem}
          />
        </div>
      </div>
      <footer>

      </footer>
    </main>
  );
}
