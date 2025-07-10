import { useEffect, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProducts } from '../../store/products/productsSlice';
import { fetchCategories } from '../../store/categories/categoriesSlice';
import ProductsSection from '../../components/ProductsSection/ProductsSection';

const Products: FC = () => {
	const dispatch = useAppDispatch();
	const {
		data: products,
		loading,
		error,
	} = useAppSelector(state => state.products);
	const { data: categories, loading: categoriesLoading } = useAppSelector(
		state => state.categories,
	);
	const { id: categoryIdParam } = useParams();

	const categoryId = categoryIdParam ? Number(categoryIdParam) : null;

	useEffect(() => {
		if (products.length === 0) dispatch(fetchProducts());
		if (categories.length === 0) dispatch(fetchCategories());
	}, [dispatch, products.length, categories.length]);

	const filteredProducts = categoryId
		? products.filter(product => product.categoryId === categoryId)
		: products;

	const categoryTitle = categoryId
		? categories.find(cat => cat.id === categoryId)?.title
		: null;

	const title =
		categoryId && categoryTitle
			? categoryTitle
			: categoryId && categoriesLoading
				? 'Loading category...'
				: 'All Products';

	return (
		<ProductsSection
			products={filteredProducts}
			loading={loading}
			error={error}
			title={title}
		/>
	);
};

export default Products;
