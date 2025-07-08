import styles from './SocialIcons.module.scss';
import instagramImg from '../../assets/ic-instagram.svg';
import whatsappImg from '../../assets/ic-whatsapp.svg';

export const SocialIcons = () => (
	<div className={styles.iconWrap}>
		<a href="#" aria-label="Instagram">
			<img src={instagramImg} alt="Instagram icon" />
		</a>
		<a href="#" aria-label="WhatsApp">
			<img src={whatsappImg} alt="WhatsApp icon" />
		</a>
	</div>
);
