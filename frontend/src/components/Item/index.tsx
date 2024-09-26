'use client'

interface ItemProps {
    text: string,
    onClick: (number: string) => void,
    isDisabled: boolean
    isActive: boolean
}

export function Item({ text, onClick, isDisabled, isActive }: ItemProps) {
    return (
        <input
            type="button"
            className={`
                flex px-4 py-2 ${isActive === false ? "bg-accent-blur" : "bg-accent"}
                transition-all cursor-pointer border-accent border-2 rounded-full
                ${isDisabled === true ? "opacity-20" : ""}
            `}
            value={text}
            onClick={() => onClick(text)}
            key={ text }
            disabled={isDisabled}
        />
    )
}