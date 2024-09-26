import Link from "next/link"

interface LinkButtonProps {
    text: string,
    href: string,
}

export function LinkButton({ text, href }: LinkButtonProps) {
    return (
        <Link
            className="flex w-full items-center justify-center py-2 bg-accent rounded-full text-slate-900 font-bold"
            href={{
                pathname: href,
            }}
        >
            {text}
        </Link>
    )
}