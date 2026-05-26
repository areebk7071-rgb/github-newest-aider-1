import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext'; // Added theme import
import './index.css';

/**
 * Root entry point for the Vite + React application.
 * Wraps the entire app with global context providers:
 * - ThemeProvider for UI skinning/styling context
 * - HelmetProvider for SEO meta tags
 * - BrowserRouter for routing
 * - CartProvider for shopping‑cart state (MVP checkout)
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);