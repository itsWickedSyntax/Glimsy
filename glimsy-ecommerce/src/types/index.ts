export interface Product {
    id: number;
    name: string;
    weight: string;
    moodDescription: string;
    price: number;
    imageUrl: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalAmount: number;
}