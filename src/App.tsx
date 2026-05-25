import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import QuizPage from './pages/QuizPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NativeKarachiPage from './pages/NativeKarachiPage';
import CommunityPage from './pages/CommunityPage';
import MainLayout from './layouts/MainLayout';

/**
 * Root component of the application.
 * It wraps all pages with the persistent layout (navbar, footer, cart drawer)
 * and defines the client‑side routes.
 *
 * If any of the imported page components are missing, Vite will throw a clear
 * error during compilation, preventing a silent white screen.
 */
export default function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Shop & product routes */}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:handle" element={<ProductPage />} />

        {/* Additional pages */}
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/native-karachi" element={<NativeKarachiPage />} />
        <Route path="/community" element={<CommunityPage />} />

        {/* Catch‑all: redirect unknown URLs to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
