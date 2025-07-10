import { type FC } from 'react';
import MySortInput from '../../ui/MySortInput/MySortInput';
import styles from './ProductsFilter.module.scss';

interface ProductsFiltersProps {
	minPrice: string;
	maxPrice: string;
	sort: string;
	discountOnly: boolean;
	onMinPriceChange: (value: string) => void;
	onMaxPriceChange: (value: string) => void;
	onSortChange: (value: string) => void;
	onDiscountToggle: (value: boolean) => void;
	showDiscountToggle?: boolean; // <- вот это добавь
}

const ProductsFilters: FC<ProductsFiltersProps> = ({
	minPrice,
	maxPrice,
	sort,
	discountOnly,
	onMinPriceChange,
	onMaxPriceChange,
	onSortChange,
	onDiscountToggle,
	showDiscountToggle = true,
}) => {
	return (
		<div className={styles.filter}>
			<label className={styles.item}>
				Price:
				<MySortInput
					type="number"
					placeholder="from"
					value={minPrice}
					onChange={e => onMinPriceChange(e.target.value)}
				/>
				<MySortInput
					type="number"
					placeholder="to"
					value={maxPrice}
					onChange={e => onMaxPriceChange(e.target.value)}
				/>
			</label>

			{showDiscountToggle && (
				<label className={styles.item}>
					Discounted items:
					<input
						type="checkbox"
						checked={discountOnly}
						onChange={e => onDiscountToggle(e.target.checked)}
					/>
				</label>
			)}

			<label className={styles.item}>
				Sorted:
				<select value={sort} onChange={e => onSortChange(e.target.value)}>
					<option value="default">by default</option>
					<option value="price-asc">price ↑</option>
					<option value="price-desc">price ↓</option>
					<option value="title-asc">A → Z</option>
					<option value="title-desc">Z → A</option>
				</select>
			</label>
		</div>
	);
};

export default ProductsFilters;
