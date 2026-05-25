import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/ecommerce/CartDrawer';

export default function MainLayout() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-warm-50 dark:bg-charcoal-900 transition-colors">
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <main className="flex-1">
        {/* When using React Router v6 with a layout component, children are rendered via <Outlet> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
