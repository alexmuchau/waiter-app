import { Title } from "@/components/Title/Default";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full justify-start py-16 px-32">
      <div>
        <Title text="Teste"></Title>
      </div>
      <button className="">
        Construir Pedido
      </button>
    </main>
  );
}
