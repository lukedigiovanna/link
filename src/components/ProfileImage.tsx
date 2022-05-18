import defaultImage from '../assets/images/default-profile.jpeg';

function ProfileImage(props: { imageSrc: string}) {
    return (
        <img src={props.imageSrc} 
                 className="profile-image"
                 alt="profile"
                 onError={({currentTarget}) => {
                     currentTarget.onerror = null;
                     currentTarget.src = defaultImage;
                 }}>
        </img>
    )
}

export { ProfileImage };