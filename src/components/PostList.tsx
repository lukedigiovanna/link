import { useSelector } from 'react-redux';
import { Post } from '../types/post.type';
import { PostBlock } from './PostBlock';
import { fuzzySearch } from '../utils/search';

function PostList(props: { searchTerm?: string}) {
    const posts = useSelector((state: any) => state.posts);

    return (
        <>
            {posts.posts.length > 0 ? fuzzySearch(props.searchTerm, {keys: ["body", "author.name", "author.firstName", "author.lastName"]}, posts.posts).map((post: Post) => {
                return (
                    <PostBlock key={post.id} post={post} />
                )
            }) : <p className='no-posts'>No posts yet</p>}
        </>
    )
}

export { PostList };