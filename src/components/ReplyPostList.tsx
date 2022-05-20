import { useSelector } from 'react-redux';
import { Post } from '../types/post.type';
import { PostBlock } from './PostBlock';

function ReplyPostList() {
    const posts = useSelector((state: any) => state.posts);

    return (
        <>
            { posts.posts.length > 0 ? <PostBlock post={posts.posts[0]} /> : "" }
            <div className='replies-list'>
                {posts.posts.length > 0 ? posts.posts.slice(1).map((post: Post) => {
                    return (
                        <PostBlock key={post.id} post={post} />
                    )
                }) : <p className='no-posts'>No replies here</p>}
            </div>
        </>
    )
}

export { ReplyPostList };