import { Post } from '../types/post.type';

function PostBlock(props: { post: Post }) {
    return (
        <>
            {props.post.body}
        </>
    )
}

export { PostBlock };