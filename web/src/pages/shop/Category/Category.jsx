import React from 'react';
import { useRouteMatch } from 'react-router-dom';

function Category() {
	const {params: {name}} = useRouteMatch();

	return (
        <h1>{name}</h1>
	);
}

export default Category;
