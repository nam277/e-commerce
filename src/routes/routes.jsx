import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Catalog from '~/pages/Catalog';
import Product from '~/pages/Product';
import About from '~/pages/About';
import Accessories from '~/pages/Accessories';
import Contact from '~/pages/Contact';
import Policy from '~/pages/Policy';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catalog },
    { path: '/catalog/:id', component: Product },
    { path: '/about', component: About },
    { path: '/accessories', component: Accessories },
    { path: '/contact', component: Contact },
    { path: '/policy', component: Policy },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
