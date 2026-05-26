import { motion } from "framer-motion";
import Seo from "../components/shared/Seo";
import pageSeo from "../config/pageSeo";

/**
 * QuizPage – placeholder for the future plant‑quiz feature.
 * The page is intentionally minimal but includes proper SEO metadata
 * and a clear call‑to‑action indicating that the quiz is coming soon.
 */
export default function QuizPage() {
  return (
    <>
      <Seo
        title="Plant Quiz – Coming Soon"
        description="A personalized plant quiz will help you discover the perfect seeds for your garden. Stay tuned!"
        path="/quiz"
        includeFaqSchema
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 text-center">
        <motion.h1
          className="font-display text-4xl md:text-5xl text-[#1F4D36] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Plant Quiz – Coming Soon
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-[#4F7D4F] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We’re working on an interactive quiz that will recommend seeds based on
          your space, sunlight, experience level, and climate. Check back soon
          for the launch!
        </motion.p>

        <motion.div
          className="inline-block px-6 py-3 bg-[#F6F2E8] text-[#1F4D36] rounded-full font-medium hover:bg-[#fff] transition"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Stay Updated
        </motion.div>
      </section>
    </>
  );
}
