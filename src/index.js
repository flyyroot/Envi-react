import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import Main from './component/Main';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navbar/> */}
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
