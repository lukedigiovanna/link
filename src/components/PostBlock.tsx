import { Post } from '../types/post.type';
import { calculateElapsedTime } from '../utils/time';
import { ReactionBar } from './ReactionBar';

function PostBlock(props: { post: Post }) {
    return (
        <div className="post-block">
            <div className="post-profile">
                <p>
                    @{props.post.author.name}
                </p>
            </div>
            <div className="post-body">
                <header>
                    <p></p>
                </header>
                <p>
                    {props.post.body}
                </p>
                <footer>
                    <p>
                        0 replies
                    </p>
                    <p>
                        { calculateElapsedTime(new Date(props.post.createdAt)) } ago
                    </p>
                </footer>
                <ReactionBar reactionCounts={props.post.reactionCounts}/>
            </div>
        </div>
    )
}

export { PostBlock };