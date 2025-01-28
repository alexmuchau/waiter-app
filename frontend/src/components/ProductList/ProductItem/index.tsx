import { ArrowRight, XCircle } from "phosphor-react"
import { ProductListProps } from "../../../../../utils/types"

export interface ProductItemProps {
    id: string,
    name: string,
    price: number,
    quantity: number
}

interface ComponentProductItemProps {
    product: ProductListProps & {
        quantity: number
    }
    removeItem?: (id: string) => void
}

export function ProductItem({ product, removeItem }: ComponentProductItemProps) {
    return (
        <div className={`
            flex ${!removeItem && 'flex-col'} px-8 py-2 bg-accent-blur text-slate-900 justify-between items-center rounded-full
        `}>
            <p className="w-1/2">{product.name}</p>
            <div className="flex items-center gap-4 text-base">
                <p className="font-bold text underline">{product.quantity}x</p>
                <p className="font-bold text underline">R${product.price.toFixed(2)}</p>
            </div>
            {
                !!removeItem
                    ? <XCircle
                        size={20}
                        onClick={() => removeItem(product.id)}
                        weight="bold"
                        className="cursor-pointer"
                    />
                    : <div className="flex items-center gap-2">
                        <p>Total</p>
                        <ArrowRight
                            weight="bold"
                        />
                        <p className="font-bold text underline">R${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
            }
        </div>
    )
}