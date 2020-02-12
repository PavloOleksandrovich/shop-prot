import React from 'react';
import style from './Admin-layout.module.scss';

// TODO handle active by route
const routes = [
    {
        name: "Categories",
        icon: "category",
        active: true
    },
    {
        name: "Products",
        icon: "shopping_cart",
        active: false
    },
    {
        name: "Users",
        icon: "supervised_user_circle",
        active: false
    }
];

// TODO separate sidebar
function AdminLayout({children}) {
	return (
        <>
            <div className={style.background}></div>

            <aside className={style.sidebar}>
                <ul>
                    {routes.map( ({name, icon, active}) => {
                        const className = active
                            ? `${style.active}`
                            : '';

                        return (
                            <li key={name}>
                                <a className={className}>
                                    <i className="material-icons">{icon}</i>
                                    <div>{name}</div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            <main className={style.content}>
                <div className="container-fluid">
                    {children}
                </div>
            </main>
        </>
	);
}

export default AdminLayout;
