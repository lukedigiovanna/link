import React from "react";
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import UserPage from './UserPage';
import Paths from '../paths';

// add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/all.scss';
import { NavBar } from "../components/NavBar";
import { PostPage } from "./PostPage";

export default function App() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path={Paths.Main} element={<MainPage />} />
                <Route path={Paths.User} element={<UserPage />} />
                <Route path={Paths.Login} element={<LoginPage />} />
                <Route path={Paths.Register} element={<RegisterPage />} /> 
                <Route path={Paths.Post} element={<PostPage />} />
            </Routes>
        </>
    )
}