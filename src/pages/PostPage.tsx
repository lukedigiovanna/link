import { useParams } from "react-router-dom";
import { ReplyPostList } from "../components/lists/ReplyPostList";
import { UserList } from '../components/lists/UserList';
import api from '../api';
import endpoints from "../api/endpoints";
import { useEffect } from "react";
import { setPosts } from '../store/posts';
import { useDispatch } from 'react-redux';
import { VerticalSpacer } from "../utils/styles";
import theme from "../constants/theme";

function PostPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    // look for the first post in the store as the main post
    // then all others are direct replies to that post.
    useEffect(() => {
        // clear posts before loading in the replies
        api.get(endpoints.posts(Number(id))).then((response) => {
            dispatch(setPosts(response.data.reverse()));
        });
    });

    return (
        <>
            <UserList />
            <VerticalSpacer height={theme.spacing.navbarHeight} />
            <ReplyPostList />
        </>
    )
}

export { PostPage };