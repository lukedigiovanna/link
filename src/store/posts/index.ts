import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { actionTypes } from "react-redux-firebase";
import { Post } from "../../types/post.type";
import { ReactionCountUpdate } from "../../types/reactions.type";

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
        addPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = [...state.posts, ...action.payload];
        },
        prependPost: (state, action: PayloadAction<Post>) => {
            state.posts = [action.payload, ...state.posts];
        },
        addReaction: (state, action: PayloadAction<ReactionCountUpdate>) => {
            const post = state.posts.find(p => p.id === action.payload.postId);
            if (post) {
                const reactionCounts = {...post.reactionCounts};
                if (!reactionCounts[action.payload.reaction]) {
                    reactionCounts[action.payload.reaction] = 1;
                }
                else {
                    reactionCounts[action.payload.reaction]++;
                }
                // now reconstruct the post
                const modifiedPost = {
                    ...post,
                    reactionCounts
                }
                // now insert the modified post into the state posts
                const index = state.posts.findIndex(p => p.id === action.payload.postId);
                state.posts = [
                    ...state.posts.slice(0, index),
                    modifiedPost,
                    ...state.posts.slice(index + 1)
                ];
            }
        }
    }
});

export const { setPosts, addPosts, prependPost, addReaction } = slice.actions;
export default slice.reducer;