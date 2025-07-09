import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './MyPreviewLink.module.scss';

interface MyPreviewLinkProps {
	to: string;
	children: ReactNode;
}

const MyPreviewLink: FC<MyPreviewLinkProps> = ({ to, children }) => {
	return (
		<Link className={styles.link} to={to}>
			{children}
		</Link>
	);
};

export default MyPreviewLink;
