import Home from '~/page/Home';
import Login from '~/page/Login';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
