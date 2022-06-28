import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catalog },
    { path: '/catalog/:somethings', component: Product },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
