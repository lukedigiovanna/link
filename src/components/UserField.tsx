import styled from 'styled-components';
import theme from '../constants/theme';
import { User } from '../types/user.type';

import { ProfileImage } from './ProfileImage';

const UserFieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 42px;
    margin-bottom: 3px;

    @media screen and (max-width: 700px) {
        height: 27px;
    }
`

const UsernameLink = styled.a`
    font-size: 0.9rem;
    margin: 0 0 0 6px; // allow full flex experience
    text-decoration: none;
    color: ${theme.colors.primaryTextColor};
    font-family: ${theme.fonts.primary};
    transition: color 0.5s;
`

function UserField(props: { user: User}) {
    return (
        <UserFieldContainer>
            <ProfileImage imageSrc={props.user.avatarURL} size={35} />
            <UsernameLink href={`${process.env.REACT_APP_PUBLIC_URL}/user/${props.user.name}`}>
                @{props.user.name}
            </UsernameLink>
        </UserFieldContainer>
    )
}

export { UserField };