import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const CATEGORIES_QUERY = gql`
  {
    Categories {
        name
        description
        createdAt
        updatedAt
    }
  }
`;

function Categories() {
    const { loading, data } = useQuery(CATEGORIES_QUERY);

    if (loading) {
        // TODO loading component
        return (
            <h1>Loading</h1>
        );
    }

    return (
        <ul>
            {data.Categories.map( ({name}) => (
                <li key={name}>
                    {name}
                </li>
            ) )}
        </ul>
    );
}

export default Categories;
