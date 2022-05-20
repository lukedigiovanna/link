import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { actionTypes } from "react-redux-firebase";
import { User } from "../../types/user.type";

interface UsersState {
    users: User[];
    currentUser: User | null;
}

const initialState = {
    users: [], // no users
    currentUser: null
} as UsersState

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = [...action.payload];
        },
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.currentUser = {...action.payload}
        }
    }
});

export const { setUsers, setCurrentUser } = slice.actions;
export default slice.reducer;