import type { FC } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './CartForm.module.scss';
import MyButton from '../../ui/MyButton/MyButton';

interface Props {
	totalPrice: number;
	onSubmit: SubmitHandler<OrderFormData>;
	loading: boolean;
	error?: string | null;
}

export interface OrderFormData {
	name: string;
	phone: string;
	email: string;
}

const CartForm: FC<Props> = ({ totalPrice, onSubmit, loading, error }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<OrderFormData>();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
			<h3>Order details</h3>
			<p className={styles.total}>
				Total <span>${totalPrice.toFixed(2)}</span>
			</p>

			{errors.name && <p className={styles.error}>{errors.name.message}</p>}
			<input
				{...register('name', { required: 'Enter a name' })}
				placeholder="Name"
			/>

			{errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
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

			{errors.email && <p className={styles.error}>{errors.email.message}</p>}
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
	);
};

export default CartForm;
