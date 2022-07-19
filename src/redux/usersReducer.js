const { createSlice } = require('@reduxjs/toolkit');

const initialValue = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')) : [];

const usersReducer = createSlice({
    name: 'users',
    initialState: initialValue,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state));
        },
    },
});

export default usersReducer.reducer;

export const addUser = usersReducer.actions.addUser;
