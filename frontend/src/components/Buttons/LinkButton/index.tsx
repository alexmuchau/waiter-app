import Link from "next/link"
import { ParsedUrlQueryInput } from "querystring"

interface LinkButtonProps {
    children: React.ReactNode,
    href: string,
    query?: ParsedUrlQueryInput
    onClick?: () => void
    disabled?: boolean
}

export function LinkButton({ children, href, query, onClick, disabled = false }: LinkButtonProps) {
    return (
        <div
            className="fixed bottom-0 left-0 flex w-full p-4 justify-center"
        >
            <Link
                className={`
                    flex w-full py-2 items-center justify-center bg-accent text-slate-900 rounded-full font-bold
                    ${disabled ? 'opacity-40 pointer-events-none' : ''}
                `}
                onClick={onClick}
                href={{
                    pathname: href,
                    query: query
                }}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : undefined}
            >
                {children}
            </Link>
        </div>
    )
}