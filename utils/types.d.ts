export interface OrderProps {
    board: number;
    command: number;
    items: OrderItemProps[]; 
}

export interface OrderItemProps {
    id_product: number;
    quantity: number;
}

export interface User {
    id: string,
    name: string
}

export interface CommandItemProps {
    id: string,
    description: string,
    commandNumber: string,
    isActive: boolean,
    table?: TableItemProps,
}

export interface TableItemProps {
    id: string,
    description: string,
    tableNumber: string,
    isActive: boolean
}

export interface ClientProps {
    id: string,
    name: string,
    command: CommandItemProps
}

export interface ActiveTableItemProps {
    tableNumber: string,
    tableDescription: string,
    commands: {
        commandNumber: string,
        clientName?: string
    }[]
}


export interface ProductListProps {
    id: string,
    name: string,
    price: number
}

export interface CategoryGroupedProductProps {
    [category: string]: ProductListProps[]
}