import type { FC } from "react";
import type { Product } from "../../store/products/productsTypes";
import MyProductCard from "../../ui/MyProductCard/MyProductCard";
import styles from './ProductsList.module.scss'

interface ProductsListProps {
	products: Product[]
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
	return (
		<ul className={styles.products}>
			{products.map(product => {
				const { id, image, title, price, discont_price } = product;
				const discountPercent = discont_price
					? Math.round(((price - discont_price) / price) * 100)
					: 0;

				return (
					<MyProductCard
						key={id}
						id={id}
						image={image}
						title={title}
						price={price}
						discountPrice={discont_price}
						discountPercent={discountPercent}
					/>
				);
			})}
		</ul>
	);
};

export default ProductsList