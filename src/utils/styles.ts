import styled, {css} from 'styled-components';

import theme from '../constants/theme';

// define some commonly used styles

const ml_10 = css`
    margin-left: 10px;
`;

const set_font_primary = css`
    font-family: ${theme.fonts.primary};
`;

const in_main_frame = css`
    @media screen and (max-width: 550px) {
        margin-left: 0;
    }

    margin-left: min(25vw, 250px);
`;

const VerticalSpacer = styled.div<{height: string}>`
    height: ${props => props.height };
`

const HorizontalSpacer= styled.div<{width: string}>`
    width: ${props => props.width };
`

export {ml_10, set_font_primary, in_main_frame, VerticalSpacer, HorizontalSpacer };