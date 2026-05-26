import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * BeginnerGardening – a call‑to‑action for new gardeners.
 *
 * Includes:
 *   • An illustration placeholder (replace with an SVG/illustration later).
 *   • A short copy that matches the brand voice.
 *   • A primary CTA button linking to the education page.
 *
 * Accessibility:
 *   • All interactive elements have focus styles.
 *   • The image uses alt text; if an SVG is used, aria‑hidden is set.
 */
export default function BeginnerGardening() {
  return (
    <section
      className="bg-[#D4A62A] text-[#F6F2E8] py-16 md:py-24"
      aria-labelledby="beginner-heading"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Illustration – replace with real asset later */}
        <motion.img
          src="/images/beginner-garden.svg"
          alt="A happy beginner gardener holding a seed packet"
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        />

        <div className="flex-1 text-center md:text-left">
          <motion.h3
            id="beginner-heading"
            className="font-display text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            New to Gardening? Start Here.
          </motion.h3>

          <motion.p
            className="font-body text-lg md:text-xl mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Our beginner‑friendly guide walks you through choosing the right seed,
            preparing soil, and caring for your first plants—no experience required.
          </motion.p>

          <Link
            to="/education"
            className="inline-block px-6 py-3 bg-[#F6F2E8] text-[#1F4D36] rounded-full font-medium hover:bg-[#fff] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F7D4F]"
          >
            Read the Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
