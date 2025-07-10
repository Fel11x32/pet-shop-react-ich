import { useState, useMemo, type FC } from 'react';
import type { Product } from '../../store/products/productsTypes';
import ProductsList from '../ProductsList/ProductsList';
import ProductsFilters from '../ProductsFilters/ProductsFilters';
import styles from './ProductsSection.module.scss';
import { sortProducts } from '../../utils/sortProducts';

interface ProductsSectionProps {
	products: Product[];
	loading: boolean;
	error: string | null;
	title: string;
	showDiscountToggle?: boolean;
}

const ProductsSection: FC<ProductsSectionProps> = ({
	products,
	loading,
	error,
	title,
	showDiscountToggle,
}) => {
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [discountOnly, setDiscountOnly] = useState(false);
	const [sort, setSort] = useState('default');

	const filteredAndSorted = useMemo(() => {
		let result = [...products];

		if (minPrice) {
			result = result.filter(p => p.price >= Number(minPrice));
		}
		if (maxPrice) {
			result = result.filter(p => p.price <= Number(maxPrice));
		}
		if (discountOnly) {
			result = result.filter(p => p.discont_price != null);
		}

		result = sortProducts(result, sort);
		return result;
	}, [products, minPrice, maxPrice, discountOnly, sort]);

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>{title}</h2>

				<ProductsFilters
					minPrice={minPrice}
					maxPrice={maxPrice}
					sort={sort}
					discountOnly={discountOnly}
					onMinPriceChange={setMinPrice}
					onMaxPriceChange={setMaxPrice}
					onSortChange={setSort}
					onDiscountToggle={setDiscountOnly}
					showDiscountToggle={showDiscountToggle}
				/>

				{loading && <p>Loading...</p>}
				{error && <p>Error: {error}</p>}
				{!loading && !error && filteredAndSorted.length === 0 && (
					<p>No products found.</p>
				)}

				<ProductsList products={filteredAndSorted} />
			</div>
		</section>
	);
};

export default ProductsSection;
