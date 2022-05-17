import { Post } from '../types/post.type';
import { PostBlock } from './PostBlock';

function PostList(props: Post[]) {
    return (
        <>
            {props.map((post: Post) => {
                return (
                    <PostBlock key={post.id} post={post} />
                )
            })}
        </>
    )
}