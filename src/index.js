import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ToastContextProvider from './contexts/toastContext';

ReactDOM.render(
  <ToastContextProvider>
    <App />
  </ToastContextProvider>,
  document.getElementById('root')
);