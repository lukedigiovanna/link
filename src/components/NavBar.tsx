import { LoginBox } from "./modals/LoginBox";
import { SearchBar } from "./inputs/SearchBar";
import { MakePost } from "./modals/MakePost";
import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileImage } from "./ProfileImage";



function NavBar(props: {onSearch: (searchTerm: string) => void}) {
    const [showMakePost, setShowMakePost] = React.useState(false);
    const [showLoginBox, setShowLoginBox] = React.useState(false);
    const [authenticated, setAuthenticated] = React.useState(false);
    const user = useSelector((state: any) => state.users.currentUser);

    return (
        <nav className="navbar-t">
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
        </nav>
    );
}

export  { NavBar };