import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product/Product';

function ProductList({products}) {
	return (
		<div className="row">
			{products.map(product => {
				return (
					<div className="col-md-4" key={product.id}>
						<Product {...product} />
					</div>
				);
			})}
		</div>
	);
}

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string
	}))
};

ProductList.defaultProps = {
	products: []
};

export default ProductList;
