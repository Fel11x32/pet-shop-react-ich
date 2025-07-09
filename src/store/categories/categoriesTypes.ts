export interface Category {
	id: number;
	title: string;
	image: string;
}

export interface CategoriesState {
	data: Category[];
	loading: boolean;
	error: string | null;
}
