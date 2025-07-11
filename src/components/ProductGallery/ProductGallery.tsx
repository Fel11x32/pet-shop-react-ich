import type { FC } from 'react';
import styles from './ProductGallery.module.scss';

interface ProductGalleryProps {
	image: string;
	title: string;
}

const ProductGallery: FC<ProductGalleryProps> = ({ image, title }) => {
	const url = `http://localhost:3333${image}`;
	return (
		<div className={styles.galleryWrapper}>
			<div className={styles.thumbnailColumn}>
				{[...Array(3)].map((_, i) => (
					<div key={i} className={styles.thumbnail}>
						<img src={url} alt={`${title} ${i + 1}`} />
					</div>
				))}
			</div>
			<div className={styles.mainImage}>
				<img src={url} alt={title} />
			</div>
		</div>
	);
};

export default ProductGallery;
