import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user.type";

interface UsersState {
    users: User[];
}

const initialState = {
    users: [] // no users
} as UsersState

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action: PayloadAction<User[]>) => {
            state.users = [...state.users, ...action.payload];
        }
    }
});

export const { addUsers } = slice.actions;
export default slice.reducer;