import React from 'react';
import Product from './Product/Product';

function ProductList() {
	const products = new Array(10).fill(null);

	return (
		<div className="row">
			{products.map(product => {
				return (
					<div className="col-md-4">
						<Product />
					</div>
				);
			})}
		</div>
	);
}

export default ProductList;
