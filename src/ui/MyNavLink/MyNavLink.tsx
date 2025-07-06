import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MyNavLink.module.scss';

interface MyNavLinkProps {
	to: string;
	children: ReactNode;
}

const MyNavLink: FC<MyNavLinkProps> = ({ to, children }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? `${styles.link} ${styles.active}` : styles.link
			}
		>
			{children}
		</NavLink>
	);
};

export default MyNavLink;
