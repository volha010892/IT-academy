"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MainPage from './core/MainPage';

ReactDOM.render(
  <BrowserRouter>
  <MainPage/>
  </BrowserRouter>
  , document.getElementById('container') 
);