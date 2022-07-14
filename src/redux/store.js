import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from '~/redux/productDetailReducer';

const store = configureStore({
    reducer: {
        productDetail: productDetailReducer,
    },
});

export default store;
