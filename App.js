"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ComponentTable from './components/ComponentTable';

var titles=require('./titles.json');
var listItems=require('./items.json');
let textError="Please, fill the field";
ReactDOM.render(
    <ComponentTable
    items={listItems}
    title={titles}
    startWorkMode={0}
    textError={textError}
    />
, document.getElementById('container')
);
