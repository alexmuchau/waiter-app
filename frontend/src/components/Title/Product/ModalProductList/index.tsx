import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { ProductListProps } from "../../../../../../utils/types";
import { ProductItem, ProductItemProps } from "@/components/ProductList/ProductItem";
import { ModalProductItem } from "./ModalProductItem";
import { Button } from "@/components/Buttons/Button";
import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

interface ModalProductListProps {
    category: string;
    isOpen: boolean
    onOpenChange: () => void
    products: ProductListProps[]
    chosenProducts: ProductItemProps[]
    addProduct: (id: string, name:string, price: number, category: string, quantity: number) => void
}

export function ModalProductList({ category, isOpen, onOpenChange, products, chosenProducts, addProduct }: ModalProductListProps) {
    const [ productsList, setProductsList ] = useState<ProductListProps[]>(products)
    
    function filterProducts(e: React.ChangeEvent<HTMLInputElement>) {
        const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setProductsList(filteredProducts)
    }
    
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size="md"
            scrollBehavior="inside"
            placement="center"
            className="max-h-[80vh]"
        >
            <ModalContent className="py-4 px-2">
                {
                    (onClose) => (
                        <>
                            <ModalHeader className="flex justify-between gap-4">
                                Adicionar {category}
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    type="text"
                                    variant="underlined"
                                    onChange={filterProducts}
                                    endContent={
                                        <MagnifyingGlass
                                            weight="bold"
                                            size={18}
                                            className="text-gray-400"
                                        />
                                    }
                                />
                                <div className="flex flex-col gap-4">
                                    {
                                        productsList.map((p) => {
                                            const chosenProduct = chosenProducts.find((chosenProduct) => chosenProduct.id === p.id)
                                            const product = {
                                                ...p,
                                                quantity: chosenProduct ? chosenProduct.quantity : 0
                                            }
                                                
                                            return (
                                                <ModalProductItem
                                                    key={product.id}
                                                    product={product}
                                                    addProduct={(quantity: number) => addProduct(product.id, product.name, product.price, category, quantity)}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button text="Salvar" onClick={onClose}/>
                            </ModalFooter>
                        </>
                    )
                }
            </ModalContent>
        </Modal>
    )
}