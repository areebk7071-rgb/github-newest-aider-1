import { useProducts } from "../hooks/useProducts";
import Seo from "../components/shared/Seo";
import pageSeo from "../config/pageSeo";
import HeroSection from "../components/hero/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import FeaturedCategories from "../components/home/FeaturedCategories";
import EcologicalMission from "../components/home/EcologicalMission";
import BeginnerGardening from "../components/home/BeginnerGardening";
import Testimonials from "../components/home/Testimonials";
import BlogPreview from "../components/home/BlogPreview";
import NewsletterSignup from "../components/home/NewsletterSignup";
import SeoIntro from "../components/home/SeoIntro";

export default function HomePage() {
  const { products } = useProducts();

  return (
    <>
      {/* SEO – includes FAQ schema for the home page */}
      <Seo
        title={pageSeo.home.title}
        description={pageSeo.home.description}
        path="/"
        includeFaqSchema
      />

      {/* Hero Section – brand‑driven, accessible, three CTAs */}
      <HeroSection />

      {/* Visible, crawlable summary for SEO and AI search engines */}
      <SeoIntro />

      {/* Featured Seeds */}
      <FeaturedProducts products={products} />

      {/* Categories */}
      <FeaturedCategories />

      {/* Ecological Mission */}
      <EcologicalMission />

      {/* Beginner Gardening Section */}
      <BeginnerGardening />

      {/* Testimonials */}
      <Testimonials />

      {/* Blog preview */}
      <BlogPreview />

      {/* Newsletter signup */}
      <NewsletterSignup />
    </>
  );
}
