import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'

interface BackHeaderProps {
    href: string,
    query?: object,
    replace?: boolean
    onClick?: () => void
}

export function BackHeader({ href, query, replace = true, onClick }: BackHeaderProps) {
    return (
        <Link
            href={{
                pathname: href,
                query: JSON.stringify(query)
            }}
            replace={replace}
            onClick={onClick}
        >
            <ArrowLeft
                weight='bold'
                size={20}
                className='cursor-pointer'
            />
        </Link> 
    )
}