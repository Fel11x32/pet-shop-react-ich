import type { FC, ReactNode } from 'react';
import styles from './MyLargeButton.module.scss';

interface MyLargeButtonProps {
	children: ReactNode;
	type: 'button' | 'submit' | 'reset';
	onClick?: () => void;
}

const MyLargeButton: FC<MyLargeButtonProps> = ({ children, onClick, type }) => {
	return (
		<button type={type} onClick={onClick} className={styles.button}>
			{children}
		</button>
	);
};

export default MyLargeButton;
