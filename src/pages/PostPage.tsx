import { useParams } from "react-router-dom";
import { ReplyPostList } from "../components/ReplyPostList";
import { UserList } from '../components/UserList';
import api from '../api';
import endpoints from "../api/endpoints";

function PostPage() {
    const { postId } = useParams();

    // look for the first post in the store as the main post
    // then all others are direct replies to that post.
    api.get(endpoints.posts()).then((response) => {
        const posts = response.data;
    });

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