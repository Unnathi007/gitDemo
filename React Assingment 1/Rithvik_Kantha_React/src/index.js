import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/Counter"
import Navbar from "./components/navbar"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Navbar/>
    <Counter></Counter>
  </Fragment>
);