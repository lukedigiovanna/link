import { LoginBox } from "./modals/LoginBox";
import { SearchBar } from "./inputs/SearchBar";
import { MakePost } from "./modals/MakePost";
import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileImage } from "./ProfileImage";
import styled from 'styled-components'

const NavBarComponent = styled.nav`
    background-color: lighten($background-color, 20%);
    position: fixed;
    top: 0;
    left: min(25vw, 250px);
    width: calc(100vw - min(25vw, 250px));
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: 10px;

    @media screen and (max-width: 550px) {
        left: 0;
        width: 100vw;
    }

    .signed-in {
        display: flex;
        flex-direction: row;
        align-items: center;
        * {
            margin-inline: 10px;
        }
        p {
            color: $primary-text-color;
            margin: 0;
        }
        img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }
    }

    button {
        background-color: $primary-color;
        color: $primary-text-color;
        border-radius: 5px;
        border: none;
        padding-inline: 10px;
        font-size: 1.2rem;
        transition: 0.4s;
        
        h1 {
            margin: 0;
            font-size: 1.4rem;
        }
    
        &:hover {
            background-color: lighten($primary-color, 10%);
            font-size: 1.3rem;
        }
    }
`

function NavBar(props: {onSearch: (searchTerm: string) => void}) {
    const [showMakePost, setShowMakePost] = React.useState(false);
    const [showLoginBox, setShowLoginBox] = React.useState(false);
    const user = useSelector((state: any) => state.users.currentUser);

    return (
        <NavBarComponent>
            <SearchBar onSearch={(term: string) => {props.onSearch(term)}}/>

            {
                user !== null ? 
                    (<div className='signed-in'>
                        <ProfileImage imageSrc={user?.avatarURL}/>
                        <p>
                            @{user?.name}
                        </p>
                        <button onClick={() => {setShowMakePost(true)}}>
                            + Post
                        </button>
                    </div>) :
                    (<>
                        <button onClick={() => {setShowLoginBox(true)}}>
                            Login
                        </button>
                    </>)
            }
            
            <LoginBox show={showLoginBox} onClose={() => {setShowLoginBox(false)}} />
            <MakePost show={showMakePost} onClose={() => {setShowMakePost(false)}} />
        </NavBarComponent>
    );
}

export  { NavBar };