import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App.jsx';

//by using createRoot here we are onboarding concurrent mode in the experimental react version

render(
   ReactDOM.createRoot(
      document.getElementById('root')
    ).render(<App />)
);