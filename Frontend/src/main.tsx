import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.scss';
import "@fontsource/roboto";
import "@fontsource/outfit";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
