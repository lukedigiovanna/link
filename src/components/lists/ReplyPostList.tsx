import { useSelector } from 'react-redux';
import { Post } from '../../types/post.type';
import { PostBlock } from '../blocks/PostBlock';
import { in_main_frame } from '../../utils/styles';
import styled from 'styled-components';

const ReplyPostListContainer = styled.div`
    ${in_main_frame}
`;

const ReplyListContainer = styled.div`
    margin-left: 70px;
`


function ReplyPostList() {
    const posts = useSelector((state: any) => state.posts);

    return (
        <ReplyPostListContainer>
            { posts.posts.length > 0 ? <PostBlock post={posts.posts[0]} /> : "" }
            <ReplyListContainer>
                {posts.posts.length > 0 ? posts.posts.slice(1).map((post: Post) => {
                    return (
                        <PostBlock key={post.id} post={post} />
                    )
                }) : <p className='no-posts'>No replies here</p>}
            </ReplyListContainer>
        </ReplyPostListContainer>
    )
}

export { ReplyPostList };