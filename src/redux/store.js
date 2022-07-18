import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from '~/redux/productDetailReducer';
import cartReducer from '~/redux/cartReducer';
import modalReducer from '~/redux/modalReducer';

const store = configureStore({
    reducer: {
        productDetail: productDetailReducer,
        productCart: cartReducer,
        modalReducer: modalReducer,
    },
});

export default store;
