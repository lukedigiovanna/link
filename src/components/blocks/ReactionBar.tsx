import { ReactionCounts } from "../../types/reactions.type";
import { ReactButton } from '../inputs/ReactButton';
import styled from 'styled-components';

const ReactionBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

function ReactionBar(props: { reactionCounts: ReactionCounts, postId: number }) {
    return (
        <ReactionBarContainer>
            {
                Object.values(props.reactionCounts).map((count: number, index: number) => {
                    if (count > 0) {
                        return (
                            <ReactButton reaction={Object.keys(props.reactionCounts)[index]} count={count} key={index} postId={props.postId} />
                        )
                    } else { return ""}
                })
            }
        </ReactionBarContainer>
    )
}

export { ReactionBar };