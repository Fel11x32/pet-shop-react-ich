import type { FC, ReactNode } from 'react';
import styles from './InfoBlock.module.scss';

interface InfoBlockProps {
	title: string;
	children: ReactNode;
	className?: string;
}

export const InfoBlock: FC<InfoBlockProps> = ({
	title,
	children,
	className,
}) => {
	return (
		<div className={className}>
			<h4 className={styles.title}>{title}</h4>
			<div className={styles.info}>{children}</div>
		</div>
	);
};
