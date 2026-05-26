import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Sparkles, Sprout, ShieldCheck, Heart, Leaf } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const reducedMotion = usePrefersReducedMotion();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden z-10 pt-[5.5rem] sm:pt-24 lg:pt-28">
      {/* Background Image of seedlings & soil with warm sun overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1103485/pexels-photo-1103485.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Sunlit seedlings growing in rich soil"
          className="w-full h-full object-cover filter brightness-[0.80] dark:brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-100/40 via-[#1F4D36]/30 to-warm-100 dark:from-charcoal-900/40 dark:via-charcoal-900/30 dark:to-charcoal-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-100/10 via-transparent to-warm-100/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 w-full text-center flex flex-col items-center">
        
        {/* Sparkle badge */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 dark:bg-charcoal-900/90 border-2 border-[#D4A62A] mb-8 shadow-md"
        >
          <Sparkles className="w-4 h-4 text-[#D4A62A]" />
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#1F4D36] dark:text-warm-100">
            Karachi-Tested Heirloom Seeds
          </span>
        </motion.div>

        {/* Serif Headings: "Cultivate Your Legacy: Premium Heirloom Seeds" */}
        <motion.h1
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white text-shadow-lg mb-6 leading-tight max-w-4xl tracking-tight"
        >
          Cultivate Your Legacy:<br className="hidden sm:inline" />
          <span className="text-[#D4A62A]"> Premium Heirloom Seeds</span>
        </motion.h1>

        {/* Interactive Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="w-full max-w-xl relative flex items-center mb-6 px-2 sm:px-0"
        >
          <input
            type="text"
            placeholder="Search varieties (e.g. Mint, Moringa, Marigold)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-6 pr-16 py-4.5 min-h-[56px] rounded-full border-2 border-[#1F4D36]/30 bg-white/95 dark:bg-charcoal-800/95 text-charcoal-900 dark:text-warm-100 text-base sm:text-lg focus:ring-4 focus:ring-mint-500/20 focus:border-[#1F4D36] outline-none shadow-xl placeholder-charcoal-500 font-medium transition-all"
          />
          <button
            type="submit"
            className="absolute right-4 p-3 rounded-full bg-[#1F4D36] text-white hover:bg-mint-800 transition-colors shadow-md touch-manipulation flex items-center justify-center"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </motion.form>

        {/* Featured Pill Categories */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 text-sm mb-12 sm:mb-16 font-sans"
        >
          <span className="text-white/90 font-semibold tracking-wide uppercase">Featured categories:</span>
          
          <Link
            to="/shop?category=beginner"
            className="px-4 py-2 rounded-full bg-white/95 dark:bg-charcoal-800 border border-sage-200/50 hover:border-[#1F4D36] transition-all hover:scale-105 flex items-center gap-2 shadow-sm font-semibold text-[#1F4D36] dark:text-warm-200"
          >
            <Sprout className="w-4 h-4 text-mint-700" />
            <span>Featured Garden Mix</span>
          </Link>
          
          <Link
            to="/shop?category=native"
            className="px-4 py-2 rounded-full bg-white/95 dark:bg-charcoal-800 border border-sage-200/50 hover:border-[#1F4D36] transition-all hover:scale-105 flex items-center gap-2 shadow-sm font-semibold text-[#1F4D36] dark:text-warm-200"
          >
            <Leaf className="w-4 h-4 text-mint-700" />
            <span>Nayab Perfection Peas</span>
          </Link>
        </motion.div>

        {/* Small trust markers */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#1F4D36]/90 flex items-center justify-center mb-2 shadow-sm">
              <Sprout className="w-5 h-5 text-[#D4A62A]" />
            </div>
            <span className="font-extrabold text-sm sm:text-base">98% Germination</span>
            <span className="text-[10px] text-sage-200 mt-0.5">High Batch Quality</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#1F4D36]/90 flex items-center justify-center mb-2 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#D4A62A]" />
            </div>
            <span className="font-extrabold text-sm sm:text-base">Karachi-Tested</span>
            <span className="text-[10px] text-sage-200 mt-0.5">Summer Survivor Species</span>
          </div>

          <div className="flex flex-col items-center text-center col-span-2 sm:col-span-1">
            <div className="w-10 h-10 rounded-full bg-[#1F4D36]/90 flex items-center justify-center mb-2 shadow-sm">
              <Heart className="w-5 h-5 text-[#D4A62A]" />
            </div>
            <span className="font-extrabold text-sm sm:text-base">100% Organic</span>
            <span className="text-[10px] text-sage-200 mt-0.5">Untreated, Heirloom</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
