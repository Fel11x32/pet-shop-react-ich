export interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	discont_price?: number;
	image: string;
	categoryId: number;
}

export interface ProductsState {
	data: Product[];
	currentProduct: Product | null; // ⬅️ добавляем это
	loading: boolean;
	error: string | null;
}
