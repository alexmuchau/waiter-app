interface TitleProps {
    text: string
}

export function Title({text} : TitleProps) {
    return (
        <div className="flex w-full items-center gap-3">
            <h2 className="font-bold text-[2rem] whitespace-nowrap">{text}</h2>
            <div className="bg-slate-900 h-[0.125rem] flex w-full"/>
        </div>
    )
}