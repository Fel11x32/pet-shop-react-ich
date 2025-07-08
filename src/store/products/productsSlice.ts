import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	salePrice?: number;
	image: string;
}

interface ProductsState {
	data: Product[];
	loading: boolean;
	error: string | null;
}

const initialState: ProductsState = {
	data: [],
	loading: false,
	error: null,
};

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await axios.get<Product[]>(
			'http://localhost:3333/products/all',
		);
		return response.data;
	},
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchProducts.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Ошибка загрузки';
			});
	},
});

export default productsSlice.reducer;
