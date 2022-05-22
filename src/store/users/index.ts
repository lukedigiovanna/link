import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "react-redux-firebase";
import { User } from "../../types/user.type";
import api from '../../api';
import endpoints from '../../api/endpoints'
import { Reaction } from "../../types/reactions.type";

interface UsersState {
    users: User[];
    currentUser: User | null;
    currentReactions: Reaction[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
    users: [], // no users
    currentUser: null,
    currentReactions: [],
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
        },
        setCurrentReactions: (state, action: PayloadAction<Reaction[]>) => {
            state.currentReactions = [...action.payload];
        },
        addUserReaction: (state, action: PayloadAction<Reaction>) => {
            state.currentReactions = [...state.currentReactions, action.payload];
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

export const { setUsers, setCurrentUser, setCurrentReactions, addUserReaction } = slice.actions;
export default slice.reducer;