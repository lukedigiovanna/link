import { User } from "../../types/user.type";
import { prettyPrintDate } from "../../utils/time";
import { ProfileImage } from "../ProfileImage";
import styled from 'styled-components';
import theme from '../../constants/theme';
import { in_main_frame } from "../../utils/styles";

const ProfileBlockContainer = styled.div`
    ${in_main_frame}
    display: flex;
    flex-direction: row;
    background-color: ${theme.colors.secondaryColor};
    padding: 10px;
    max-width: 800px;
`;

const ProfileDetailsContainer = styled.div`
    * {
        margin-left: 10px;
    }
`

const ProfileBlockFullName = styled.h1`
    font-size: 2.1rem;
    color: ${theme.colors.primaryTextColor};
    font-family: ${theme.fonts.primary};
    margin-bottom: 0;
`

const ProfileBlockDetail = styled.h1<{ fontSize: number }>`
    font-size: ${prop => prop.fontSize + "rem"};
    font-style: italic;
    color: ${theme.colors.secondaryTextColor};
    font-family: ${theme.fonts.primary};
`

function ProfileBlock(props: { user: User}) {
    return (
        <ProfileBlockContainer>
            <ProfileImage imageSrc={props.user.avatarURL} size={90} centered />
            <ProfileDetailsContainer>
                <ProfileBlockFullName>
                    {props.user.firstName} {props.user.lastName}
                </ProfileBlockFullName>
                <ProfileBlockDetail fontSize={1.3}>
                    @{props.user.name}
                </ProfileBlockDetail>
                <ProfileBlockDetail fontSize={1}>
                    {props.user.createdAt ? "Joined" : ""}  {prettyPrintDate(props.user.createdAt)}
                </ProfileBlockDetail>
            </ProfileDetailsContainer>
        </ProfileBlockContainer>
    )
}

export { ProfileBlock };