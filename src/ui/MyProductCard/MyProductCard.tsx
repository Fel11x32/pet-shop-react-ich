import { type FC } from 'react';
import styles from './MyProductCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

interface MyProductCardProps {
	id: number;
	image: string;
	title: string;
	discountPercent: number;
	discountPrice?: number;
	price: number;
}

const MyProductCard: FC<MyProductCardProps> = ({
	id,
	image,
	title,
	discountPercent,
	discountPrice,
	price,
}) => {
	const navigate = useNavigate();
	const hasDiscount = discountPercent > 0 && discountPrice;

	const handleCardClick = () => {
		navigate(`${ROUTES.PRODUCTS}/${id}`);
	};

	const handleButtonClick = (e: React.MouseEvent) => {
		e.stopPropagation(); // предотвратим переход при клике на кнопку
		// Пока без функционала
	};

	return (
		<li className={styles.item} onClick={handleCardClick}>
			<div className={styles.card}>
				<div className={styles.discountsWrapp}>
					<img
						className={styles.img}
						src={`http://localhost:3333${image}`}
						alt={title}
					/>
					{hasDiscount && (
						<div className={styles.discounts}>-{discountPercent}%</div>
					)}
					<button className={styles.cartButton} onClick={handleButtonClick}>
						Add to cart
					</button>
				</div>

				<div className={styles.content}>
					<h3 className={styles.title}>{title}</h3>
					<div className={styles.priceContainer}>
						<div className={styles.priceWrapp}>
							{hasDiscount ? (
								<>
									<span className={styles.price}>${discountPrice}</span>
									<span className={styles.originalPrice}>${price}</span>
								</>
							) : (
								<span className={styles.price}>${price}</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default MyProductCard;
