import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider>
           <App />
    </MuiThemeProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
