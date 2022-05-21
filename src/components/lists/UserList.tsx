import { User } from "../../types/user.type";
import { UserField } from '../UserField';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import api from '../../api';
import endpoints from '../../api/endpoints';
import { fetchUsersList } from "../../store/users";
import { setUsers } from '../../store/users';
import styled from "styled-components";
import theme from "../../constants/theme";
import store from "../../store";

const UserListContainer = styled.div`
     @media screen and (max-width: 550px) {
        display: none;
    }
    top: 0;
    left: 0;
    position: fixed;

    height: 100vh;
    padding-left: 20px;

    background-color: ${theme.colors.backgroundColorLight10};
    border-right: 1px solid ${theme.colors.backgroundColorLight10};

    max-width: 250px;
    width: 25vw;
    min-width: 150px;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`

const TitleLink = styled.a`
    color: ${theme.colors.primaryColor};
    text-decoration: none;
    font-size: 3rem;
    font-weight: bold;
    font-family: ${theme.fonts.primary};
    transition: 0.4s;

    &:hover {
        color: ${theme.colors.primaryColorLight10};
    }
`


function UserList() {
    const users = useSelector((state: any) => state.users);
    console.log(users);
    const dispatch = useDispatch<typeof store.dispatch>();
    // const dispatch = useDispatch();

    useEffect(() => {
        // api.get(endpoints.users()).then((response) => {
        //     dispatch(setUsers(response.data));
        // });
        
        dispatch(fetchUsersList());
    }, []);

    return (
        <UserListContainer>
            <TitleLink href={process.env.REACT_APP_PUBLIC_URL}>
                Link
            </TitleLink>
            {
                users.users.map((user: User) => {
                    return (
                        <UserField key={user.name} user={user} />
                    )
                })
                
            }
        </UserListContainer>
    )
}

export { UserList };