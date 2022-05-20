import defaultImage from '../assets/images/default-profile.jpeg';
import styled from 'styled-components';

interface Props {
    size?: number;
}

const Image = styled.img<Props>`
    width: ${(props: Props) => props.size ? props.size + 'px' : '50px'};
    height: ${(props: Props) => props.size ? props.size + 'px' : '50px'};
    border-radius: 50%;
`;

function ProfileImage(props: { imageSrc: string, size?: number}) {
    return (
        <Image 
            src={props.imageSrc} 
            className="profile-image"
            alt="profile"
            onError={({currentTarget}) => {
                currentTarget.onerror = null;
                currentTarget.src = defaultImage;
            }}
            size={props.size}     
        />
    )
}

export { ProfileImage };