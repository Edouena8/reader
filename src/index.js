import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import publications from './publications.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App items={publications}/>
  </React.StrictMode>
);
