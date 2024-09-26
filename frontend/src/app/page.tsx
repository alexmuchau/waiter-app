'use client'
import { LinkButton } from "@/components/LinkButton";

export interface ProductListProps {
  id: string,
  name: string
}

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full justify-start py-10 px-4 gap-8">
      <header className="flex">
        <h1 className="text-3xl">
          mesas ativas
        </h1>
      </header>
      <div className="flex flex-col gap-8 h-screen"> 
        
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
