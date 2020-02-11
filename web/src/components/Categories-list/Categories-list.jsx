import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import convertToTree from '../../utils/convert-to-tree';
import Category from './Category/Category';

// TODO separate
const CATEGORIES_QUERY = gql`
  query categoriesQuery {
    Categories {
        id
        name
        parent {
            id
        }
    }
  }
`;

function CategoriesList() {
    const { data } = useQuery(CATEGORIES_QUERY);

    const categories = data 
        ? convertToTree(JSON.parse(JSON.stringify(data.Categories)))
        : null;

    return (
        <ul className="categories">
            {categories && categories.map( (category) => (
                <Category {...category} key={category.id} />
            ) )}
        </ul>
    );
}

export default CategoriesList;
