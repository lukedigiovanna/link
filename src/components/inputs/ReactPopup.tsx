import styled from 'styled-components';

const PopupContainer = styled.div<{shown: boolean}>`
    display: ${(props) => props.shown ? 'flex' : 'none'};
    position: absolute;
    z-index: 1;
    top: 100;
    left: 100;
    width: 100px;
    height: 100px;
    background-color: blue;
    border: 3px solid black;
    border-radius: 4px;
`

function ReactPopup(props: { shown: boolean }) {
    return (
        <>
            <PopupContainer shown={props.shown}>

            </PopupContainer>
        </>
    )
}

export { ReactPopup };