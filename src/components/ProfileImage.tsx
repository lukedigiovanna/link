import styled from 'styled-components';

interface Props {
    size?: number;
    centered?: boolean;
}

const ImageContainer = styled.div<Props>`
    width: ${(props: Props) => props.size ? props.size + 'px' : '50px'};
    height: ${(props: Props) => props.size ? props.size + 'px' : '50px'};
    border-radius: 50%;
    align-self: ${(props: Props) => props.centered ? 'center' : 'flex-start'};
    overflow: hidden;
`;

const Image = styled.img<{size?: number}>`
    width: ${(props: any) => props.size ? props.size + 'px' : '50px'};
`

function ProfileImage(props: { imageSrc: string, size?: number, centered?: boolean}) {
    return (
        <ImageContainer 
            className="profile-image"
            size={props.size}    
            centered 
            >
            <Image 
                size={props.size}
                alt="profile"
                onError={({currentTarget}) => {
                    currentTarget.onerror = null;
                    currentTarget.src = require("../assets/images/default-profile.jpeg");
                }}
                src={props.imageSrc} 
            
            />
        </ImageContainer>
    )
}

export { ProfileImage };