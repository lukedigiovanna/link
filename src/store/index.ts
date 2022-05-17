import { configureStore } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";
import usersReducer from "./users";
import firebase, { rrfConfig } from "../firebase";
import { createFirestoreInstance } from "redux-firestore";

const store = configureStore({
    reducer: {
        firebase: firebaseReducer,
        users: usersReducer
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