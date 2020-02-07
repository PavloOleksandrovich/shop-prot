import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

import routes from '../../routes';

function Header() {
    return (
        <div className={style.header}>
            <ul>
                {Object.keys(routes).map( (route, index) => (
                    <li key={index}>
                        <Link to={routes[route].path}>{ route }</Link>
                    </li>
                ) )}
            </ul>
        </div>
    );
};

export default Header;
