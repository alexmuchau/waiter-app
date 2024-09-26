'use client'
import { LinkButton } from "@/components/Buttons/LinkButton";
import { HeaderTitle } from "@/components/Header/HeaderTitle";

export interface ProductListProps {
  id: string,
  name: string
}

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
      <header className="flex">
        <HeaderTitle text="mesas ativas"/>
      </header>
      <div className="flex flex-col gap-8"> 
        
      </div>
      <footer>
        <LinkButton
          text="Construir Pedido"
          href={'/order'}
        />
      </footer>
    </main>
  );
}
