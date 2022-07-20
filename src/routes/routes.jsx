import Home from '~/pages/Home';
import Cart from '~/pages/Cart/Cart';
import Catalog from '~/pages/Catalog';
import Product from '~/pages/Product';
import About from '~/pages/About';
import Parts from '~/pages/Parts';
import Sale from '~/pages/Sale';
import Policy from '~/pages/Policy';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catalog },
    { path: '/catalog/:id', component: Product },
    { path: '/about', component: About },
    { path: '/parts', component: Parts },
    { path: '/sale', component: Sale },
    { path: '/policy', component: Policy },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
