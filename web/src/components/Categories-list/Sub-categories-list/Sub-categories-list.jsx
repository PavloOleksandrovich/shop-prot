import React from 'react';
import style from './Sub-categories-list.module.scss';
import SubCategory from './Sub-category/Sub-category';

function SubCategoriesList({subCategories}) {
    return (
        <ul className={`categories ${style.subCategories}`}>
            {subCategories.map( (subCategory) => (
                <SubCategory {...subCategory} key={subCategory.id} />
            ))}
        </ul>
    );
}

// TODO props

export default SubCategoriesList;
