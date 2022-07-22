import { createSlice } from '@reduxjs/toolkit';

const modalReducer = createSlice({
    name: 'modalReducer',
    initialState: [
        { name: 'errorName', value: false },
        { name: 'loginForm', value: false },
        { name: 'registerForm', value: false },
        { name: 'chooseColor', value: false },
        { name: 'chooseSize', value: false },
        { name: 'loginFirst', value: false },
        { name: 'successfullyRegister', value: false },
    ],
    reducers: {
        mount: (state, action) => {
            const matchedItemIndex = state.findIndex((item) => item.name === action.payload);
            state.splice(matchedItemIndex, 1);
            state.push({ name: action.payload, value: true });
        },

        remove: (state, action) => {
            const matchedItemIndex = state.findIndex((item) => item.name === action.payload);
            state.splice(matchedItemIndex, 1);
            state.push({ name: action.payload, value: false });
        },
    },
});

export default modalReducer.reducer;

export const mount = modalReducer.actions.mount;
export const remove = modalReducer.actions.remove;
