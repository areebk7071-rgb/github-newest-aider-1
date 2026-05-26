import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Sun, Droplets, Clock, Star, Leaf, Bug, Sparkles } from 'lucide-react';
import type { Product } from '../../types';
import LazyImage from './LazyImage';

const difficultyColors: Record<string, string> = {
  Easy: 'bg-mint-100 dark:bg-mint-400/10 text-mint-700 dark:text-mint-400',
  Moderate: 'bg-sand-100 dark:bg-sand-500/10 text-sand-700 dark:text-sand-400',
  Advanced: 'bg-terracotta-100 dark:bg-terracotta-500/10 text-terracotta-700 dark:text-terracotta-400',
};

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onToggleWishlist?: (p: Product) => void;
  isInWishlist?: (id: string) => boolean;
  compact?: boolean;
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
  compact = false,
}: ProductCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white/80 dark:bg-charcoal-800/80 hover:bg-white dark:hover:bg-charcoal-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-sage-200/50 dark:border-charcoal-700/30 overflow-hidden h-full flex flex-col hover:-translate-y-1.5"
    >
      <Link to={`/product/${product.handle}`} className="block">
        <div className={`relative overflow-hidden ${compact ? 'h-40' : 'h-52'}`}>
          <LazyImage src={product.image} alt={product.name} className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Circular Nayab Quality Stamp */}
          <div className="absolute bottom-3 left-3 pointer-events-none z-10 select-none">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-dashed border-mint-700/80 bg-warm-100/90 dark:bg-charcoal-800/95 flex flex-col items-center justify-center -rotate-12 shadow-md">
              <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-extrabold text-mint-800 dark:text-mint-400 leading-none">Nayab</span>
              <span className="text-[6px] sm:text-[7px] uppercase tracking-widest font-bold text-charcoal-700 dark:text-warm-300 leading-none mt-0.5">Quality</span>
              <Leaf className="w-2.5 h-2.5 text-[#D4A62A] mt-1" />
            </div>
          </div>

          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
            {product.medicinal && (
              <span className="px-2.5 py-1 rounded-full bg-mint-800/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-extrabold flex items-center gap-1 shadow-sm">
                <Leaf className="w-3 h-3 text-[#D4A62A]" /> Medicinal
              </span>
            )}
            {product.native && (
              <span className="px-2.5 py-1 rounded-full bg-[#1F4D36]/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-extrabold flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#D4A62A]" /> Native
              </span>
            )}
          </div>
          {onToggleWishlist && isInWishlist && (
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); onToggleWishlist(product); }}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-charcoal-800/90 flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95 z-20"
              aria-label="Add to wishlist"
            >
              <Heart className={`w-4.5 h-4.5 ${isInWishlist(product.id) ? 'fill-terracotta-500 text-terracotta-500' : 'text-charcoal-400'}`} />
            </button>
          )}
          <div className="absolute bottom-3 right-3 flex items-center gap-0.5 px-2 py-1 rounded-full bg-white/90 dark:bg-charcoal-800/90 z-20">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className={`w-2.5 h-2.5 ${i < product.karachiRating ? 'fill-[#D4A62A] text-[#D4A62A]' : 'text-charcoal-300'}`} />
            ))}
          </div>
        </div>
      </Link>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <Link to={`/product/${product.handle}`}>
          <h3 className="font-bold text-charcoal-900 dark:text-warm-100 group-hover:text-mint-700 dark:group-hover:text-mint-400 transition-colors">{product.name}</h3>
          {product.nameUrdu && <p className="text-xs text-charcoal-400">{product.nameUrdu}</p>}
        </Link>
        {!compact && (
          <p className="text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed my-3 line-clamp-2 flex-1">{product.description}</p>
        )}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 text-[11px] sm:text-xs text-charcoal-500 flex-wrap">
          <span className={`px-2 py-0.5 rounded-full shrink-0 ${difficultyColors[product.difficulty]}`}>{product.difficulty}</span>
          <span className="flex items-center gap-1 shrink-0"><Sun className="w-3.5 h-3.5 text-terracotta-500" /><span className="truncate max-w-[5.5rem] sm:max-w-none">{product.sunlight}</span></span>
          <span className="hidden sm:flex items-center gap-1"><Droplets className="w-3.5 h-3.5 text-mint-500" />{product.watering}</span>
          {!compact && <span className="hidden md:flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{product.germinationDays}</span>}
        </div>
        <div className="flex items-center justify-between mt-auto gap-2">
          <p className="text-base sm:text-xl font-bold text-charcoal-900 dark:text-warm-100">Rs. {product.price}</p>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="btn-primary !py-2.5 !px-4 text-sm flex items-center gap-1.5 disabled:opacity-50 shrink-0"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
