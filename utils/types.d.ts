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
    login: string,
    password: string,
    name: string
}

export interface CommandItemProps {
    commandNumber: string,
    tableNumber?: string,
    isActive: boolean,
}

export interface TableItemProps {
    tableNumber: string,
    tableDescription: string,
    isActive: boolean
}

export interface ActiveTableItemProps {
    tableNumber: string,
    tableDescription: string,
    commands: {
        commandNumber: string,
        clientName?: string
    }[]
}

export interface ClientProps {
    id: string,
    name: string
}

export interface ProductListProps {
    id: string,
    name: string,
    price: number
  }