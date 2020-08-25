"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './core/MainPage';

var titles=require('./titles.json');

ReactDOM.render(
  <MainPage categories={titles}/>
  , document.getElementById('container') 
);