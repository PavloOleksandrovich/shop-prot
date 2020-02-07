import { Home, About } from '../pages';

export default {
    home: {
        path: '/',
        component: Home,
        exact: true
    },

    about: {
        path: '/about',
        component: About,
        exact: true
    }
}
