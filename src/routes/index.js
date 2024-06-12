import Home from '~/page/Home';
import Login from '~/page/Login';
import User from '~/page/User';
import user from '~/page/User';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
];

const privateRoutes = [{ path: '/user', component: User }];

export { publicRoutes, privateRoutes };
