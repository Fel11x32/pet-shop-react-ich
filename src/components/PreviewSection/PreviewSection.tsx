import React, { type FC } from 'react';
import styles from './PreviewSection.module.scss';
import { Link } from 'react-router-dom';

interface PreviewSectionProps {
	title: string;
	linkText: string;
	linkTo: string;
	children: React.ReactNode;
}

const PreviewSection: FC<PreviewSectionProps> = ({
	title,
	linkText,
	linkTo,
	children,
}) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>{title}</h2>
					<div className={styles.devider}></div>
					<Link className={styles.primaryLink} to={linkTo}>
						{linkText}
					</Link>
				</div>
				<ul className={styles.grid}>{children}</ul>
			</div>
		</section>
	);
};

export default PreviewSection;
