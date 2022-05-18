import { Post } from '../types/post.type';
import { calculateElapsedTime } from '../utils/time';

function PostBlock(props: { post: Post }) {
    return (
        <div className="post-block">
            <div className="post-profile">
                <p>
                    John Cena
                </p>
            </div>
            <div className="post-body">
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
            </div>
        </div>
    )
}

export { PostBlock };