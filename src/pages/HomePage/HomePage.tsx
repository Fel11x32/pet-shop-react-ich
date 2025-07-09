import Categories from '../../components/CategoryPreview/CategoryPreview';
import DiscountSection from '../../components/DiscountSection/DiscountSection';
import Hero from '../../components/Hero/Hero';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Categories />
			<DiscountSection />
		</>
	);
};

export default HomePage;
