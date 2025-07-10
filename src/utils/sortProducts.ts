import type { Product } from '../store/products/productsTypes';

export const sortProducts = (products: Product[], sort: string): Product[] => {
	switch (sort) {
		case 'price-asc':
			return [...products].sort(
				(a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price),
			);
		case 'price-desc':
			return [...products].sort(
				(a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price),
			);
		case 'title-asc':
			return [...products].sort((a, b) => a.title.localeCompare(b.title));
		case 'title-desc':
			return [...products].sort((a, b) => b.title.localeCompare(a.title));
		default:
			return products;
	}
};
