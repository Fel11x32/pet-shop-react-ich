import styles from './MapEmbed.module.scss';

export const MapEmbed = () => (
	<div className={styles.mapContainer}>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.2269577847637!2d13.400717576164812!3d52.5112316368793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27dade5561%3A0x2454d91ffab308fa!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1suk!2sde!4v1751617090706!5m2!1suk!2sde"
			width="100%"
			height="450"
			style={{ border: 0 }}
			allowFullScreen
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
			title="Our Location - Wallstraße 9-13, Berlin"
			aria-label="Google Maps with our location marked"
			importance="low"
		></iframe>
	</div>
);
