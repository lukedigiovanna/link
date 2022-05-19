import React, { useEffect } from 'react';
import { UserList } from '../components/UserList';
import { PostList } from '../components/PostList';
import api from '../api';
import endpoints from '../api/endpoints';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../store/posts';
import { User } from '../types/user.type';

export default function MainPage() {
    const posts = useSelector((state: any) => state.posts?.posts);
    const dispatch = useDispatch();

    // get all posts
    useEffect(() => {
        // fetch posts from api
        api.get(endpoints.posts()).then((response) => {
            dispatch(setPosts(response.data));
        });
    }, []);

    return (
        <>
            <UserList /> 
            <div className="posts-list">
                <PostList />
            </div>
        </>
    );
}