import type { Product } from '../types';
import { localProducts } from '../data/products';

export async function getProducts(): Promise<Product[]> {
  return localProducts;
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const product = localProducts.find((p) => p.handle === handle);
  return product ?? null;
}

export function getProductByHandleSync(handle: string): Product | undefined {
  return localProducts.find((p) => p.handle === handle);
}

export function clearProductCache() {
  // No-op for local products
}
