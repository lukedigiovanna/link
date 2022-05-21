import styled from "styled-components";
import theme from "../../constants/theme";
import { ReactionType } from "../../types/reactions.type";
import { ReactButton } from "./ReactButton";

const AddReactionContainer = styled.div`
    border-radius: 1rem;
    font-size: 0.8rem;
    border: 1px solid rgb(89, 89, 89);
    padding-inline: 5px;
    position: relative;

    &:hover {
        div {
            visibility: visible;
        }
    }
`

const PopupContainer = styled.div`
    visibility: hidden;
    display: flex;
    position: absolute;
    z-index: 1;
    top: -30%;
    right: 105%;
    background-color: ${theme.colors.backgroundColor};
    border: 1px solid ${theme.colors.backgroundColorLight20};
    padding-block: 3px;
    border-radius: 8px;
    flex-direction: row;
`

function AddReactionButton(props: {postId: number }) {
    return (
        <AddReactionContainer>
            +
            <PopupContainer>
                {
                    Object.values(ReactionType).map((type: string, index: number) => {
                        return (
                            <ReactButton reaction={type} count={0} key={index} postId={props.postId} />
                        )
                    })
                }
            </PopupContainer>
        </AddReactionContainer>
    )
}

export { AddReactionButton };