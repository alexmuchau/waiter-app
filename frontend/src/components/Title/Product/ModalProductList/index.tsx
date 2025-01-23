import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { ProductListProps } from "../../../../../../utils/types";
import { ProductItem, ProductItemProps } from "@/components/ProductList/ProductItem";
import { ModalProductItem } from "./ModalProductItem";
import { Button } from "@/components/Buttons/Button";
import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

interface ModalProductListProps {
    isOpen: boolean
    onOpenChange: () => void
    products: ProductListProps[]
    chosenProducts: ProductItemProps[]
    addProduct: (id: string, name: string, price: number, qtd: number) => void;
    itemTitle: string;
}

export function ModalProductList({ isOpen, onOpenChange, products, chosenProducts, addProduct, itemTitle }: ModalProductListProps) {
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
            className="max-h-screen"
        >
            <ModalContent className="py-4 px-2">
                {
                    (onClose) => (
                        <>
                            <ModalHeader className="flex justify-between gap-4">
                                Adicionar {itemTitle}
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
                                            if (chosenProduct) console.log(product)
                                                
                                            return (
                                                <ModalProductItem
                                                    key={product.id}
                                                    product={product}
                                                    addProduct={addProduct}
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