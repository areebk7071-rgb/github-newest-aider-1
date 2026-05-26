import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

/**
 * Root component of the application.
 * Wraps all pages with the persistent layout (navbar, cart drawer, footer)
 * and defines the client‑side routes.
 *
 * Only the pages that currently exist in the repository are routed.
 * Future pages (Blog, Education, Guide, etc.) can be added later
 * without affecting the current build.
 */
export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <MainLayout>
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Shop & product routes */}
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:handle" element={<ProductPage />} />

            {/* Additional static pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Catch‑all: redirect unknown URLs to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
}
