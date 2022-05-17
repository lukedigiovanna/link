// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ReactReduxFirebaseConfig } from 'react-redux-firebase';
import { getAuth, Auth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDfVGO7x81mXo-jjvstYYyfHpcprd8Q40E",
  authDomain: "link-b2a31.firebaseapp.com",
  projectId: "link-b2a31",
  storageBucket: "link-b2a31.appspot.com",
  messagingSenderId: "828191446161",
  appId: "1:828191446161:web:1ef2418d515aba43339b30",
  measurementId: "G-QCXLXTB7CD"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth: Auth = getAuth();

const rrfConfig: Partial<ReactReduxFirebaseConfig> = {
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady: true
};

export { rrfConfig, auth, signInWithEmailAndPassword };