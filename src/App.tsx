import { Routes, Route } from "react-router-dom";

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
 * Defines the client‑side routes within the layout.
 *
 * Note: BrowserRouter is defined in main.tsx, not here.
 * This component only handles the route configuration.
 *
 * Future pages (Native Karachi, etc.) can be added later.
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
  );
}
