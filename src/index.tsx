import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

import App from './pages/app';
import api from './api';
import endpoints from './api/endpoints';
import store, { rrfProps } from './store';

import { auth, signInWithEmailAndPassword } from './firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Provider } from 'react-redux';

async function main() {
  try {
    // await api.post(endpoints.users(), {
    //   name: 'bingqilin',
    //   email: 'admin2@gmail.com',
    //   password: 'admin123',
    //   firstName: "Bing",
    //   lastName: "Qilin",
    //   avatarURL: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Vanilla-Reduced-Fat-Ice-Cream-Cone:1-3-product-tile-desktop?wid=765&hei=472&dpr=off"
    // });

    await signInWithEmailAndPassword(auth, "admin2@gmail.com", "admin123");
    
    // await api.post(endpoints.posts(), {
    //   body: "I love ice cream so much. Also Wazzup beijing",
    //   isReply: false
    // })

    await api.post(endpoints.reactionsToPost(16), {
      reaction: "like"
    })

    console.log(api.get(endpoints.postsByUser('lukedigiovanna')));
    console.log(api.get(endpoints.users()))
    console.log(api.get(endpoints.reactionsCount(9)));
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
