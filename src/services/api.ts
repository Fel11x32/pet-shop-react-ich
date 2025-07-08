import axios from 'axios';

// Типы данных — уточни структуру позже или замени на реальные
export interface Category {
	id: number;
	name: string;
	// другие поля, если есть
}

export interface Product {
	id: number;
	name: string;
	categoryId: number;
	price: number;
	// другие поля, если есть
}

// Экземпляр axios
export const petInstance = axios.create({
	baseURL: 'http://localhost:3333',
});

// Получение всех категорий
export const requeestCategoryAll = async (): Promise<Category[]> => {
	const { data } = await petInstance.get<Category[]>('/categories/all');
	return data;
};

// Получение категории по ID
export const requeestCategoryById = async (
	categoryId: number,
): Promise<{ category: Category }> => {
	const { data } = await petInstance.get<{ category: Category }>(
		`/categories/${categoryId}`,
	);
	return data;
};

// Получение всех продуктов
export const requeestProductsAll = async (): Promise<Product[]> => {
	const { data } = await petInstance.get<Product[]>('/products/all');
	return data;
};

// Получение одного продукта по ID
export const requeestProductById = async (
	productId: number,
): Promise<Product> => {
	const { data } = await petInstance.get<Product>(`/products/${productId}`);
	return data;
};

// Пример: оформление заказа (тип можно доработать)
export interface OrderPayload {
	// укажи поля, например:
	name: string;
	products: { id: number; quantity: number }[];
}

export const sendOrder = async (payload: OrderPayload): Promise<void> => {
	await petInstance.post('/order/send', payload);
};

// Пример: оформление купона
export interface SaleRequestPayload {
	email: string;
}

export const sendSaleRequest = async (
	payload: SaleRequestPayload,
): Promise<void> => {
	await petInstance.post('/sale/send', payload);
};
