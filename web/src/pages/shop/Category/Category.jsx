import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import ProductList from '../../../components/Product-list/Product-list';

function Category() {
	const {params: {name}} = useRouteMatch();

	return (
		<div className="container">
			<ProductList />
		</div>
	);
}

export default Category;
