import MyButton from '../../ui/MyButton/MyButton';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Amazing Discounts <br /> on Pets Products!
				</h1>
				<MyButton>Check out</MyButton>
			</div>
		</section>
	);
};

export default Hero;
