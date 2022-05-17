import { createSlice } from "@reduxjs/toolkit";
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
        nothing: () => {}
    }
});


export default slice.reducer;