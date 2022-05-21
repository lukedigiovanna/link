import { configureStore } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";
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
});

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default store;
export { rrfProps };