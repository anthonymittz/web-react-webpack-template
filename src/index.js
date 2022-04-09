import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './components/App';

const container = document.body;
const root = ReactDOMClient.createRoot(container);

root.render(<App />);