import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// import reportWebVitals from './reportWebVitals';
// import Counters from './components/counters';
// import LifeCycle from './components/lifeCycle';
import App from './components/hookRef';
import Users from './components/users' ;
import Component1 from './components/hookContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App/>
</React.StrictMode>
);


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// const ele =<h1>hihihihiihi</h1>;
// const root =ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(counter);
// ReactDOM.render(<App/>,document.getElementById('root'));