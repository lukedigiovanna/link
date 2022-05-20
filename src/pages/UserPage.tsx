import { useParams } from "react-router-dom";
import api from '../api';
import endpoints from '../api/endpoints';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setPosts } from "../store/posts";
import { PostList } from "../components/lists/PostList";
import { UserList } from "../components/lists/UserList";
import { ProfileBlock } from "../components/blocks/ProfileBlock";
import { useSelector } from "react-redux";
import { User, UserNotFound, UserLoading } from "../types/user.type";

export default function UserPage() {
    const { username } = useParams(); 
    const dispatch = useDispatch();
    const users = useSelector((state: any) => state.users);

    const [user, setUser] = useState<User>(UserLoading());

    // get all posts
    useEffect(() => {
        // fetch posts from api
        api.get(endpoints.postsByUser(username ? username : "")).then((response) => {
            dispatch(setPosts(response.data));
        });

        // find which user is the username
        let found = false;
        users.users.forEach((user: User) => {
            if (user.name === username) {
                setUser(user);
                found = true;
            }
        }, []);
    });



    return (
        <>
            <UserList />   
            <div className='posts-list'>
                <ProfileBlock user={user} /> 
                <PostList />
            </div>
        </>
    )
}