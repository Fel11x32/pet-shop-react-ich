import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './DiscountForm.module.scss';
import { discountFormSchema } from './validation.ts';
import { formatPhoneInput } from './utils.ts';
import MyInput from '../../ui/MyInput/MyInput';
import MyLargeButton from '../../ui/MyLargeButton/MyLargeButton';

interface FormData {
	name: string;
	phone: string;
	email: string;
}

const DiscountForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: { name: '', phone: '', email: '' },
		resolver: yupResolver(discountFormSchema),
	});

	const onSubmit = (data: FormData) => {
		console.log('Submit:', data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<MyInput
				placeholder="Name"
				register={register('name')}
				error={errors.name}
			/>
			<MyInput
				placeholder="Phone number"
				register={register('phone')}
				error={errors.phone}
				onChange={formatPhoneInput}
			/>
			<MyInput
				placeholder="Email"
				register={register('email')}
				error={errors.email}
			/>
			<MyLargeButton type="submit">Get a discount</MyLargeButton>
		</form>
	);
};

export default DiscountForm;
