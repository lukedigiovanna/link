import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types/post.type";

interface PostsState {
    posts: Post[];
}

const initialState = {
    posts: [] // no users
} as PostsState

const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = [...action.payload];
        },
        prependPost: (state, action: PayloadAction<Post>) => {
            state.posts = [action.payload, ...state.posts];
        }
    }
});

export const { setPosts, prependPost } = slice.actions;
export default slice.reducer;