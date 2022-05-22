import React from 'react';
import styled from 'styled-components';
import theme from '../../constants/theme';
import { ReactPopup } from './ReactPopup';
import api from '../../api';
import endpoints from '../../api/endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { addReaction } from '../../store/posts';
import { addUserReaction } from '../../store/users';

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

const ReactionButton = styled.button<{alreadyDone: boolean}>`
    border-radius: 1rem;
    font-size: 0.8rem;
    margin-inline: 5px;
    border: 1px solid rgb(89, 89, 89);
    background-color: ${props => props.alreadyDone ? theme.colors.alreadyReacted : "transparent"};
    transition: background-color 0.4s;
    padding-left: 5px;
    padding-right: 5px;

    &:hover {
        background-color: ${props => props.alreadyDone ? theme.colors.alreadyReacted : theme.colors.postColor};
    }
`
const ReactionCount = styled.span`
    color: ${theme.colors.secondaryTextColor};
    font-size: 0.8rem;
    font-family: ${theme.fonts.primary};
`

function ReactButton(props: { reaction: string, count: number, postId: number }) {
    const dispatch = useDispatch();

    const reactions = useSelector((state: any) => state.users.currentReactions);

    return (
        <>
            <ReactionButton 
                className="reaction-button"
                onClick={(e) => {
                    console.log("clicked");
                    // post a request to react to the post
                    api.post(endpoints.reactionsToPost(props.postId), {
                        reaction: props.reaction
                    }).then(res => {
                        // update the post list to react properly to this post
                        console.log(res);
                        if (res.data) {
                            console.log(res.data);
                            dispatch(addReaction({reaction: res.data.reaction, postId: props.postId}));
                            dispatch(addUserReaction(res.data));
                        }
                    }).catch(err => {
                        alert("An error has occurred\n" + err.message);
                    });

                    // give this button precedence over the post it may be on
                    e.stopPropagation();
                }}
                alreadyDone={reactions.find((reaction: any) => reaction.reaction === props.reaction && reaction.post_id === props.postId) ? true : false}
                >
                <ReactionCount>
                    {reactionEmojis[props.reaction]} 
                    {props.count === 0 ? "" : " " + props.count}
                </ReactionCount>
            </ReactionButton>
        </>
    )
}

export { ReactButton };