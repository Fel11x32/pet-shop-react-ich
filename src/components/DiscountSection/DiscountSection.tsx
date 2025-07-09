import styles from './DiscountSection.module.scss';
import DiscountForm from '../DiscountForm/DiscountForm';

const DiscountSection = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.card}>
					<h2 className={styles.title}>5% off on the first order</h2>
					<div className={styles.form}>
						<DiscountForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default DiscountSection;
