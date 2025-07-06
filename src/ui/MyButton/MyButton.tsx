import type { FC } from 'react';
import styles from './MyButton.module.scss';

interface MyButtonProps {
	onClick?: () => void;
	children: React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({ children, onClick }) => {
	return (
		<button className={styles.myButton} onClick={onClick}>
			{children}
		</button>
	);
};

export default MyButton;
