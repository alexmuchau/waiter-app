'use client'

import { ItemList, ItemProps } from "@/components/ItemList"
import { ProductListProps } from "../page"
import { useState } from "react"
import { ProductItemProps, ProductList } from "@/components/ProductList"
import { BackButton } from "@/components/BackButton"
import { Title } from "@/components/Title/Default"
import { TitleProduct } from "@/components/Title/Product"
import { IdentifyCard } from "@/components/IdentifyCard"
import { Button } from "@/components/Button"
// import { LinkButton } from "@/components/LinkButton"

export default function OrderBuild() {
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


  // const [ order, setOrder ] = useState<OrderProps | null>(null)
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
    setChopps(foods!.filter((food) => food.id != id))
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

  function finishOrder() {
    // TO DO!
    // redirect('/')
  }

  return (
    <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
      {
        !isResume
        ? <>
          <BackButton
            href='/'
          />
          <header className="flex">
            <h1 className="text-3xl">
              pedido
            </h1>
          </header>
          <div className="flex flex-col gap-8 h-screen"> 
            <div className="flex flex-col">
              <Title text="Mesas" />
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
              <Title text="Comandas" />
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
            <div className="flex flex-col gap-8">
              <TitleProduct
                text="Porções"
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
          <BackButton href="" onClick={handleIsResume}/>
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
  