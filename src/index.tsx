import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

import App from './pages/app';
import api from './api';
import endpoints from './api/endpoints';
import store, { rrfProps } from './store';

import { auth, signInWithEmailAndPassword, signOut } from './firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Provider } from 'react-redux';

async function main() {
  try {
    // signOut(auth);
    // await signInWithEmailAndPassword(auth, "admin2@gmail.com", "admin123");
    // console.log("Signed in");
  }
  catch (error) {
    console.log(error);
  }
}

// main();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
