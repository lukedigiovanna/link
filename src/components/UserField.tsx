import styled from 'styled-components';
import { User } from '../types/user.type';

import { ProfileImage } from './ProfileImage';

const UserFieldComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 700px) {
        height: 27px;
    }

    height: 42px;

    .user-name {
        font-size: 0.9rem;
        margin: 0px; // allow full flex experience

        .user-link {
            text-decoration: none;
            color: $primary-text-color;
            transition: color 0.5s;
        }
    }
`

function UserField(props: { user: User}) {
    return (
        <UserFieldComponent>
            <ProfileImage imageSrc={props.user.avatarURL} />

            <p className='user-name'>
                <a className='user-link' href={`${process.env.REACT_APP_PUBLIC_URL}/user/${props.user.name}`}>
                    @{props.user.name}
                </a>
            </p>
        </UserFieldComponent>
    )
}

export { UserField };