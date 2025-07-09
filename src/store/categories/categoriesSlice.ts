import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { CategoriesState, Category } from './categoriesTypes';

const initialState: CategoriesState = {
	data: [],
	loading: false,
	error: null,
};

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async () => {
		const response = await axios.get<Category[]>(
			'http://localhost:3333/categories/all',
		);
		return response.data;
	},
);

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCategories.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Ошибка загрузки';
			});
	},
});

export default categoriesSlice.reducer;
