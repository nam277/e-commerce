import { createSlice } from '@reduxjs/toolkit';

const initialValue =
    localStorage.getItem('currentUser') !== null ? JSON.parse(localStorage.getItem('currentUser')) : [];

const currentUserReducer = createSlice({
    name: 'currentUser',
    initialState: initialValue,
    reducers: {
        logInUser: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('currentUser', JSON.stringify(state));
        },

        logOutUser: (state) => {
            state.splice(0, 1);
            localStorage.setItem('currentUser', JSON.stringify(state));
        },
    },
});

export default currentUserReducer.reducer;

export const logInUser = currentUserReducer.actions.logInUser;
export const logOutUser = currentUserReducer.actions.logOutUser;
