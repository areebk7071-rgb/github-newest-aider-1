import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { CartProvider } from './context/CartContext';
import './index.css';

/**
 * Root entry point for the Vite + React application.
 * Wraps the entire app with:
 *  - BrowserRouter for routing
 *  - HelmetProvider for SEO meta tags
 *  - CartProvider for shopping‑cart state (MVP checkout)
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
