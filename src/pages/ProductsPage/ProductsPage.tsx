import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { fetchProducts } from '../../store/products/productsSlice.ts';
import MyProductCard from '../../ui/MyProductCard/MyProductCard';

const ProductsPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const {
		data: products,
		loading,
		error,
	} = useAppSelector(state => state.products);

	const { id: categoryIdParam } = useParams(); // из /categories/:id

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const filteredProducts = categoryIdParam
		? products.filter(product => product.categoryId === Number(categoryIdParam))
		: products;

	return (
		<section>
			<h1>Products</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error && filteredProducts.length === 0 && (
				<p>No products found.</p>
			)}
			<ul
				style={{
					display: 'grid',
					gap: '16px',
					gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
				}}
			>
				{filteredProducts.map(product => (
					<MyProductCard
						key={product.id}
						id={product.id}
						image={product.image}
						title={product.title}
						price={product.price}
						discountPrice={product.discont_price}
						discountPercent={
							product.discont_price
								? Math.round(
										((product.price - product.discont_price) / product.price) *
											100,
									)
								: 0
						}
					/>
				))}
			</ul>
		</section>
	);
};

export default ProductsPage;
