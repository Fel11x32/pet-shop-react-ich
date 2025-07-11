import type { ChangeEvent, FC } from 'react';
import styles from './MySortInput.module.scss';

interface MySortInputProps {
	type?: string;
	placeholder: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MySortInput: FC<MySortInputProps> = ({
	type,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<input
			className={styles.input}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default MySortInput;
