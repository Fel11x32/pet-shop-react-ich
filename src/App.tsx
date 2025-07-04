import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import DiscountPage from './pages/DiscountPage/DiscountPage'
import CartPage from './pages/CartPage/CartPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
	return (
		<>
			<Header />
			<main className='container'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/categories' element={<CategoriesPage />} />
					<Route path='/products' element={<ProductsPage />} />
					<Route path='/discount' element={<DiscountPage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
