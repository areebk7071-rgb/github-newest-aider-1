import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import EducationPage from "./pages/EducationPage";
import QuizPage from "./pages/QuizPage";

/**
 * Root component of the application.
 * Wraps all pages with the persistent layout (navbar, cart drawer, footer)
 * and defines the client‑side routes.
 *
 * Future pages (Native Karachi, etc.) can be added later.
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

            {/* Static pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/quiz" element={<QuizPage />} />

            {/* Catch‑all: redirect unknown URLs to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
}
