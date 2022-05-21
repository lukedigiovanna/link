import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import UserPage from './UserPage';
import Paths from '../constants/paths';

// add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/all.scss';
import { NavBar } from "../components/NavBar";
import { PostPage } from "./PostPage";
import { auth, onAuthStateChanged } from "../constants/firebase";
import api from '../api';
import endpoints from '../api/endpoints'
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../store/users";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // at the root, check for changes to our authorization
        onAuthStateChanged(auth, (user) => {
            // fetch user information
            if (user) {
                console.log(user.uid);
                api.get(endpoints.user(user.uid)).then(response => {
                    dispatch(setCurrentUser(response.data));
                });
            }
        });
    })

    const [searchTerm, setSearchTerm] = React.useState("");

    return (
        <>
            <NavBar onSearch={(term) => {setSearchTerm(term)}}/>

            <Routes>
                <Route path={Paths.Main} element={<MainPage searchTerm={searchTerm}/>} />
                <Route path={Paths.User} element={<UserPage />} />
                <Route path={Paths.Post} element={<PostPage />} />
            </Routes>
        </>
    )
}