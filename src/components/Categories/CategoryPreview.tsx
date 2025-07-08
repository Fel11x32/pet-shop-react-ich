import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { fetchCategories } from '../../store/categories/categoriesSlice.ts';
import { Link } from 'react-router-dom';
import styles from './CategoryPreview.module.scss';

const CategoryPreview: React.FC = () => {
	const dispatch = useAppDispatch();
	const {
		data: categories,
		loading,
		error,
	} = useAppSelector(state => state.categories);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	if (loading) return <p>Загрузка...</p>;
	if (error) return <p>Ошибка: {error}</p>;

	// Показываем только первые 4 категории
	const firstFour = categories.slice(0, 4);

	return (
		<section className={styles.categories}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>Categories</h2>
					<div className={styles.devider}></div>
					<Link className={styles.primaryLink} to={'/categories'}>
						All categories
					</Link>
				</div>
				<ul className={styles.list}>
					{firstFour.map(category => (
						<li className={styles.item} key={category.id}>
							<Link
								className={styles.linkToCategori}
								to={`/categories/${category.id}`}
							>
								<img
									className={styles.img}
									src={`http://localhost:3333/${category.image}`}
									alt={category.title}
									width="100"
								/>
								<h3 className={styles.secondTitle}>{category.title}</h3>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default CategoryPreview;
