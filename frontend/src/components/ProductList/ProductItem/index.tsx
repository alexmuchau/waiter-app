import { ArrowRight, X, XCircle } from "phosphor-react"
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
        <div className="flex px-8 py-2 justify-between bg-accent-blur text-slate-900 rounded-md">
            <div className={`
                flex flex-wrap items-center
            `}>
                <p className="w-full">{product.name}</p>
                <div className="flex items-center gap-4 text-base">
                    <p className="font-bold text underline">{product.quantity}x</p>
                    <p className="font-bold text underline">R${product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2">
                        <p>Total</p>
                        <ArrowRight
                            weight="bold"
                        />
                        <p className="font-bold text underline">R${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                {
                    !!removeItem
                        && <X
                            size={26}
                            onClick={() => removeItem(product.id)}
                            weight="bold"
                            className="cursor-pointer"
                        />
                }
            </div>
        </div>
    )
}