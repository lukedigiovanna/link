import { User } from '../types/user.type';

import { ProfileImage } from './ProfileImage';

function UserField(props: { user: User}) {
    return (
        <div className="user-field">
            <ProfileImage imageSrc={props.user.avatarURL} />

            <p className='user-name'>
                <a className='user-link' href={`/users/${props.user.name}`}>
                    @{props.user.name}
                </a>
            </p>
        </div>
    )
}

export { UserField };