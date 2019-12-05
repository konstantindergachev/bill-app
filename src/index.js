import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BillProvider } from './context/BillContext';
import './index.scss';

ReactDOM.render(
  <BillProvider>
    <App />
  </BillProvider>,
  document.getElementById('root')
);
