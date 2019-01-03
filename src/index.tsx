import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './containers/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  window.document.getElementById('app')
);
