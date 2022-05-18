import { Post } from '../types/post.type';
import { PostBlock } from './PostBlock';

function PostList(props: { posts: Post[] }) {
    return (
        <>
            {props.posts.map((post: Post) => {
                return (
                    <PostBlock key={post.id} post={post} />
                )
            })}
        </>
    )
}

export { PostList };