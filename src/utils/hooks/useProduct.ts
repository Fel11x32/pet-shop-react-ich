import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProductById } from '../../store/products/productsSlice';

export function useProduct() {
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const { currentProduct, loading } = useAppSelector(state => state.products);

	useEffect(() => {
		if (id) dispatch(fetchProductById(Number(id)));
	}, [id, dispatch]);

	return { currentProduct, loading };
}
