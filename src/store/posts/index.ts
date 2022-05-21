import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
                if (!post.reactionCounts[action.payload.reaction]) {
                    post.reactionCounts[action.payload.reaction] = 0;    
                }
                else {
                    post.reactionCounts[action.payload.reaction]++;
                }
            }
        }
    }
});

export const { setPosts, addPosts, prependPost, addReaction } = slice.actions;
export default slice.reducer;