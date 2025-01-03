'use client'

interface IdentifyItemProps {
    id: string,
    text: string,
    onClick: (number: string) => void,
    isDisabled: boolean
    isActive: boolean
    isUsing: boolean
}

export function IdentifyItem({ id, text, onClick, isDisabled, isActive, isUsing }: IdentifyItemProps) {
    return (
        <input
            type="button"
            className={`
                flex px-4 py-2 transition-all cursor-pointer border-2 rounded-full
                ${  isActive === true
                    ? "bg-accent border-accent"
                    : isUsing === true
                        ? "bg-accent-blur-using border-accent"
                        : "bg-accent-blur border-accent-blur"
                }
                ${isDisabled === true ? "opacity-20" : ""}
            `}
            value={text}
            onClick={() => onClick(id)}
            key={ text }
            disabled={isDisabled}
        />
    )
}