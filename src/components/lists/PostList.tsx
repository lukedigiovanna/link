import { useSelector } from 'react-redux';
import { Post } from '../../types/post.type';
import { PostBlock } from '../blocks/PostBlock';
import { fuzzySearch } from '../../utils/search';
import styled from 'styled-components';
import { in_main_frame } from '../../utils/styles';

const PostListContainer = styled.div`
    ${in_main_frame}
`;

const HorizontalBar = styled.hr`
    margin: 0;
    background-color: gray;
    max-width: 800px;
    z-index: -1;
`


function PostList(props: { searchTerm?: string}) {
    const posts = useSelector((state: any) => state.posts);

    return (
        <PostListContainer>
            {posts.posts.length > 0 ? fuzzySearch(props.searchTerm, {keys: ["body", "author.name", "author.firstName", "author.lastName"]}, posts.posts).map((post: Post) => {
                return (
                    <>
                        <PostBlock key={post.id} post={post} /> 
                        <HorizontalBar/>
                    </>
                )
            }) : 
            <p className='no-posts'>No posts yet</p>}
        </PostListContainer>
    )
}

export { PostList };