import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { actionTypes } from "react-redux-firebase";
import { Post } from "../../types/post.type";
import { ReactionCountUpdate } from "../../types/reactions.type";
import api from "../../api";
import endpoints from "../../api/endpoints";

interface PostsState {
    posts: Post[];
    loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
    posts: [], // no users
    loading: 'idle'
} as PostsState

export const fetchAllPosts = createAsyncThunk(
    "posts/fetchAllPosts",
    async () => {
        const posts = await api.get(endpoints.posts());
        console.log(posts);
        return posts.data;
    }
)

export const fetchUserPosts = createAsyncThunk(
    "posts/fetchUserPosts",
    async (name: string) => {
        const posts = await api.get(endpoints.postsByUser(name));
        console.log(posts);
        return posts.data;
    }
)

export const fetchPostReplies = createAsyncThunk(
    "posts/fetchPostReplies",
    async (id: number) => {
        const posts = await api.get(endpoints.posts(id));
        console.log(posts);
        return posts.data;
    }
)

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.posts = action.payload;
        });
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.loading = 'failed';
        });
        builder.addCase(fetchUserPosts.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.posts = action.payload;
        });
        builder.addCase(fetchUserPosts.rejected, (state, action) => {
            state.loading = 'failed';
        });
        builder.addCase(fetchPostReplies.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(fetchPostReplies.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.posts = action.payload;
        });
        builder.addCase(fetchPostReplies.rejected, (state, action) => {
            state.loading = 'failed';
        })
    }
});

export const { setPosts, addPosts, prependPost, addReaction } = slice.actions;
export default slice.reducer;