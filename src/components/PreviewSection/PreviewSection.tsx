import { type FC, type ReactNode } from 'react';
import styles from './PreviewSection.module.scss';
import MyPreviewLink from '../../ui/MyPreviewLink/MyPreviewLink';

interface PreviewSectionProps {
	title: string;
	linkText: string;
	linkTo: string;
	showLinkBlock?: boolean;
	children: ReactNode;
}

const PreviewSection: FC<PreviewSectionProps> = ({
	title,
	linkText,
	linkTo,
	showLinkBlock = true,
	children,
}) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>{title}</h2>
					{showLinkBlock !== false && (
						<>
							<div className={styles.devider}></div>
							<MyPreviewLink to={linkTo}>{linkText}</MyPreviewLink>
						</>
					)}
				</div>
				<ul className={styles.grid}>{children}</ul>
			</div>
		</section>
	);
};

export default PreviewSection;
