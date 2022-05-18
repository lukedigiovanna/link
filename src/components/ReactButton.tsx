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

function ReactButton(props: { reaction: string, count: number }) {
    return (
        <button className="reaction-button">
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