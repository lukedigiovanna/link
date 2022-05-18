import { useParams } from "react-router-dom";
import api from '../api';
import endpoints from '../api/endpoints';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setPosts } from "../store/posts";
import { PostList } from "../components/PostList";
import { UserList } from "../components/UserList";

export default function UserPage() {
    const { username } = useParams(); 
    const dispatch = useDispatch();

    // get all posts
    useEffect(() => {
        // fetch posts from api
        api.get(endpoints.postsByUser(username ? username : "")).then((response) => {
            dispatch(setPosts(response.data));
        });
    }, []);

    return (
        <>
            <div className="user-list">
                <UserList />    
            </div>  
            <div className="posts-list">
                <PostList />
            </div>
        </>
    )
}