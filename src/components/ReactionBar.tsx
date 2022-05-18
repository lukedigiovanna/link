import { ReactionCounts } from "../types/reactions.type";
import { ReactButton } from './ReactButton';

function ReactionBar(props: { reactionCounts: ReactionCounts}) {
    return (
        <div className='reaction-bar'>
            {
                Object.values(props.reactionCounts).map((count: number, index: number) => {
                    if (count > 0) {
                        return (
                            <ReactButton reaction={Object.keys(props.reactionCounts)[index]} count={count} key={index} />
                        )
                    }
                })
            }
        </div>
    )
}

export { ReactionBar };