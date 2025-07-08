import type { FC, ReactNode } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const navLinks = [
		{ to: '/', label: 'Main Page' },
		{ to: '/categories', label: 'Categories' },
		{ to: '/products', label: 'All products' },
		{ to: '/discount', label: 'All sales' },
	];

	return (
		<>
			<Header navLinks={navLinks} />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
