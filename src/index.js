import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import reportWebVitals from './reportWebVitals';
import Weather from './Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <a href="https://github.com/Zizo95/React-weather-app" target="_blank" rel="noopener noreferrer">Open source by</a> Zizo Brown
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
