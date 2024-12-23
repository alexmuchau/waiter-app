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