import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const basename = process.env.NODE_ENV === 'production' ? '/react/got/build' : '/';
const basename = process.env.REACT_APP_BASENAME || "/";

root.render(
  <React.StrictMode>
    <BrowserRouter  basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);