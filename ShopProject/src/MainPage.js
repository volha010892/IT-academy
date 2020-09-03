﻿import React from 'react';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import { Header } from './components';
import { Cart, Home } from './pages';
//import combinedReducer from '../redux/reducers.js';
import './MainPage.css';
import { Route, Switch } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { itemsThunkAC } from '../redux/fetchThunk';

//const store = createStore(combinedReducer, applyMiddleware(thunk));

function MainPage() {
  const dispatch = useDispatch();
  React.useEffect(() => dispatch(itemsThunkAC(dispatch)), []);
  window.test=()=> {
    dispatch(itemsThunkAC(dispatch));
  }
  return (
    //<Provider store={store}>
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
    //</Provider>
  );
}
export default MainPage;
