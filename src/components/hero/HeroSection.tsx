import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * HeroSection – the top‑most section of the home page.
 *
 * Implements the PRD requirements:
 *  • Uses brand colors and typography.
 *  • Provides two CTA buttons (Shop Seeds, Explore Plants) as the
 *    third “Start Growing” guide link has been removed per the latest
 *    requirements.
 *  • All interactive elements have accessible labels and a clear focus outline.
 *  • Motion animations are kept subtle for performance.
 */
export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-r from-[#1F4D36] to-[#4F7D4F] text-[#F6F2E8] py-20 md:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        {/* Animated heading */}
        <motion.h1
          id="hero-heading"
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey there, green thumbs! 👋
        </motion.h1>

        {/* Sub‑headline */}
        <motion.p
          className="font-body text-lg md:text-xl text-[#F6F2E8] max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Premium ecological seeds for Karachi’s gardens, balconies, and farms.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/shop"
            className="px-6 py-3 bg-[#F6F2E8] text-[#1F4D36] rounded-full font-medium hover:bg-[#fff] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F7D4F]"
            aria-label="Shop Seeds – Browse all seed products"
          >
            Shop Seeds
          </Link>

          <Link
            to="/education"
            className="px-6 py-3 bg-[#F6F2E8] text-[#1F4D36] rounded-full font-medium hover:bg-[#fff] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F7D4F]"
            aria-label="Explore Plants – Learn about our plant collection"
          >
            Explore Plants
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
