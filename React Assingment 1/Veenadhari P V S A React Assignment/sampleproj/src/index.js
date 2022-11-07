// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// import React,{Component} from "react";//imrc
// import ReactDOM from 'react-dom';//imrd
// import Counter from "./components/counter";
// import "bootstrap/dist/css/bootstrap.css";
// // const element=<h1>Heloo World</h1>
// // ReactDOM.render(element,document.getElementById("root"))
// ReactDOM.render(<Counter/>,document.getElementById("root"))





import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import "bootstrap/dist/css/bootstrap.css"

import Counters from './components/counters';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    {/* <App/> */}

    <Counters />

  </React.StrictMode>

);
