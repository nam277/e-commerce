import { createSelector } from '@reduxjs/toolkit';

export const currentUser = (state) => state.currentUser;
export const users = (state) => state.users;
export const productCart = (state) => state.productCart;

export const currentProduct = createSelector(currentUser, productCart, ([currentUser], productCart) => {
    if (currentUser) {
        const matchedUser = productCart.find(
            (product) => product.username === currentUser.username && product.password === currentUser.password,
        );
        if (matchedUser) {
            if (matchedUser['products'] === undefined) {
                return [];
            } else {
                return matchedUser.products;
            }
        } else {
            return [];
        }
    } else {
        return [];
    }
});
