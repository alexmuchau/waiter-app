import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'phosphor-react'

interface BackHeaderProps {
    additionalOnClick?: () => void
}

export function BackHeader({ additionalOnClick }: BackHeaderProps) {
    const router = useRouter()

    return (
        <button
            onClick={() => {
                router.back()
                if (additionalOnClick) additionalOnClick()
            }}
        >
            <ArrowLeft
                weight='bold'
                size={20}
                className='cursor-pointer'
            />
        </button> 
    )
}