import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

render(
   <ConcurrentMode>
      <App />
   </ConcurrentMode>, document.getElementById('root')
);