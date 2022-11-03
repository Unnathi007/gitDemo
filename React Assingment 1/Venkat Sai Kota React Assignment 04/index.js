import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Counters from './components/counter1';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import Todos from './components/todos';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todos/>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';


// const element =<h1>Hello World</h1>;
// ReactDOM.render(<Counter/>,document.getElementById('root'));