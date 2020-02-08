import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navigation.module.scss';

import routes from '../../../routes';

function Navigation() {
    return (
        <div className={style.navigation}>
            <div className="container d-flex">
                <div className={`${style.categoryHeader} d-flex justify-content-between`}>
                    Categories <i className="material-icons">menu</i>
                </div>

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
