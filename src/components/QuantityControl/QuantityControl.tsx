import type { FC } from 'react';
import styles from './QuantityControl.module.scss';

interface QuantityControlProps {
	quantity: number;
	setQuantity: (qty: number) => void;
	onAddToCart: () => void;
}

const QuantityControl: FC<QuantityControlProps> = ({
	quantity,
	setQuantity,
	onAddToCart,
}) => {
	return (
		<div className={styles.qty_control}>
			<button
				className={styles.qty_btn}
				onClick={() => setQuantity(Math.max(quantity - 1, 1))}
			>
				−
			</button>
			<span className={styles.qty_value}>{quantity}</span>
			<button
				className={styles.qty_btn}
				onClick={() => setQuantity(quantity + 1)}
			>
				+
			</button>
			<button className={styles.btn} onClick={onAddToCart}>
				Add to Cart
			</button>
		</div>
	);
};

export default QuantityControl;
