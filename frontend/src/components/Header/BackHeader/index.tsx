import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'

interface BackHeaderProps {
    href: string
    onClick?: () => void
}

export function BackHeader({ href, onClick }: BackHeaderProps) {
    return (
        <>
            {
                onClick
                ? <div>
                    <ArrowLeft
                        weight='bold'
                        size={20}
                        className='cursor-pointer'
                        onClick={onClick}
                    />
                </div>

                : <Link href={href}>
                    <ArrowLeft
                        weight='bold'
                        size={20}
                        className='cursor-pointer'
                    />
                </Link> 
            }
        </>
    )
}