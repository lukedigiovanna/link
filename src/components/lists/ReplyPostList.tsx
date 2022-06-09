import { useSelector } from 'react-redux';
import { Post } from '../../types/post.type';
import { PostBlock } from '../blocks/PostBlock';
import { in_main_frame, center_main } from '../../utils/styles';
import styled from 'styled-components';
import { StatusText } from '../../utils/styles';
import { ReplyBox } from '../inputs/ReplyBox';
import { propTypes } from 'react-bootstrap/esm/Image';

const ReplyPostListContainer = styled.div`
    ${in_main_frame}
    ${center_main}
`;

const ReplyListContainer = styled.div`
    margin-left: 70px;
`


function ReplyPostList(props: {postId: number}) {
    const posts = useSelector((state: any) => state.posts);

    return (
        <ReplyPostListContainer>
            { 
                posts.posts.length > 0 && posts.loading === 'succeeded' && 
                    (
                    <>
                        <PostBlock post={posts.posts[0]} />
                        <ReplyBox postId={props.postId}/>
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