import { LoginBox } from "./modals/LoginBox";
import { SearchBar } from "./inputs/SearchBar";
import { MakePost } from "./modals/MakePost";
import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileImage } from "./ProfileImage";
import styled from 'styled-components'
import theme from '../constants/theme';
import { ThemeProviderProps } from "react-bootstrap";
import { SignupBox } from "./modals/SignupBox";

const NavBarContainer = styled.nav`
    background-color: ${theme.colors.backgroundColorLight20};
    position: fixed;
    top: 0;
    left: min(25vw, 250px);
    width: calc(100vw - min(25vw, 250px));
    height: ${theme.spacing.navbarHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: 10px;

    @media screen and (max-width: 550px) {
        left: 0;
        width: 100vw;
    }
`

const SignedInDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    * {
        margin-inline: 10px;
    }
`

const NavbarText = styled.p`
    color: ${theme.colors.primaryTextColor};
    margin: 0;
`

const NavbarButton = styled.button<{ primary?: boolean}>`
    background-color: ${props => props.primary ? theme.colors.primaryColor : "white"};
    color: ${props => props.primary ? theme.colors.primaryTextColor : theme.colors.primaryColor};
    border: none;
    border-radius: 5px;
    padding-inline: 10px;
    font-size: 1rem;
    transition: 0.4s;
    margin-inline: 6px;

    &:hover {
        background-color: ${props => props.primary ? theme.colors.primaryColorLight10 : "lightgray"};
        font-size: 1.05rem;
    }
`

function NavBar(props: {onSearch: (searchTerm: string) => void}) {
    const [showMakePost, setShowMakePost] = React.useState(false);
    const [showLoginBox, setShowLoginBox] = React.useState(false);
    const [showSignupBox, setShowSignupBox] = React.useState(false);
    const user = useSelector((state: any) => state.users.currentUser);

    return (
        <NavBarContainer>
            <SearchBar onSearch={(term: string) => {props.onSearch(term)}}/>

            {
                user !== null ? 
                    (<SignedInDetails>
                        <ProfileImage imageSrc={user?.avatarURL} size={35}/>
                        <NavbarText>
                            @{user?.name}
                        </NavbarText>
                        <NavbarButton 
                            onClick={() => {setShowMakePost(true)}}
                            primary
                        >
                            + Post
                        </NavbarButton>
                    </SignedInDetails>) :
                    (<div> 
                        <NavbarButton 
                            onClick={() => {setShowLoginBox(true)}}
                        >
                            Login
                        </NavbarButton>
                        <NavbarButton 
                            onClick={() => {setShowSignupBox(true)}}
                            primary
                        >
                            Sign Up
                        </NavbarButton>
                    </div>)
            }
            
            <SignupBox show={showSignupBox} onClose={() => {setShowSignupBox(false)}}/>
            <LoginBox show={showLoginBox} onClose={() => {setShowLoginBox(false)}} />
            <MakePost show={showMakePost} onClose={() => {setShowMakePost(false)}} />
        </NavBarContainer>
    );
}

export  { NavBar };