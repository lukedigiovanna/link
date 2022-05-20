import { useParams } from "react-router-dom";
import { ReplyPostList } from "../components/lists/ReplyPostList";
import { UserList } from '../components/lists/UserList';
import api from '../api';
import endpoints from "../api/endpoints";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { setPosts } from '../store/posts';
import { useDispatch } from 'react-redux';

function PostPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    console.log(id);

    // look for the first post in the store as the main post
    // then all others are direct replies to that post.
    useEffect(() => {
        // clear posts before loading in the replies
        dispatch(setPosts([]));
        api.get(endpoints.posts(Number(id))).then((response) => {
            dispatch(setPosts(response.data.reverse()));
        });
    }, []);

    return (
        <>
            <UserList />
            <div className="posts-list">
                <ReplyPostList />
            </div>
        </>
    )
}

export { PostPage };