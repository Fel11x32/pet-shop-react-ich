import MyLogo from '../../ui/MyLogo/MyLogo';
import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';
import type { FC } from 'react';
import MyNavLink from '../../ui/MyNavLink/MyNavLink';
import MyCartLink from '../../ui/MyCartLink/MyCartLink';
import basket from '../../assets/basket-empty.svg';

interface HeaderProps {
	navLinks: { to: string; label: string }[];
}

const Header: FC<HeaderProps> = ({ navLinks }) => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<MyLogo src={logo} />
				<ul className={styles.menu}>
					{navLinks.map(({ to, label }) => (
						<li key={to}>
							<MyNavLink to={to}>{label}</MyNavLink>
						</li>
					))}
				</ul>
				<MyCartLink src={basket} />
			</nav>
		</header>
	);
};

export default Header;
