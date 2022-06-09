import styled from "styled-components"
import theme from "../../constants/theme"
import api from '../../api';
import endpoints from '../../api/endpoints';
import {auth} from '../../constants/firebase';
import { useDispatch } from "react-redux";
import { prependPost } from "../../store/posts";
import React from "react";

const ReplyBoxContainer = styled.div`
    background-color: ${theme.colors.backgroundColorLight10};
    max-width: 700px;
    margin-inline: 10px;
    width: 100%;
    padding: 3px;
    border-radius: 3px;
`

const ReplyBoxBody = styled.div`
    display: flex;
`;

const ReplyBoxTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    color: ${theme.colors.secondaryTextColor};
    border: 2px solid ${theme.colors.backgroundColorLight20};
    background-color: transparent;
    resize: none;
    font-size: 0.9rem;
    font-family: ${theme.fonts.primary};
`

const ReplyBoxButton = styled.button`
    float: right;
    margin: 4px;
    background-color: ${theme.colors.primaryColor};
    transition: 0.4s;
    color: ${theme.colors.primaryTextColor};
    border: none;
    border-radius: 3px;
    padding: 3px;
    padding-inline: 8px;

    &:hover {
        background-color: ${theme.colors.primaryColorLight10};
    }
`

function ReplyBox(props: {postId: number}) {
    const [body, setBody] = React.useState("");
    const dispatch = useDispatch();

    return (
        <ReplyBoxContainer>
            <ReplyBoxBody>
                <ReplyBoxTextArea placeholder="Reply" onChange={(e) => {setBody(e.currentTarget.value)}}>
                    
                </ReplyBoxTextArea> 
            </ReplyBoxBody>
            <ReplyBoxButton onClick={() => {
                if (body.length > 0) {
                    api.post(endpoints.posts(), {
                        body: body,
                        userId: auth.currentUser?.uid,
                        isReply: true,
                        parentId: props.postId
                    }).then(response => {
                        console.log(response);
                        // dispatch the new post to the store
                        dispatch(prependPost(response.data));
                    });
                }
            }}>
                Reply
            </ReplyBoxButton>
        </ReplyBoxContainer>
    )
}

export { ReplyBox }