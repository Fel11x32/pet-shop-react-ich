import styles from './ContactSection.module.scss';
import { InfoBlock } from '../InfoBlock/InfoBlock';
import { SocialIcons } from '../SocialIcons/SocialIcons';

export const ContactSection = () => {
	return (
		<div className={styles.parent}>
			<InfoBlock title="Phone" className={styles.div1}>
				+49 30 915-88492
			</InfoBlock>
			<InfoBlock title="Socials" className={styles.div2}>
				<SocialIcons />
			</InfoBlock>
			<InfoBlock title="Address" className={styles.div3}>
				Wallstraẞe 9-13, 10179 Berlin, Deutschland
			</InfoBlock>
			<InfoBlock title="Working Hours" className={styles.div4}>
				24 hours a day
			</InfoBlock>
		</div>
	);
};
