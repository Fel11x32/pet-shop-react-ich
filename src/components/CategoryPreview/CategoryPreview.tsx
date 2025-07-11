import { useEffect, type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { fetchCategories } from '../../store/categories/categoriesSlice.ts';
import { ROUTES } from '../../utils/routes.ts';
import CategoryCard from '../../ui/MyCategoryCard/MyCategoryCard.tsx';
import PreviewSection from '../PreviewSection/PreviewSection';

interface CategoryPreviewProps {
	slice: number;
	showLinkBlock?: boolean;
}

const CategoryPreview: FC<CategoryPreviewProps> = ({
	slice,
	showLinkBlock,
}) => {
	const dispatch = useAppDispatch();
	const {
		data: categories,
		loading,
		error,
	} = useAppSelector(state => state.categories);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	const displayedCategories = categories.slice(0, slice);

	return (
		<PreviewSection
			title="Categories"
			linkText="All categories"
			linkTo={ROUTES.CATEGORIES}
			showLinkBlock={showLinkBlock}
		>
			{loading && <p>Загрузка...</p>}
			{error && <p>Ошибка: {error}</p>}
			{!loading &&
				!error &&
				displayedCategories.map(category => (
					<CategoryCard
						key={category.id}
						id={category.id}
						title={category.title}
						image={category.image}
					/>
				))}
		</PreviewSection>
	);
};

export default CategoryPreview;
