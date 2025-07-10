import PreviewSection from '../PreviewSection/PreviewSection';
import { ROUTES } from '../../utils/routes.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products/productsSlice.ts';
import MyProductCard from '../../ui/MyProductCard/MyProductCard.tsx';

const DiscountPreview = () => {
	const dispatch = useAppDispatch();
	const {
		data: products,
		loading,
		error,
	} = useAppSelector(state => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const discountedProducts = products
		.filter(p => p.discont_price != null)
		.slice(0, 4);

	return (
		<PreviewSection title="Sale" linkText="All sales" linkTo={ROUTES.DISCOUNT}>
			{loading && <p>Загрузка...</p>}
			{error && <p>Error: {error}</p>}

			{!loading &&
				!error &&
				discountedProducts.map(product => (
					<MyProductCard
						key={product.id}
						id={product.id}
						image={product.image}
						title={product.title}
						discountPercent={
							product.discont_price
								? Math.round(
										((product.price - product.discont_price) / product.price) *
											100,
									)
								: 0
						}
						discountPrice={product.discont_price}
						price={product.price}
					/>
				))}
		</PreviewSection>
	);
};

export default DiscountPreview;
