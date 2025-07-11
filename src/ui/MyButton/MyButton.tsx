import type { FC } from 'react';
import styles from './MyButton.module.scss';

interface MyButtonProps {
	type: 'submit' | 'reset' | 'button';
	onClick?: () => void;
	children: React.ReactNode;
	disabled?: boolean;
}

const MyButton: FC<MyButtonProps> = ({ type, children, onClick, disabled }) => {
	return (
		<button disabled={disabled} type={type} className={styles.myButton} onClick={onClick}>
			{children}
		</button>
	);
};

export default MyButton;
