import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { actionTypes, firebaseReducer } from "react-redux-firebase";
import usersReducer from "./users";
import postsReducer from './posts';
import firebase, { rrfConfig } from "../constants/firebase";
import { createFirestoreInstance } from "redux-firestore";

const store = configureStore({
    reducer: {
        firebase: firebaseReducer,
        users: usersReducer,
        posts: postsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    actionTypes.LOGIN,
                    actionTypes.AUTH_LINK_ERROR,
                    actionTypes.SET_PROFILE
                ],
                ignoredPaths: ["firebase.profile"]
            }
        })
});

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default store;
export { rrfProps };