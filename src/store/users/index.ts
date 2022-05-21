import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "react-redux-firebase";
import { User } from "../../types/user.type";
import api from '../../api';
import endpoints from '../../api/endpoints'

interface UsersState {
    users: User[];
    currentUser: User | null;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
    users: [], // no users
    currentUser: null,
    loading: 'idle' // not loading
} as UsersState;

export const fetchUsersList = createAsyncThunk(
    "users/fetchUsersList",
    async () => {
        const users = await api.get(endpoints.users());
        console.log(users);
        return users.data;
    }
);

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = [...action.payload];
        },
        setCurrentUser: (state, action: PayloadAction<User | null>) => {
            state.currentUser = action.payload ? {...action.payload} : null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersList.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(fetchUsersList.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.users = action.payload;
        });
        builder.addCase(fetchUsersList.rejected, (state, action) => {
            state.loading = 'failed';
        });
        builder.addCase(actionTypes.LOGOUT, (state, action) => {
            state.currentUser = null;
        });
    }
});

export const { setUsers, setCurrentUser } = slice.actions;
export default slice.reducer;