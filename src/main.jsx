import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// IMPORT-BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// IMPORT CUSTOM-STYLES
import './assets/scss/style.scss';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
