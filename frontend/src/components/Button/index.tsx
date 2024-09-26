interface ButtonProps {
    onClick: () => void,
    text: string
}

export function Button({ onClick, text }: ButtonProps) {
    return (
        <button
            className="flex w-full items-center justify-center py-2 bg-accent rounded-full text-slate-900 font-bold"
            onClick={onClick}
        >
            {text}
        </button>
    )
}