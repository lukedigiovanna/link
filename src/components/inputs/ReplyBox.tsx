import styled from "styled-components"
import theme from "../../constants/theme"

const ReplyBoxContainer = styled.div`
    background-color: ${theme.colors.backgroundColorLight10};
    max-width: 800px;
    padding: 3px;
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
    border: none;
`

const ReplyBoxButton = styled.button`
    float: right;
`

function ReplyBox() {
    return (
        <ReplyBoxContainer>
            <ReplyBoxBody>
                Reply:
                <ReplyBoxTextArea placeholder="Reply"></ReplyBoxTextArea> 
            </ReplyBoxBody>
            <ReplyBoxButton>Reply</ReplyBoxButton>
        </ReplyBoxContainer>
    )
}

export { ReplyBox }