"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';
let titles=require('./titles.json');
let clientsArr=require('./clients.json');
let companyName='Velcom';

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
    titles={titles}
    startWorkMode={1}
  />
  , document.getElementById('container') 
);