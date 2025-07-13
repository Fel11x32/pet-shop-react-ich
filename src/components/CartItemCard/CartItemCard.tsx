import type { FC } from 'react';
import type { CartItem } from '../../store/cart/cartTypes';
import styles from './CartItemCard.module.scss';

interface Props {
	item: CartItem;
	onIncrease: (item: CartItem) => void;
	onDecrease: (item: CartItem) => void;
}

const CartItemCard: FC<Props> = ({ item, onIncrease, onDecrease }) => (
	<div className={styles.card}>
		<img
			src={`http://localhost:3333${item.image}`}
			alt={item.title}
			className={styles.image}
		/>
		<div className={styles.details}>
			<h4>{item.title}</h4>
			<div className={styles.controls}>
				<button onClick={() => onDecrease(item)}>-</button>
				<span>{item.quantity}</span>
				<button onClick={() => onIncrease(item)}>+</button>
				<p>${(item.price * item.quantity).toFixed(2).replace(/\.00$/, '')}</p>
			</div>
		</div>
	</div>
);

export default CartItemCard;
