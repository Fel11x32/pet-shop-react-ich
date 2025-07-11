import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import DiscountPage from './pages/DiscountPage/DiscountPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainLayout from './layouts/MainLayout';
import ProductById from './components/ProductById/ProductById';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<HomePage />
						</MainLayout>
					}
				/>
				<Route
					path="/categories"
					element={
						<MainLayout>
							<CategoriesPage />
						</MainLayout>
					}
				/>
				<Route
					path="/categories/:id"
					element={
						<MainLayout>
							<ProductsPage />
						</MainLayout>
					}
				/>
				<Route
					path="/products"
					element={
						<MainLayout>
							<ProductsPage />
						</MainLayout>
					}
				/>
				<Route
					path="/products/:id"
					element={
						<MainLayout>
							<ProductById />
						</MainLayout>
					}
				/>
				<Route
					path="/discount"
					element={
						<MainLayout>
							<DiscountPage />
						</MainLayout>
					}
				/>
				<Route
					path="/cart"
					element={
						<MainLayout>
							<CartPage />
						</MainLayout>
					}
				/>
				<Route
					path="*"
					element={
						<MainLayout>
							<NotFoundPage />
						</MainLayout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
