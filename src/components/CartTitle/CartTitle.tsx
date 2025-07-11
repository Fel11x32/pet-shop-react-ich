import type { FC } from 'react';
import MyPreviewLink from '../../ui/MyPreviewLink/MyPreviewLink';
import styles from './CartTitle.module.scss'

interface CartTitleProps {
	title: string;
	linkText: string;
	linkTo: string;
}

const CartTitle: FC<CartTitleProps> = ({title, linkText, linkTo}) => {
	return (
		<div className={styles.title}>
			<h2>{title}</h2>
			<div className={styles.devider}></div>
			<MyPreviewLink to={linkTo}>{linkText}</MyPreviewLink>
		</div>
	);
};

export default CartTitle;
