import { useState, type FC } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/cart/cartSlice';
import { useProduct } from '../../utils/hooks/useProduct.ts';
import ProductGallery from '../ProductGallery/ProductGallery';
import PriceBlock from '../PriceBlock/PriceBlock';
import QuantityControl from '../QuantityControl/QuantityControl';
import ProductDescription from '../ProductDescription/ProductDescription';
import styles from './ProductById.module.scss';

const ProductById: FC = () => {
	const { currentProduct, loading } = useProduct();
	const dispatch = useAppDispatch();
	const [quantity, setQuantity] = useState(1);

	if (loading) return <p className={styles.loading}>Loading...</p>;
	if (!currentProduct) return <p className={styles.error}>Product not found</p>;

	const handleAddToCart = () => {
		dispatch(addToCart({ ...currentProduct, quantity }));
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<ProductGallery
					image={currentProduct.image}
					title={currentProduct.title}
				/>
				<div className={styles.info}>
					<h2 className={styles.title}>{currentProduct.title}</h2>

					<PriceBlock
						price={currentProduct.price}
						discountPrice={currentProduct.discont_price}
					/>

					<QuantityControl
						quantity={quantity}
						setQuantity={setQuantity}
						onAddToCart={handleAddToCart}
					/>
					<ProductDescription description={currentProduct.description} />
				</div>
			</div>
		</div>
	);
};

export default ProductById;
