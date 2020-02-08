import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import style from './Navigation.module.scss';

import routes from '../../../routes';

// TODO separate
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

function Navigation() {
    const { data } = useQuery(CATEGORIES_QUERY);

    // if (loading) {
    //     TODO loading component
    //     return (
    //         <h1>Loading...</h1>
    //     );
    // }
    
    return (
        <div className={style.navigation}>
            <div className="container d-flex">
                <div className={`${style.categoryHeader} d-flex justify-content-between`}>
                    Categories <i className="material-icons">menu</i>
                </div>

                {/* <ul>
                    {data.Categories.map( ({name}) => (
                        <li key={name}>
                            {name}
                        </li>
                    ) )}
                </ul> */}

                <ul className="d-flex align-items-center mb-0">
                    {Object.keys(routes).map( (route, index) => (
                        <li key={index}>
                            <Link to={routes[route].path}>{ route }</Link>
                        </li>
                    ) )}
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
