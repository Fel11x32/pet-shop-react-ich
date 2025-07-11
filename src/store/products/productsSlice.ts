import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ProductsState, Product } from './productsTypes';

const initialState: ProductsState = {
	data: [],
	currentProduct: null,
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

export const fetchProductById = createAsyncThunk<Product, number>(
	'products/fetchProductById',
	async id => {
		const response = await axios.get<Product[]>(
			`http://localhost:3333/products/${id}`,
		);
		return response.data[0];
	},
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			// Все продукты
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
			})

			// Продукт по ID
			.addCase(fetchProductById.pending, state => {
				state.loading = true;
				state.error = null;
				state.currentProduct = null;
			})
			.addCase(fetchProductById.fulfilled, (state, action) => {
				state.loading = false;
				state.currentProduct = action.payload;
			})
			.addCase(fetchProductById.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Ошибка загрузки продукта';
			});
	},
});

export default productsSlice.reducer;
