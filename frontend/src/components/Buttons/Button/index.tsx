import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    disabled?: boolean
}

export function Button({ onClick, children, disabled }: ButtonProps) {
    return (
        <button
            className={`flex w-full items-center justify-center py-2 bg-accent rounded-md text-slate-900 font-bold ${disabled ? 'cursor-not-allowed opacity-80 transition-opacity' : 'cursor-pointer'}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}