import { LoginBox } from "./modals/LoginBox";
import { SearchBar } from "./inputs/SearchBar";
import { MakePost } from "./modals/MakePost";
import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileImage } from "./ProfileImage";
import styled from 'styled-components'
import theme from '../constants/theme';
import { SignupBox } from "./modals/SignupBox";
import {auth, signOut} from '../constants/firebase';

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
    z-index: 10;

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
    font-family: ${theme.fonts.primary};
`

const NavbarLink = styled.a`
    color: ${theme.colors.secondaryTextColor};
    margin: 0;
    text-decoration: none;
    font-family: ${theme.fonts.primary};
    transition: color 0.5s;
    &:hover {
        color: ${theme.colors.primaryTextColor};
    }
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
                        <NavbarLink href={`${process.env.REACT_APP_PUBLIC_URL}/user/${user?.name}`}>
                            @{user?.name}
                        </NavbarLink>
                        <NavbarButton 
                            onClick={() => {setShowMakePost(true)}}
                        >
                            + Post
                        </NavbarButton>
                        <NavbarButton
                            onClick={() => {signOut(auth)}}
                            primary
                        >
                            Logout
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