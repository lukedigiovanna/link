import { useSelector } from 'react-redux';
import { Post } from '../types/post.type';
import { PostBlock } from './PostBlock';


function PostList() {
    const posts = useSelector((state: any) => state.posts);

    return (
        <div className="post-list">
            {posts.posts.map((post: Post) => {
                return (
                    <PostBlock key={post.id} post={post} />
                )
            })}
        </div>
    )
}

export { PostList };