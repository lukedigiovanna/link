import { User } from '../types/user.type';

function UserField(props: { user: User}) {
    return (
        <>
            <h1>
                {props.user.firstName} {props.user.lastName} - @{props.user.name}
            </h1>
            <img src={props.user.avatarURL}>
            </img>
        </>
    )
}

export { UserField };