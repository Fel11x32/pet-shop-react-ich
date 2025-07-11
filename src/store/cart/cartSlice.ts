import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, CartState } from './cartTypes'; // ✅ теперь CartItem
// Product тип больше не нужен здесь

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<CartItem>) {
			// ✅ вот тут ключ
			const existing = state.items.find(item => item.id === action.payload.id);
			if (existing) {
				existing.quantity += action.payload.quantity;
			} else {
				state.items.push(action.payload);
			}
		},
		removeFromCart(state, action: PayloadAction<number>) {
			state.items = state.items.filter(item => item.id !== action.payload);
		},
		clearCart(state) {
			state.items = [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
