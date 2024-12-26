'use client'

interface IdentifyItemProps {
    text: string,
    onClick: (number: string) => void,
    isDisabled: boolean
    isActive: boolean
    isUsing: boolean
}

export function IdentifyItem({ text, onClick, isDisabled, isActive, isUsing }: IdentifyItemProps) {
    return (
        <input
            type="button"
            className={`
                flex px-4 py-2 transition-all cursor-pointer border-accent border-2 rounded-full
                ${isActive === true ? "bg-accent" : isUsing === true ? "bg-accent-blur-using" : "bg-accent-blur"}
                ${isDisabled === true ? "opacity-20" : ""}
            `}
            value={text}
            onClick={() => onClick(text)}
            key={ text }
            disabled={isDisabled}
        />
    )
}