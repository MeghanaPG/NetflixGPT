import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    // As soon as we login, this reducer function will be dispatched.
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) =>{
            return null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
