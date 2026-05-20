import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Sun, Droplets, Clock, Star, Leaf, Bug, Sparkles, Filter } from 'lucide-react';
import { products, categories } from '../../data/products';
import { useCart } from '../../context/CartContext';
import type { Product } from '../../types';

const difficultyColors: Record<string, string> = {
  Easy: 'bg-mint-100 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400',
  Moderate: 'bg-sand-100 dark:bg-sand-500/10 text-sand-700 dark:text-sand-400',
  Advanced: 'bg-terracotta-100 dark:bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-400',
};

const sunlightColors: Record<string, string> = {
  'Full Sun': 'text-terracotta-500',
  'Partial Sun': 'text-sand-500',
  'Partial Shade': 'text-sage-500',
  'Full Shade': 'text-charcoal-400',
};

const wateringColors: Record<string, string> = {
  Low: 'text-sand-500',
  Moderate: 'text-mint-500',
  High: 'text-blue-500',
};

function ProductCard({ product, onAddToCart, onToggleWishlist, isInWishlist }: {
  product: Product;
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (p: Product) => void;
  isInWishlist: (id: string) => boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      className="group bg-white dark:bg-charcoal-800 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-sage-100 dark:border-charcoal-700 overflow-hidden"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.medicinal && (
            <span className="px-2 py-0.5 rounded-full bg-mint-500/90 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
              <Leaf className="w-3 h-3" /> Medicinal
            </span>
          )}
          {product.pollinator && (
            <span className="px-2 py-0.5 rounded-full bg-sage-500/90 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
              <Bug className="w-3 h-3" /> Pollinator
            </span>
          )}
          {product.native && (
            <span className="px-2 py-0.5 rounded-full bg-terracotta-500/90 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Native
            </span>
          )}
          {product.edible && (
            <span className="px-2 py-0.5 rounded-full bg-sand-500/90 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
              Edible
            </span>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product); }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-charcoal-800/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
        >
          <Heart className={`w-4 h-4 transition-colors ${isInWishlist(product.id) ? 'fill-terracotta-500 text-terracotta-500' : 'text-charcoal-400'}`} />
        </motion.button>

        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 dark:bg-charcoal-800/90 backdrop-blur-sm">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < product.karachiRating ? 'fill-terracotta-400 text-terracotta-400' : 'text-charcoal-300'}`} />
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-bold text-charcoal-900 dark:text-warm-100 group-hover:text-mint-700 dark:group-hover:text-mint-400 transition-colors">{product.name}</h3>
            {product.nameUrdu && <p className="text-xs text-charcoal-400 dark:text-charcoal-500">{product.nameUrdu}</p>}
          </div>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[product.difficulty]}`}>
            {product.difficulty}
          </span>
        </div>

        <p className="text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-4 mb-4 text-xs text-charcoal-500 dark:text-charcoal-400">
          <div className="flex items-center gap-1">
            <Sun className={`w-3.5 h-3.5 ${sunlightColors[product.sunlight]}`} />
            <span>{product.sunlight}</span>
          </div>
          <div className="flex items-center gap-1">
            <Droplets className={`w-3.5 h-3.5 ${wateringColors[product.watering]}`} />
            <span>{product.watering}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-sage-500" />
            <span>{product.germinationDays}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-charcoal-900 dark:text-warm-100">Rs. {product.price}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="btn-primary !py-2.5 !px-4 text-sm flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="gradient-mint section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint-100/80 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400 text-sm font-medium mb-4">Our Collection</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-warm-50 mb-4">Seeds That Grow Here</h2>
          <p className="text-charcoal-600 dark:text-charcoal-300 max-w-2xl mx-auto">Every seed in our collection has been tested in Karachi's climate. We only sell what grows.</p>
        </motion.div>

        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <Filter className="w-4 h-4 text-charcoal-400 flex-shrink-0" />
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-mint-600 text-white shadow-lg shadow-mint-600/25'
                : 'bg-white/60 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-charcoal-300 hover:bg-mint-50 dark:hover:bg-mint-400/5'
            }`}
          >
            All
          </button>
          {categories.slice(0, 6).map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-mint-600 text-white shadow-lg shadow-mint-600/25'
                  : 'bg-white/60 dark:bg-charcoal-800/60 text-charcoal-600 dark:text-charcoal-300 hover:bg-mint-50 dark:hover:bg-mint-400/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isInWishlist={isInWishlist}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-charcoal-400 dark:text-charcoal-500">No products found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
