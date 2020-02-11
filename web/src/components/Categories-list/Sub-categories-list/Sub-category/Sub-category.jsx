import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import SubCategoriesList from '../../Sub-categories-list/Sub-categories-list';

function SubCategory({name, children}) {
    const [isSubCategoriesOpened, setIsSubCategoriesOpened] = useState(false);

    return (
        <>
            <li key={name}>
                <a 
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => {setIsSubCategoriesOpened(!isSubCategoriesOpened)}}
                >
                    {name}

                    {children && children.length !== 0 && 
                        <i className="material-icons">keyboard_arrow_right</i>
                    }
                </a>

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
