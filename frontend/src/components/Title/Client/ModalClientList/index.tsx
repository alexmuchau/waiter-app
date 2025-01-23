import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { ProductItem, ProductItemProps } from "@/components/ProductList/ProductItem";
import { ModalClientItem } from "./ModalClientItem";
import { Button } from "@/components/Buttons/Button";
import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { ClientProps } from "../../../../../../utils/types";

interface ModalClientListProps {
    isOpen: boolean
    onOpenChange: () => void
    selectedClient: ClientProps | undefined,
    clients: ClientProps[]
    addClient: (id: string) => void
}

export function ModalClientList({ isOpen, onOpenChange, selectedClient, clients, addClient }: ModalClientListProps) {
    const [ clientsList, setClientsList ] = useState<ClientProps[]>(clients)
    
    function filterClients(e: React.ChangeEvent<HTMLInputElement>) {
        const filteredClients = clientsList.filter((client) => client.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setClientsList(filteredClients)
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
                                Adicionar Cliente
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    type="text"
                                    variant="underlined"
                                    onChange={filterClients}
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
                                        clientsList.map((client) => 
                                            <ModalClientItem
                                                key={client.id}
                                                client={client}
                                                addClient={addClient}
                                                isSelected={selectedClient?.id === client.id}
                                            />
                                        )
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