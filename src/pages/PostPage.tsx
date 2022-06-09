import { useParams } from "react-router-dom";
import { ReplyPostList } from "../components/lists/ReplyPostList";
import { UserList } from '../components/lists/UserList';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { VerticalSpacer } from "../utils/styles";
import theme from "../constants/theme";
import store from '../store';
import { fetchPostReplies } from '../store/posts';

function PostPage() {
    const { id } = useParams();
    const dispatch = useDispatch<typeof store.dispatch>();

    // look for the first post in the store as the main post
    // then all others are direct replies to that post.
    useEffect(() => {
        dispatch(fetchPostReplies(Number(id)));
    });

    return (
        <>
            <UserList />
            <VerticalSpacer height={theme.spacing.navbarHeight} />
            <ReplyPostList postId={Number(id)}/>
        </>
    )
}

export { PostPage };