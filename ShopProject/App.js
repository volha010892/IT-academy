'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import MainPage from './src/MainPage';
import * as firebase from 'firebase';

const firebaseCongig = {
  apiKey: 'AIzaSyAoXpI4H3LoFGWH_c9YTe-5Hvqr9WdMY9g',
  authDomain: 'ishop-57739.firebaseapp.com',
  databaseURL: 'https://ishop-57739.firebaseio.com',
  projectId: 'ishop-57739',
  storageBucket: 'ishop-57739.appspot.com',
  messagingSenderId: '568551176308',
  appId: '1:568551176308:web:fa09ee8fa7e960cac1b921',
};

firebase.initializeApp(firebaseCongig);

ReactDOM.render(
  <HashRouter>
    <MainPage />
  </HashRouter>,
  document.getElementById('container'),
);
