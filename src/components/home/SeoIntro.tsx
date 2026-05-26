/**
 * Crawlable, human-readable summary for SEO and AI agents (visible, not hidden).
 */
import { pageSeo } from '../../config/pageSeo';

export default function SeoIntro() {
  return (
    <section
      className="border-y border-sage-200/80 dark:border-charcoal-700 bg-sage-50/50 dark:bg-charcoal-800/30 py-10 sm:py-12"
      aria-labelledby="nayab-seeds-summary"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 id="nayab-seeds-summary" className="text-lg sm:text-xl font-bold text-charcoal-900 dark:text-warm-50 mb-3 font-serif">
          Nayab Seeds — Grow the Extraordinary
        </h2>
        <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
          {pageSeo?.home?.h1Support || "Your trusted source to buy premium seeds online in Pakistan."} Discover our curated selection of 
          organic vegetable seeds, vibrant flower seeds, culinary herbs, and climate-resilient native plants. 
          Perfect for balcony gardening in Karachi or backyard farming across Pakistan. Take our interactive{' '}
          quiz to find the perfect seeds for your space, sunlight, and experience level.
        </p>
      </div>
    </section>
  );
}
