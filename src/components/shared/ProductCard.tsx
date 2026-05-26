import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import type { Product } from "../../types";

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
    <motion.div
      className="glass-card rounded-2xl overflow-hidden group flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.badges && (
          <div className="absolute top-2 left-2 flex gap-1">
            {product.badges.slice(0, 2).map((badge) => (
              <span
                key={badge}
                className="px-2 py-1 bg-mint-800 text-white text-xs rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        {onToggleWishlist && isInWishlist && (
          <button
            onClick={() => onToggleWishlist(product)}
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <Heart
              className={`w-4 h-4 ${
                isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-charcoal-600 dark:text-charcoal-300 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex-1" />
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-mint-800">Rs. {product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="p-2 bg-mint-800 text-white rounded-lg hover:bg-mint-900 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
