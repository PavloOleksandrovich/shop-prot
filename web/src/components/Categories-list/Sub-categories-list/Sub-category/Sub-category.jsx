import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import SubCategoriesList from '../../Sub-categories-list/Sub-categories-list';

function SubCategory({name, children}) {
    const [isSubCategoriesOpened, setIsSubCategoriesOpened] = useState(false);

    const link = children 
        ? ''
        : `/category/${name}`;

    return (
        <>
            <li key={name}>
                <Link 
                    to={link}
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => {setIsSubCategoriesOpened(!isSubCategoriesOpened)}}
                >
                    {name}

                    {children && children.length !== 0 && 
                        <i className="material-icons">keyboard_arrow_right</i>
                    }
                </Link>

                {children && children.length !== 0 && 
                    <CSSTransition
                        in={isSubCategoriesOpened}
                        timeout={300}
                        unmountOnExit
                        classNames="appearance"
                    >
                        <SubCategoriesList subCategories={children} />
                    </CSSTransition>
                }
            </li>
        </>
    );
}

SubCategory.propTypes = {
    name: PropTypes.string.isRequired
};

export default SubCategory;
