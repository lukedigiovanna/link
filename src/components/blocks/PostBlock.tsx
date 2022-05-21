import { Post } from '../../types/post.type';
import { calculateElapsedTime } from '../../utils/time';
import { ProfileImage } from '../ProfileImage';
import { ReactionBar } from './ReactionBar';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components'
import theme from '../../constants/theme'

const PostBlockContainer = styled.div`
    background-color: ${theme.colors.postColor};
    padding-block: 15px;
    padding-right: 15px;
    display: flex;
    flex-direction: row;
    transition: background-color 0.3s;
    max-width: 800px;
    cursor: pointer;

    &:hover {
        background-color: ${theme.colors.postColorLight};
    }
`

const PostProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100px;
    margin-right: 10px;
    flex: 1;
`

const PostProfileUserLink = styled.a`
    margin: 0;
    font-size: 0.7rem;
    color: ${theme.colors.secondaryTextColor};
    transition: 0.4s;
    text-decoration: none;
    font-family: ${theme.fonts.primary};
    &:hover {
        color: ${theme.colors.primaryTextColor};
    }
`

const PostBodyContainer = styled.div`
    flex: 4;
    color: ${theme.colors.primaryTextColor};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PostBodyText = styled.p`
    margin: 0;
    font-size: 1rem;
    line-height: 1.3;
    font-family: ${theme.fonts.primary};
`

const PostBodyFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${theme.colors.secondaryTextColor};
    font-size: 0.8rem;
    font-family: ${theme.fonts.primary};

    p {
        margin: 0;
    }
`

function PostBlock(props: { post: Post }) {
    const navigate = useNavigate();

    return (
        <PostBlockContainer onClick={() => {navigate(`/post/${props.post.id}`)}}>
            <PostProfileContainer>
                <ProfileImage imageSrc={props.post.author.avatarURL} />
                <PostProfileUserLink href={`${process.env.REACT_APP_PUBLIC_URL}/user/${props.post.author.name}`}>
                    @{props.post.author.name}
                </PostProfileUserLink>
            </PostProfileContainer>
            <PostBodyContainer>
                <PostBodyText>
                    {props.post.body}
                </PostBodyText>
                <ReactionBar reactionCounts={props.post.reactionCounts} postId={props.post.id}/>
                <PostBodyFooter>
                    <p>
                        {props.post.replyCount ? props.post.replyCount : 0} {props.post.replyCount === 1 ? "reply" : "replies"}
                    </p>
                    <p>
                        { calculateElapsedTime(new Date(props.post.createdAt)) } ago
                    </p>
                </PostBodyFooter>
            </PostBodyContainer>
        </PostBlockContainer>
    )
}

export { PostBlock };