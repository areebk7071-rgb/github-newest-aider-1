import { motion } from "framer-motion";
import Seo from "../components/shared/Seo";
import pageSeo from "../config/pageSeo";

export default function BlogPage() {
  return (
    <>
      <Seo
        title={pageSeo.blog.title}
        description={pageSeo.blog.description}
        path="/blog"
        includeFaqSchema
      />

      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <motion.h1
          className="font-display text-4xl mb-6 text-[#1F4D36]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Learning Hub
        </motion.h1>

        <p className="font-body text-lg text-[#4F7D4F]">
          Our blog will soon feature gardening guides, Karachi planting tips,
          balcony gardening ideas, composting tutorials, native plant spotlights,
          beginner gardening advice, pollinator‑friendly planting, and seasonal
          planting calendars. Stay tuned for fresh, SEO‑optimized content that
          helps you grow confidently.
        </p>
      </section>
    </>
  );
}
