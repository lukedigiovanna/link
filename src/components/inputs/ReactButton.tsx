import React from 'react';
import styled from 'styled-components';
import theme from '../../constants/theme';
import { ReactPopup } from './ReactPopup';

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
    "angry": "😠",
    "new": "+"
}

const ReactionButton = styled.button`
    border-radius: 1rem;
    font-size: 0.8rem;
    margin-left: 10px;
    border: 1px solid rgb(89, 89, 89);
    background-color: transparent;
    transition: background-color 0.4s;
    padding-left: 5px;
    padding-right: 5px;

    &:hover {
        background-color: ${theme.colors.postColor};
    }
`
const ReactionCount = styled.span`
    color: ${theme.colors.secondaryTextColor};
    font-size: 0.8rem;
    font-family: ${theme.fonts.primary};
`

function ReactButton(props: { reaction: string, count: number, postId: number }) {
    const [showPopup, setShowPopup] = React.useState(false);


    return (
        <>
            <ReactPopup shown={showPopup} />
            <ReactionButton 
                className="reaction-button"
                onClick={(e) => {
                    console.log("clicked");
                    if (props.reaction === "new") {
                        // open pop up to add new reaction
                        setShowPopup(true);
                    }
                    // give this button precedence over the post it may be on
                    e.stopPropagation();
                }}>
                <ReactionCount>
                    {reactionEmojis[props.reaction]} 
                    {props.reaction === "new" ? "" : props.count}
                </ReactionCount>
            </ReactionButton>
        </>
    )
}

export { ReactButton };