import styled from 'styled-components';
import theme from '../../constants/theme';
import { ReactionCounts } from '../../types/reactions.type';
import { ReactButton } from './ReactButton';
import { ReactionType } from '../../types/reactions.type';

const PopupContainer = styled.div<{shown: boolean}>`
    display: ${(props) => props.shown ? 'flex' : 'none'};
    position: absolute;
    z-index: 10;
    top: 0px;
    left: 100px;
    width: 80px;
    /* background-color: ${theme.colors.backgroundColor}; */
    background-color: hotpink;
    border: 3px solid black;
    border-radius: 4px;
    flex-direction: column;
`

function ReactPopup(props: { shown: boolean, reactionCounts: ReactionCounts, postId: number }) {
    console.log(props.reactionCounts);
    return (
        <>
            <PopupContainer shown={props.shown}>
                {
                    Object.values(ReactionType).map((type: string, index: number) => {
                        if (!props.reactionCounts[type]) {
                            return (
                                <ReactButton reaction={type} count={0} key={index} postId={props.postId} />
                            )
                        } else { return ""}
                    })
                }
            </PopupContainer>
        </>
    )
}

export { ReactPopup };