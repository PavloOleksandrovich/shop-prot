import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useRouteMatch } from 'react-router-dom';

import ProductList from '../../../components/Product-list/Product-list';

// TODO separate
const CATEGORY_QUERY = gql`
  query categoryQuery($name: String) {
    Category (name: $name) {
		products {
			id
			name
		}
    }
  }
`;

function Category() {
	const {params: {name}} = useRouteMatch();

	// TODO check if category doenst exist
	const { data } = useQuery(CATEGORY_QUERY, {
		variables: {
			name
		}
	});

	return (
		<div className="container">
			{data && <ProductList products={data.Category.products} />}
		</div>
	);
}

export default Category;
