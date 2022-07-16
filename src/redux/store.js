import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from '~/redux/productDetailReducer';
import cartReducer from '~/redux/cartReducer';

const store = configureStore({
    reducer: {
        productDetail: productDetailReducer,
        productCart: cartReducer,
    },
});

export default store;
