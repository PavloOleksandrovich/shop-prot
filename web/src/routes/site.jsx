import { lazy } from 'react';

export default {
    home: {
        path: '/',
        component: lazy(() => import('../pages/site/Home/Home')),
        exact: true
    },

    about: {
        path: '/about',
        component: lazy(() => import('../pages/site/About/About')),
        exact: true
    }
}
