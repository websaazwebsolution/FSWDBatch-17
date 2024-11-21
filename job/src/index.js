import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';

import HelloWorld from './HelloWorld';
import Shop from './Shop';
import Button from './Button';
import Click from './Click';
import MyHome from './MyHome'; 
import Website from './site';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Website />
    {/* <MyHome /> */}
    {/* <App /> */}
    {/* <App /> */}
    {/* <HelloWorld /> */}
    {/* <Shop />
    <Shop />
    <Shop /> */}
    {/* <Click  button="Update"/>
    <Click  button="delete"/>
    <Click  button="info"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
