import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks.ts';
import { useForm, type SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import styles from './Cart.module.scss';
import type { CartItem } from '../../store/cart/cartTypes.ts';
import {
	addToCart,
	removeFromCart,
	clearCart,
} from '../../store/cart/cartSlice.ts';
import CartTitle from '../CartTitle/CartTitle.tsx';
import { ROUTES } from '../../utils/routes.ts';
import MyButton from '../../ui/MyButton/MyButton.tsx';

interface OrderFormData {
	name: string;
	phone: string;
	email: string;
}

const Cart: React.FC = () => {
	const cartItems = useAppSelector(state => state.cart.items);
	const dispatch = useAppDispatch();

	const [modalOpen, setModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<OrderFormData>();

	const onSubmit: SubmitHandler<OrderFormData> = async data => {
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
			reset();
		} catch {
			setError('Ошибка при оформлении заказа. Попробуйте снова.');
		} finally {
			setLoading(false);
		}
	};

	const increaseQuantity = (item: CartItem) => {
		dispatch(addToCart({ ...item, quantity: 1 }));
	};

	const decreaseQuantity = (item: CartItem) => {
		if (item.quantity > 1) {
			dispatch(addToCart({ ...item, quantity: -1 })); // в addToCart нужно учесть возможность отрицательного изменения
		} else {
			dispatch(removeFromCart(item.id));
		}
	};

	const totalPrice = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

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
					<div className={styles.cart_items}>
						{cartItems.map(item => (
							<div key={item.id} className={styles.cart_card}>
								<img
									src={`http://localhost:3333${item.image}`}
									alt={item.title}
									className={styles.image}
								/>
								<div className={styles.details}>
									<h4>{item.title}</h4>
									<div className={styles.quantity_controls}>
										<button onClick={() => decreaseQuantity(item)}>-</button>
										<span>{item.quantity}</span>
										<button onClick={() => increaseQuantity(item)}>+</button>
										<p>
											$
											{(item.price * item.quantity)
												.toString()
												.replace(/\.00$/, '')}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className={styles.order_form}
						noValidate
					>
						<h3>Order details</h3>

						<p className={styles.total}>
							Total <span>${totalPrice.toFixed(2)}</span>{' '}
						</p>
						{errors.name && (
							<p className={styles.error}>{errors.name.message}</p>
						)}
						<input
							{...register('name', { required: 'Enter a name' })}
							type="text"
							placeholder="Name"
						/>

						{errors.phone && (
							<p className={styles.error}>{errors.phone.message}</p>
						)}
						<input
							{...register('phone', {
								required: 'Enter your phone number',
								pattern: {
									value: /^\+380\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
									message: 'Incorrect phone format',
								},
							})}
							type="tel"
							placeholder="Phone number"
						/>

						{errors.email && (
							<p className={styles.error}>{errors.email.message}</p>
						)}
						<input
							{...register('email', {
								required: 'Enter email',
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: 'Incorrect email format',
								},
							})}
							type="email"
							placeholder="Email"
						/>

						{error && <p className={styles.error}>{error}</p>}
						<MyButton type="submit" disabled={loading}>
							{loading ? 'Loading...' : 'Order'}
						</MyButton>
					</form>
				</div>

				{modalOpen && (
					<div
						className={styles.modal_overlay}
						onClick={() => setModalOpen(false)}
					>
						<div className={styles.modal} onClick={e => e.stopPropagation()}>
							<h3>Congratulations</h3>
							<p>
								Your order has been successfully placed on the website. A
								manager will contact you shortly to confirm your order.
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Cart;
