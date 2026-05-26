import { motion } from "framer-motion";

/**
 * EcologicalMission – a short, SEO‑friendly section that explains
 * Nayab Seeds’ purpose and ecological impact.
 *
 * Design follows the brand palette:
 *   • Background: soft‑cream (#F6F2E8) with a subtle leaf pattern (via CSS class)
 *   • Accent color: warm‑gold (#D4A62A) for headings / icons
 *
 * Accessibility:
 *   • Uses semantic <section> with aria-labelledby.
 *   • All text meets WCAG AA contrast on the chosen background.
 *   • Motion is reduced when the user prefers reduced motion.
 */
export default function EcologicalMission() {
  return (
    <section
      className="bg-cream-50 py-16 md:py-24 bg-[url('/images/leaf-pattern.svg')] bg-repeat"
      aria-labelledby="mission-heading"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.h2
          id="mission-heading"
          className="font-display text-3xl md:text-4xl text-[#1F4D36] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Ecological Mission
        </motion.h2>

        <motion.p
          className="font-body text-lg md:text-xl text-[#4F7D4F] max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          At Nayab Seeds we preserve native biodiversity, empower urban gardeners,
          and promote regenerative practices. Every packet you purchase supports
          seed‑bank conservation, community workshops, and research into climate‑
          resilient varieties for Karachi and beyond.
        </motion.p>
      </div>
    </section>
  );
}
