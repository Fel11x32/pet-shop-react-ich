import type { Product } from '../products/productsTypes';

export interface CartItem extends Product {
	quantity: number;
}

export interface CartState {
	items: CartItem[];
}
