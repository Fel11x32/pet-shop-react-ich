import { Link } from 'react-router-dom';
import styles from './MyCategoryCard.module.scss';
import { ROUTES } from '../../routes/routes.ts';
import type { FC } from 'react';

interface MyCategoryCardProps {
	id: number;
	title: string;
	image: string;
}

const MyCategoryCard: FC<MyCategoryCardProps> = ({ id, title, image }) => {
	return (
		<li className={styles.item}>
			<Link className={styles.link} to={`${ROUTES.CATEGORIES}/${id}`}>
				<img
					className={styles.image}
					src={`http://localhost:3333${image}`}
					alt={title}
				/>
				<h3 className={styles.title}>{title}</h3>
			</Link>
		</li>
	);
};

export default MyCategoryCard;
