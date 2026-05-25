import { useState, ReactNode } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/ecommerce/CartDrawer';

/**
 * Layout component that provides the persistent UI elements
 * (navbar, cart drawer, footer) around page content.
 *
 * It receives the page content as `children` from App.tsx.
 */
export default function MainLayout({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-warm-50 dark:bg-charcoal-900 transition-colors">
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      {/* Render the page component passed from App */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
