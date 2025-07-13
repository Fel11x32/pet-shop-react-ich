import { useState, type FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
	addToCart,
	removeFromCart,
	clearCart,
} from '../../store/cart/cartSlice.ts';
import CartTitle from '../CartTitle/CartTitle';
import CartList from '../CartList/CartList';
import CartForm, { type OrderFormData } from '../CartForm/CartForm';
import MyModal from '../../ui/MyModal/MyModal';
import { ROUTES } from '../../utils/routes';
import axios from 'axios';
import styles from './Cart.module.scss';
import type { CartItem } from '../../store/cart/cartTypes';

const Cart: FC = () => {
	const cartItems = useAppSelector(state => state.cart.items);
	const dispatch = useAppDispatch();

	const [modalOpen, setModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const totalPrice = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	const handleSubmit = async (data: OrderFormData) => {
		if (cartItems.length === 0) return;

		const orderData = {
			customer: data,
			items: cartItems.map(({ id, quantity }) => ({ id, quantity })),
		};

		try {
			setLoading(true);
			setError(null);
			await axios.post('http://localhost:3333/order/send', orderData);
			dispatch(clearCart());
			setModalOpen(true);
		} catch {
			setError('Ошибка при оформлении заказа. Попробуйте снова.');
		} finally {
			setLoading(false);
		}
	};

	const increase = (item: CartItem) =>
		dispatch(addToCart({ ...item, quantity: 1 }));
	const decrease = (item: CartItem) =>
		item.quantity > 1
			? dispatch(addToCart({ ...item, quantity: -1 }))
			: dispatch(removeFromCart(item.id));

	if (cartItems.length === 0 && !modalOpen) {
		return <p className={styles.empty}>Корзина пуста.</p>;
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				<CartTitle
					title="Shopping cart"
					linkText="Back to the store"
					linkTo={ROUTES.PRODUCTS}
				/>
				<div className={styles.content}>
					<CartList
						items={cartItems}
						onIncrease={increase}
						onDecrease={decrease}
					/>
					<CartForm
						totalPrice={totalPrice}
						onSubmit={handleSubmit}
						loading={loading}
						error={error}
					/>
				</div>
				{modalOpen && <MyModal onClose={() => setModalOpen(false)} />}
			</div>
		</section>
	);
};

export default Cart;
