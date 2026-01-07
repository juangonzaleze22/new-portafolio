import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import './i18n/config';

// Inicializar tema al cargar - por defecto light mode
const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || 'light';
document.documentElement.setAttribute('data-theme', initialTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
