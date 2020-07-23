"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Frame from './Frame';
let text="первый<br>второй<br/>третий<br />последний";
ReactDOM.render(   
  <Frame text={text}></Frame>
  , document.getElementById('container') 
);