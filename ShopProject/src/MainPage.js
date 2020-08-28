﻿import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Header} from './components';
import {  Cart, Home } from './pages';
import combinedReducer from '../redux/reducers.js';
import './MainPage.css';
import { Route } from 'react-router-dom';
import { withRouter } from "react-router";

let store = createStore(combinedReducer, applyMiddleware(thunk));

function MainPage() {
  return (
    <Provider store={store}>
      <div>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route path="" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default MainPage;
