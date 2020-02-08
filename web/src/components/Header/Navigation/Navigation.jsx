import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navigation.module.scss';
import CategoriesList from '../../Categories-list/Categories-list';

function Navigation() {
    const [isCategoriesListOpened, setIsCategoriesListOpened] = useState(false);

    return (
        <div className={style.navigation}>
            <div className="container d-flex">
                <div className={style.categoriesWrapper}>
                    <div 
                        className={`${style.categoriesButton} d-flex justify-content-between`}
                        onClick={() => setIsCategoriesListOpened(!isCategoriesListOpened)}
                    >
                        Categories <i className="material-icons">menu</i>
                    </div>

                    <CategoriesList isOpenable={true} isOpened={isCategoriesListOpened} />
                </div>

                <ul className={`${style.navbar} d-flex align-items-center mb-0`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
