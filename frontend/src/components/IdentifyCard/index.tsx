interface IdentifyCard {
    title: string,
    number: string
}

export function IdentifyCard({ title, number }: IdentifyCard) {
    return (
        <div
            className="flex flex-col w-full items-center justify-center bg-accent-blur text-slate-900 text-2xl py-6 px-6 gap-3 rounded-[2rem]"
        >
            <p>{title}</p>
            <p className="font-bold">{parseInt(number) < 10 ? '0' + number : number}</p>
        </div>
    )
}