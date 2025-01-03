import { ProductListProps } from "../../../../utils/types"
import { ProductItem } from "./ProductItem"

interface ComponentProductListProps {
    listActiveProducts: Array<ProductListProps & { quantity: number }>
    removeItem?: (id: string) => void
}

export function ProductList({ listActiveProducts, removeItem }: ComponentProductListProps) {
    return (
        <div className="flex flex-col gap-4">
            {
                listActiveProducts.map((product) => 
                    <ProductItem
                        product={product}
                        key={product.id}
                        removeItem={removeItem}
                    />
                )
            }
        </div>
    )
}