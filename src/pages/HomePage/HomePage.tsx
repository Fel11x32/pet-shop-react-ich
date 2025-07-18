import Categories from '../../components/CategoryPreview/CategoryPreview';
import DiscountFormSection from '../../components/DiscountFormSection/DiscountFormSection';
import DiscountPreview from '../../components/DiscountPreview/DiscountPreview';
import Hero from '../../components/Hero/Hero';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Categories slice={4} />
			<DiscountFormSection />
			<DiscountPreview />
		</>
	);
};

export default HomePage;
