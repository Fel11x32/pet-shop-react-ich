import type { FC } from 'react';
import styles from './MyCartLink.module.scss';
import { Link } from 'react-router-dom';

interface MyCartLinkProps {
	src: string;
}

const MyCartLink: FC<MyCartLinkProps> = ({ src }) => {
	return (
		<Link to="/cart" className={styles.cart}>
			<img src={src} alt="Cart Logo" />
			<div></div>
		</Link>
	);
};

export default MyCartLink;
