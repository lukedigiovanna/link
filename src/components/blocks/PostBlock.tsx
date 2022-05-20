import { Post } from '../../types/post.type';
import { calculateElapsedTime } from '../../utils/time';
import { ProfileImage } from '../ProfileImage';
import { ReactionBar } from './ReactionBar';
import { useNavigate } from 'react-router-dom'; 

function PostBlock(props: { post: Post }) {
    const navigate = useNavigate();

    return (
        <div className="post-block" onClick={() => {navigate(`/post/${props.post.id}`)}}>
            <div className="post-profile">
                <ProfileImage imageSrc={props.post.author.avatarURL} />
                <a href={`${process.env.REACT_APP_PUBLIC_URL}/user/${props.post.author.name}`}>
                    @{props.post.author.name}
                </a>
            </div>
            <div className="post-body">
                <p>
                    {props.post.body}
                </p>
                <ReactionBar reactionCounts={props.post.reactionCounts} postId={props.post.id}/>
                <footer>
                    <p>
                        {props.post.replyCount ? props.post.replyCount : 0} {props.post.replyCount == 1 ? "reply" : "replies"}
                    </p>
                    <p>
                        { calculateElapsedTime(new Date(props.post.createdAt)) } ago
                    </p>
                </footer>
            </div>
        </div>
    )
}

export { PostBlock };