import { Check, Minus } from "phosphor-react";
import { Button } from "@heroui/react";
import { useState } from "react";
import { ProductItemProps } from "@/components/ProductList/ProductItem";

interface ModalProductItemProps {
    product: ProductItemProps
    addProduct: (quantity: number) => void
}

export function ModalProductItem({ product, addProduct }: ModalProductItemProps) {
    const [ quantity, setQuantity ] = useState(product.quantity)

    function minusQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
            addProduct(quantity - 1)
        }
    }

    function plusQuantity() {
        if (quantity < 10) {
            setQuantity(quantity + 1)
            addProduct(quantity + 1)
        }
    }

    return (
        <Button
            className="flex h-full py-2 gap-4 items-center justify-between"
            onPress={plusQuantity}
            color={quantity < 1 ? "default" : "primary"}
        >
            <div className="flex gap-4 items-center">
                <Check size={24} weight="bold" opacity={quantity < 1 ? 0.2 : 1}/>
                <p className="flex-wrap max-w-64 whitespace-normal text-start">{product.name}</p>
            </div>
            <div className="flex items-center gap-2">
                <p>R${product.price.toFixed(2)}</p>
                <Button
                    className="flex p-2 min-w-0 min-h-0 h-full rounded-full"
                    color={quantity < 1 ? "default" : "secondary"}
                    onPress={minusQuantity}
                >
                    <Minus size={12} weight="bold" opacity={quantity < 1 ? 0.2 : 1}/>
                </Button>
                <p className="font-bold text-xl">{quantity} un</p>
            </div>
        </Button>   
    )
}