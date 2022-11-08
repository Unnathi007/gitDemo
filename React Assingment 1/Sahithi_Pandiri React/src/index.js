import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/increment';
import "bootstrap/dist/css/bootstrap.css"
import Users from './Components/users';

import Counters from './Components/counters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users/>
  </React.StrictMode>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// const element=<h1>Hello World</h1>
// ReactDOM.render(element,document.getElementById("root"));