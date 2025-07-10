import { useEffect, type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProducts } from '../../store/products/productsSlice';
import ProductsSection from '../../components/ProductsSection/ProductsSection';

const Discount: FC = () => {
	const dispatch = useAppDispatch();
	const {
		data: products,
		loading,
		error,
	} = useAppSelector(state => state.products);

	useEffect(() => {
		if (products.length === 0) {
			dispatch(fetchProducts());
		}
	}, [dispatch, products.length]);

	const discountedProducts = products.filter(
		product => product.discont_price != null,
	);

	return (
		<ProductsSection
			products={discountedProducts}
			loading={loading}
			error={error}
			title="Discounted Products"
			showDiscountToggle={false}
		/>
	);
};

export default Discount;
