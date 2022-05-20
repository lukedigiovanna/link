import { userInfo } from "os";
import { User } from "../../types/user.type";
import { prettyPrintDate } from "../../utils/time";
import { ProfileImage } from "../ProfileImage";

function ProfileBlock(props: { user: User}) {
    return (
        <div className="profile-block">
            <ProfileImage imageSrc={props.user.avatarURL} />
            <div className='details'>
                <h1>
                    {props.user.firstName} {props.user.lastName}
                </h1>
                <h2>
                    @{props.user.name}
                </h2>
                <h3>
                    {props.user.createdAt ? "Joined" : ""}  {prettyPrintDate(props.user.createdAt)}
                </h3>
            </div>
        </div>
    )
}

export { ProfileBlock };