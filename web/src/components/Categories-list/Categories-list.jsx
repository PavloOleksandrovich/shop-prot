import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import style from './Categories-list.module.scss';

// TODO separate
const CATEGORIES_QUERY = gql`
  query categoriesQuery {
    Categories {
        name
    }
  }
`;

function CategoriesList({isOpenable, isOpened}) {
    const { data } = useQuery(CATEGORIES_QUERY);

    let className = `${style.categories}`;
    
    if (isOpenable) {
        className += isOpened 
            ? ` ${style.isOpened} ${style.showOnClick} ${style.open}`
            : ` ${style.isOpened} ${style.showOnClick}`;
    }

    return (
        <ul className={className}>
            {data && data.Categories.map( ({name}) => (
                <li key={name}>
                    {/* TODO link cursor: pointer only on single */}
                    <a href="/" className="d-flex justify-content-between align-items-center">
                        {name} 
                        {/* TODO if category has sub category display */}
                        {/* <i className="material-icons">keyboard_arrow_right</i> */}
                    </a> 
                </li>
            ) )}
        </ul>
    );
}

CategoriesList.propTypes = {
    static: PropTypes.bool,
    isOpened: PropTypes.bool 
};

CategoriesList.defaultProps = {
    isOpenable: false,
    isOpened: false
};

export default CategoriesList;
