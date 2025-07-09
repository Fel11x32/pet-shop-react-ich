export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	salePrice?: number;
	image: string;
}

export interface ProductsState {
	data: Product[];
	loading: boolean;
	error: string | null;
}
