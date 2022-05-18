import { User } from "../types/user.type";
import { UserField } from './UserField';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import api from '../api';
import endpoints from '../api/endpoints';
import { setUsers } from '../store/users';

function UserList() {
    const users = useSelector((state: any) => state.users);
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        // fetch the users from the api
        api.get(endpoints.users()).then((response) => {
            dispatch(setUsers(response.data));
        });
    }, [])

    return (
        <div className="user-list">
            <h1>
                <a href="../../">
                    Link
                </a>
            </h1>
            {users.users.map((user: User) => {
                return (
                    <UserField key={user.name} user={user} />
                )
            })}
            {users.users.map((user: User) => {
                return (
                    <UserField key={user.name} user={user} />
                )
            })}
            {users.users.map((user: User) => {
                return (
                    <UserField key={user.name} user={user} />
                )
            })}
            {users.users.map((user: User) => {
                return (
                    <UserField key={user.name} user={user} />
                )
            })}
            {users.users.map((user: User) => {
                return (
                    <UserField key={user.name} user={user} />
                )
            })}
        </div>
    )
}

export { UserList };