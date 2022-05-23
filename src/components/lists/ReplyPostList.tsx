import { useSelector } from 'react-redux';
import { Post } from '../../types/post.type';
import { PostBlock } from '../blocks/PostBlock';
import { in_main_frame } from '../../utils/styles';
import styled from 'styled-components';
import { StatusText } from '../../utils/styles';
import { ReplyBox } from '../inputs/ReplyBox';

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
            { 
                posts.posts.length > 0 && posts.loading === 'succeeded' && 
                    (
                    <>
                        <PostBlock post={posts.posts[0]} />
                        <ReplyBox />
                    </>
                    )
            }

            <ReplyListContainer>
                {
                    posts.loading === 'succeeded' && posts.posts.length > 0 && posts.posts.slice(1).map((post: Post) => {
                        return (
                            <PostBlock key={post.id} post={post} />
                        )
                    })
                }
                {
                    posts.loading === 'succeeded' && posts.posts.length === 1 && <StatusText> Nobody has replied yet! Be the first? </StatusText>
                }
            </ReplyListContainer>
            
            {
                posts.loading === 'pending' && <StatusText> Loading... </StatusText>
            }
            {
                posts.loading === 'failed' && <StatusText> Failed to load post and replies </StatusText>
            }
        </ReplyPostListContainer>
    )
}

export { ReplyPostList };