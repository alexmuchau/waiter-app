import Link from "next/link"

interface ButtonProps {
    text: string,
    href: string,
}

export function LinkButton({ text, href }: ButtonProps) {
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