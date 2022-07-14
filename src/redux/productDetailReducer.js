import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};

const productDetailReducer = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        open: (state, action) => {
            state.value = action.payload;
        },
        close: (state) => {
            state.value = '';
        },
    },
});

export default productDetailReducer.reducer;

export const open = productDetailReducer.actions.open;
export const close = productDetailReducer.actions.close;
