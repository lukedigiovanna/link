import { Post } from '../types/post.type';
import { calculateElapsedTime } from '../utils/time';
import { ProfileImage } from './ProfileImage';
import { ReactionBar } from './ReactionBar';

function PostBlock(props: { post: Post }) {
    return (
        <div className="post-block">
            <div className="post-profile">
                <ProfileImage imageSrc={props.post.author.avatarURL} />
                <p>
                    @{props.post.author.name}
                </p>
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