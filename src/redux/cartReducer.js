const { createSlice } = require('@reduxjs/toolkit');

const initialValue =
    localStorage.getItem('productCart') !== null ? JSON.parse(localStorage.getItem('productCart')) : [];

const cartReducer = createSlice({
    name: 'productCart',
    initialState: initialValue,
    reducers: {
        addProduct: (state, action) => {
            const existedProduct = state.find(
                (product) =>
                    product.path === action.payload.path &&
                    product.color === action.payload.color &&
                    product.size === action.payload.size,
            );
            const existedProductIndex = state.findIndex((product) => product === existedProduct);
            if (existedProduct) {
                state.splice(existedProductIndex, 1);
                state.push({ ...action.payload, quantity: action.payload.quantity + existedProduct.quantity });
            } else {
                state.push(action.payload);
            }
            localStorage.setItem('productCart', JSON.stringify(state.sort((a, b) => a.quantity - b.quantity)));
        },
        updateProduct: (state, action) => {
            const existedProduct = state.find(
                (product) =>
                    product.path === action.payload.path &&
                    product.color === action.payload.color &&
                    product.size === action.payload.size,
            );
            const existedProductIndex = state.findIndex((product) => product === existedProduct);
            if (existedProduct) {
                state.splice(existedProductIndex, 1);
                state.push(action.payload);
            }
            localStorage.setItem('productCart', JSON.stringify(state.sort((a, b) => a.price - b.price)));
        },
        removeProduct: (state, action) => {
            const existedProduct = state.find(
                (product) =>
                    product.path === action.payload.path &&
                    product.color === action.payload.color &&
                    product.size === action.payload.size,
            );
            const existedProductIndex = state.findIndex((product) => product === existedProduct);
            if (existedProduct) {
                state.splice(existedProductIndex, 1);
            }
            localStorage.setItem('productCart', JSON.stringify(state.sort((a, b) => a.price - b.price)));
        },
    },
});

export default cartReducer.reducer;

export const addProduct = cartReducer.actions.addProduct;
export const updateProduct = cartReducer.actions.updateProduct;
export const removeProduct = cartReducer.actions.removeProduct;
