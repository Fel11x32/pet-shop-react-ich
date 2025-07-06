import type { FC, ReactNode } from 'react';
import styles from './MyLargeButton.module.scss';

interface MyLargeButtonProps {
	children: ReactNode;
	onClick: () => void;
}

const MyLargeButton: FC<MyLargeButtonProps> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={styles.button}>
			{children}
		</button>
	);
};

export default MyLargeButton;
