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
import { User, UserLoading } from "../types/user.type";
import { VerticalSpacer } from "../utils/styles";
import theme from "../constants/theme";

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
        users.users.forEach((user: User) => {
            if (user.name === username) {
                setUser(user);
            }
        }, []);
    });



    return (
        <>
            <UserList />   
            <VerticalSpacer height={theme.spacing.navbarHeight} />
            <ProfileBlock user={user} /> 
            <PostList />
        </>
    )
}