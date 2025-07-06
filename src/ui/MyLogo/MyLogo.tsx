import type { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './MyLogo.module.scss';

interface MyLogoProps {
	src: string;
	width?: number;
	height?: number;
}

const MyLogo: FC<MyLogoProps> = ({ src, width = 70, height = 70 }) => {
	return (
		<Link to="/" className={styles.logo}>
			<img src={src} alt="Logo" width={width} height={height} />
		</Link>
	);
};

export default MyLogo;
