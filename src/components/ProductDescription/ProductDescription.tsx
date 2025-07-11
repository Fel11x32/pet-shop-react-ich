import type { FC } from 'react';
import styles from './ProductDescription.module.scss';

interface ProductDescriptionProps {
	description: string;
}

const ProductDescription: FC<ProductDescriptionProps> = ({ description }) => (
	<div className={styles.descriptionBlock}>
		<span className={styles.descriptionTitle}>Description</span>
		<p className={styles.description}>{description}</p>
	</div>
);

export default ProductDescription;
