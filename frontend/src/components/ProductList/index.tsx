import { ProductItem } from "./ProductItem"

export interface ProductItemProps {
    id: string,
    name: string,
    quantity: number
}

interface ProductListProps {
    listActiveProducts: ProductItemProps[]
    removeItem?: (id: string) => void
}

export function ProductList({ listActiveProducts, removeItem }: ProductListProps) {
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