import { useSelector } from 'react-redux';
import { Post } from '../types/post.type';
import { PostBlock } from './PostBlock';


function PostList() {
    const posts = useSelector((state: any) => state.posts);

    return (
        <>
            {posts.posts.length > 0 ? posts.posts.map((post: Post) => {
                return (
                    <PostBlock key={post.id} post={post} />
                )
            }) : <p className='no-posts'>No posts yet</p>}
        </>
    )
}

export { PostList };