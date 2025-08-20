// src/index.js (CRA)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // si tu App está en App.js, cambia a './App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opcional: mide rendimiento en consola o envíalo a un endpoint
// reportWebVitals(console.log);
reportWebVitals();
