import styles from './Footer.module.scss';
import { ContactSection } from '../ContactSection/ContactSection';
import { MapEmbed } from '../MapEmbed/MapEmbed';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<h2 className={styles.secondTitle}>Contact</h2>
				<ContactSection />
				<MapEmbed />
			</div>
		</footer>
	);
};

export default Footer;
