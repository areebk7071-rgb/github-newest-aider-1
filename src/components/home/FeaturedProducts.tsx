import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Product } from '../../types';
import ProductCard from '../shared/ProductCard';
import { useCart } from '../../context/CartContext';

interface FeaturedProductsProps {
  products: Product[];
}

type FilterCategory = 'vegetables' | 'herbs' | 'flowers' | 'beginner';

const categoriesMenu = [
  { id: 'vegetables', label: 'Vegetables', icon: '🥬' },
  { id: 'herbs', label: 'Herbs & Medicinal', icon: '🌿' },
  { id: 'flowers', label: 'Flowers', icon: '🌸' },
  { id: 'beginner', label: 'Kits & Starters', icon: '📦' },
] as const;

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('vegetables');

  // Filter products by selectedCategory mapping
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'vegetables') {
      return product.category === 'vegetables' || product.shopTags.includes('vegetables');
    }
    if (selectedCategory === 'herbs') {
      return product.category === 'medicinal' || product.shopTags.includes('medicinal');
    }
    if (selectedCategory === 'flowers') {
      return product.category === 'flowers' || product.shopTags.includes('flowers');
    }
    if (selectedCategory === 'beginner') {
      return product.category === 'beginner-kits' || product.shopTags.includes('beginner');
    }
    return true;
  }).slice(0, 4);

  return (
    <section className="section-padding bg-warm-100 dark:bg-charcoal-900 border-y border-sage-200/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mint-100 dark:bg-mint-400/10 text-mint-800 dark:text-mint-400 text-xs font-bold uppercase tracking-widest mb-3">
              Premium Heirloom Collection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1F4D36] dark:text-warm-50">
              Heirloom Seeds That Matter
            </h2>
            <p className="text-sm text-charcoal-600 dark:text-charcoal-400 mt-2 max-w-xl">
              Each packet contains untreated, high-germination seeds tested in Karachi&apos;s unique coastal environment.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-mint-800 dark:text-mint-400 font-extrabold uppercase tracking-wider text-sm hover:gap-3 transition-all shrink-0"
          >
            <span>View All Seeds</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Dynamic Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Left Vertical Selector */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 bg-white/70 dark:bg-charcoal-800/70 backdrop-blur-md p-4 rounded-2xl border border-sage-200/40 dark:border-charcoal-700/40 shadow-sm flex lg:flex-col overflow-x-auto gap-2 lg:overflow-visible scrollbar-hide">
            {categoriesMenu.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl font-display font-extrabold text-base transition-all whitespace-nowrap lg:w-full text-left touch-manipulation cursor-pointer ${
                    active
                      ? 'bg-[#1F4D36] text-white shadow-md'
                      : 'text-charcoal-700 dark:text-warm-200 hover:bg-sage-100/50 dark:hover:bg-charcoal-800/50'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{cat.icon}</span>
                    <span>{cat.label}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 hidden lg:block transition-transform ${active ? 'translate-x-1 text-[#D4A62A]' : 'text-charcoal-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onToggleWishlist={toggleWishlist}
                    isInWishlist={isInWishlist}
                  />
                ))}
                {filteredProducts.length === 0 && (
                  <div className="col-span-full py-16 text-center text-charcoal-500">
                    Sowing seeds soon! No items listed under this category.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
