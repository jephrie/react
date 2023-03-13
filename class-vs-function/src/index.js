import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppFn, AppClass } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='AppClass'>
      <h1>Class app</h1>
      <AppClass />
    </div>
    <div className='AppFn'>
      <h1>Functional app</h1>
      <AppFn />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
