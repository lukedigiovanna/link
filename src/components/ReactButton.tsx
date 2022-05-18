interface Emojis {
    [key: string]: string
}

const reactionEmojis: Emojis = {
    "like": "👍",
    "dislike": "👎",
    "love": "💕",
    "haha": "😂",
    "wow": "😮",
    "sad": "😢",
    "angry": "😠"
}

function ReactButton(props: { reaction: string, count: number, postId: number }) {
    return (
        <button 
            className="reaction-button"
            onClick={() => {
                props.count++;
            }}>
            <span className="reaction-text">
                {reactionEmojis[props.reaction]}
            </span>
            <span className="reaction-count">
                {props.count}
            </span>
        </button>
    )
}

export { ReactButton };