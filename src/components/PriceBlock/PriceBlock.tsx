import type { FC } from 'react';
import styles from './PriceBlock.module.scss';

interface PriceBlockProps {
	price: number;
	discountPrice?: number;
}

const PriceBlock: FC<PriceBlockProps> = ({ price, discountPrice }) => {
	if (!discountPrice || discountPrice >= price) {
		return <span className={styles.normal_price}>${price}</span>;
	}

	const discount = Math.round(((price - discountPrice) / price) * 100);

	return (
		<div className={styles.price_block}>
			<span className={styles.new_price}>${discountPrice}</span>
			<span className={styles.old_price}>${price}</span>
			<span className={styles.discount}>-{discount}%</span>
		</div>
	);
};

export default PriceBlock;
