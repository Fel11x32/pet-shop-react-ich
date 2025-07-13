import type { FC } from 'react';
import type { CartItem } from '../../store/cart/cartTypes';
import CartItemCard from '../CartItemCard/CartItemCard';
import styles from './CartList.module.scss';

interface Props {
	items: CartItem[];
	onIncrease: (item: CartItem) => void;
	onDecrease: (item: CartItem) => void;
}

const CartList: FC<Props> = ({ items, onIncrease, onDecrease }) => (
	<div className={styles.list}>
		{items.map(item => (
			<CartItemCard
				key={item.id}
				item={item}
				onIncrease={onIncrease}
				onDecrease={onDecrease}
			/>
		))}
	</div>
);

export default CartList;
