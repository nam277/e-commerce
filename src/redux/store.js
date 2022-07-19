import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from '~/redux/productDetailReducer';
import cartReducer from '~/redux/cartReducer';
import modalReducer from '~/redux/modalReducer';
import usersReducer from './usersReducer';
import currentUserReducer from './currentUserReducer';

const store = configureStore({
    reducer: {
        productDetail: productDetailReducer,
        productCart: cartReducer,
        modalReducer: modalReducer,
        users: usersReducer,
        currentUser: currentUserReducer,
    },
});

export default store;
