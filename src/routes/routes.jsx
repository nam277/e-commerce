import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';
import About from '../pages/About';
import Accessories from '../pages/Accessories';
import Contact from '../pages/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catalog },
    { path: '/catalog/:somethings', component: Product },
    { path: '/about', component: About },
    { path: '/accessories', component: Accessories },
    { path: '/contact', component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
