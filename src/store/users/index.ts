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
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = [...action.payload];
        }
    }
});

export const { setUsers } = slice.actions;
export default slice.reducer;