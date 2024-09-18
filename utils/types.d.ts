export interface OrderProps {
    table: number;
    command: number;
    items: OrderItemProps[]; 
}

export interface OrderItemProps {
    id_product: number;
    quantity: number;
}