const { createSlice } = require('@reduxjs/toolkit');

const initialValue =
    localStorage.getItem('productCart') !== null ? JSON.parse(localStorage.getItem('productCart')) : [];

const cartReducer = createSlice({
    name: 'productCart',
    initialState: initialValue,
    reducers: {
        addProduct: (state, action) => {
            const existedUser = state.find(
                (user) => user.username === action.payload.username && user.password === action.payload.password,
            );
            const existedUserIndex = state.findIndex((user) => user === existedUser);
            if (existedUser) {
                const existedProduct = existedUser.products.find(
                    (product) =>
                        product.path === action.payload.product.path &&
                        product.color === action.payload.product.color &&
                        product.size === action.payload.product.size,
                );
                const existedProductIndex = existedUser.products.findIndex((product) => product === existedProduct);
                if (existedProduct) {
                    state[existedUserIndex].products.splice(existedProductIndex, 1);
                    state[existedUserIndex].products.push({
                        ...action.payload.product,
                        quantity: action.payload.product.quantity + existedProduct.quantity,
                    });
                } else {
                    state[existedUserIndex].products.push(action.payload.product);
                }
            } else {
                state.push({
                    username: action.payload.username,
                    password: action.payload.password,
                    products: [action.payload.product],
                });
            }
            localStorage.setItem('productCart', JSON.stringify(state));
        },
        updateProduct: (state, action) => {
            const existedUser = state.find(
                (user) => user.username === action.payload.username && user.password === action.payload.password,
            );
            const existedUserIndex = state.findIndex((user) => user === existedUser);
            if (existedUser) {
                const existedProduct = existedUser.products.find(
                    (product) =>
                        product.path === action.payload.product.path &&
                        product.color === action.payload.product.color &&
                        product.size === action.payload.product.size,
                );
                const existedProductIndex = existedUser.products.findIndex((product) => product === existedProduct);
                if (existedProduct) {
                    state[existedUserIndex].products.splice(existedProductIndex, 1);
                    state[existedUserIndex].products.push({
                        ...action.payload.product,
                        quantity: action.payload.product.quantity,
                    });
                }
            }
            localStorage.setItem('productCart', JSON.stringify(state));
        },
        removeProduct: (state, action) => {
            const existedUser = state.find(
                (user) => user.username === action.payload.username && user.password === action.payload.password,
            );
            const existedUserIndex = state.findIndex((user) => user === existedUser);
            if (existedUser) {
                const existedProduct = existedUser.products.find(
                    (product) =>
                        product.path === action.payload.product.path &&
                        product.color === action.payload.product.color &&
                        product.size === action.payload.product.size,
                );
                const existedProductIndex = existedUser.products.findIndex((product) => product === existedProduct);
                if (existedProduct) {
                    state[existedUserIndex].products.splice(existedProductIndex, 1);
                }
            }
            localStorage.setItem('productCart', JSON.stringify(state));
            // const existedProduct = state.find(
            //     (product) =>
            //         product.path === action.payload.path &&
            //         product.color === action.payload.color &&
            //         product.size === action.payload.size,
            // );
            // const existedProductIndex = state.findIndex((product) => product === existedProduct);
            // if (existedProduct) {
            //     state.splice(existedProductIndex, 1);
            // }
            // localStorage.setItem('productCart', JSON.stringify(state.sort((a, b) => a.price - b.price)));
        },
    },
});

export default cartReducer.reducer;

export const addProduct = cartReducer.actions.addProduct;
export const updateProduct = cartReducer.actions.updateProduct;
export const removeProduct = cartReducer.actions.removeProduct;
