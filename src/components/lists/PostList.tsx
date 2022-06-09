import { useSelector } from 'react-redux';
import { Post } from '../../types/post.type';
import { PostBlock } from '../blocks/PostBlock';
import { fuzzySearch } from '../../utils/search';
import styled from 'styled-components';
import { in_main_frame, center_main } from '../../utils/styles';
import theme from '../../constants/theme';
import { StatusText } from '../../utils/styles';

const PostListContainer = styled.div`
    ${in_main_frame}
    ${center_main}
`;


function PostList(props: { searchTerm?: string}) {
    const posts = useSelector((state: any) => state.posts);

    return (
        <PostListContainer>
            {
                posts.posts.length > 0 && 
                fuzzySearch(props.searchTerm, {keys: ["body", "author.name", "author.firstName", "author.lastName"]}, posts.posts)
                    .map((post: Post) => {
                        return (
                            <>
                                <PostBlock key={post.id} post={post} />
                            </>
                        )
                    }) 
            }
            {
                posts.loading === 'succeeded' && posts.posts.length === 0 && <StatusText className='no-posts'>No posts yet</StatusText>
            }      
            {
                posts.loading === 'pending' && <StatusText> Loading... </StatusText>
            }
            {
                posts.loading === 'failed' && <StatusText> Failed to load posts </StatusText>
            }
        </PostListContainer>
    )
}

export { PostList };