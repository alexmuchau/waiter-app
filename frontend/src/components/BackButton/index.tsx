import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'

interface BackButtonProps {
    href: string
    onClick?: () => void
}

export function BackButton({ href, onClick }: BackButtonProps) {
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