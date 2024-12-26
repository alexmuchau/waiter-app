import { XCircle } from "phosphor-react"
import { ProductItemProps } from ".."

interface ComponentProductItemProps {
    product: ProductItemProps
    removeItem?: (id: string) => void
}

export function ProductItem({ product, removeItem }: ComponentProductItemProps) {
    return (
        <div className="flex px-8 py-2 bg-accent-blur text-slate-900 justify-between items-center rounded-full">
            <div className="flex items-center gap-4 text-base">
                <p>{product.name}</p>
                <p className="font-bold text underline">{product.quantity}x</p>
            </div>
            {
                removeItem &&
                <XCircle
                    size={20}
                    onClick={() => removeItem(product.id)}
                    weight="bold"
                    className="cursor-pointer"
                />
            }
        </div>
    )
}