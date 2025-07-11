import { type FC } from 'react';
import styles from './MyInput.module.scss';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
	placeholder: string;
	register?: UseFormRegisterReturn;
	error?: FieldError;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: FC<Props> = ({ placeholder, register, error, onChange }) => {
	return (
		<>
			{error?.message && <p className={styles.errors}>{error.message}</p>}
			<input
				{...register}
				placeholder={placeholder}
				onChange={onChange}
				className={styles.input}
			/>
		</>
	);
};

export default MyInput;
