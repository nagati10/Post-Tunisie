//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

import './index.css';
import App from './components/App';

// Replace ReactDOM.render with createRoot
const root = document.getElementById('root');
createRoot(root).render(<App />);
