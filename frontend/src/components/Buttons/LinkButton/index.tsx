import Link from "next/link"
import { ParsedUrlQueryInput } from "querystring"

interface LinkButtonProps {
    children: React.ReactNode,
    href: string,
    query?: ParsedUrlQueryInput
    fixed?: boolean
    onClick?: () => void
    disabled?: boolean
    replace?: boolean
    paddingVertical?: 'py-2' 
}

export function LinkButton({ fixed = true, replace = false, children, href, query, onClick, disabled = false }: LinkButtonProps) {
    return (
        <div
            className={`${fixed && 'fixed bottom-0 left-0 p-4'} flex w-full justify-center`}
        >
            <Link
                className={`
                    flex w-full py-2 items-center justify-center bg-accent text-slate-900 rounded-md font-bold
                    ${disabled ? 'opacity-40 pointer-events-none' : ''}
                `}
                onClick={onClick}
                href={{
                    pathname: href,
                    query: query
                }}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : undefined}
                replace={replace}
            >
                {children}
            </Link>
        </div>
    )
}