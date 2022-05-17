import React from "react";
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import UserPage from './UserPage';
import Paths from '../paths';

export default function App() {
    return (
        <Routes>
            <Route path={Paths.Main} element={<MainPage />} />
            <Route path={Paths.User} element={<UserPage />} />
            <Route path={Paths.Login} element={<LoginPage />} />
            <Route path={Paths.Register} element={<RegisterPage />} /> 
        </Routes>
    )
}