﻿import React from 'react';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import { Header } from './components';
import { Cart, Home } from './pages';
//import combinedReducer from '../redux/reducers.js';
import './MainPage.css';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { itemsThunkAC } from '../redux/fetchThunk';

function MainPage() {

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
