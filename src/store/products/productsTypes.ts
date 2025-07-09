export interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	discont_price?: number;
	image: string;
}

export interface ProductsState {
	data: Product[];
	loading: boolean;
	error: string | null;
}
