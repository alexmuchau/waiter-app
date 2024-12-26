import Link from "next/link"
import { ParsedUrlQueryInput } from "querystring"

interface LinkButtonProps {
    text: string,
    href: string,
    query?: ParsedUrlQueryInput
    onClick?: () => void
}

export function LinkButton({ text, href, query, onClick }: LinkButtonProps) {
    return (
        <Link
            className="flex w-full items-center justify-center py-2 bg-accent rounded-full text-slate-900 font-bold"
            onClick={onClick}
            href={{
                pathname: href,
                query: query
            }}
        >
            {text}
        </Link>
    )
}