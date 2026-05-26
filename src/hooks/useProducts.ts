import { useState, useEffect } from "react";
import type { Product } from "../types";
import { localProducts } from "../data/products";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadProducts = async () => {
      try {
        if (!cancelled) {
          setProducts(localProducts);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load products");
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => { cancelled = true; };
  }, []);

  return { products, loading, error };
}
