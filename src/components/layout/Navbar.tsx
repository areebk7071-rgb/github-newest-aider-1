import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingCart, Sun, Moon, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/quiz', label: 'Take Plant Quiz' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ cartOpen, setCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const { isDark, toggle } = useTheme();
  const location = useLocation();

  // Add a subtle shadow / background change after scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-2 sm:inset-x-4 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 dark:bg-charcoal-800/90 shadow-md' : 'bg-white/70 dark:bg-charcoal-800/70'
        } backdrop-blur-sm rounded-xl`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14 sm:h-16 px-4">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 font-bold text-mint-600">
            <img src="/logo.png" alt="Nayab Seeds" className="h-9 w-9 rounded-lg object-cover" />
            <span className="text-lg">Nayab Seeds</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-mint-600 bg-mint-100/30'
                      : 'text-charcoal-700 dark:text-charcoal-300 hover:text-mint-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right side: theme toggle + cart + mobile menu button */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggle}
              className="p-2 rounded-full hover:bg-sage-100 dark:hover:bg-charcoal-700"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Cart button */}
            <button
              type="button"
              onClick={() => setCartOpen(!cartOpen)}
              className="relative p-2 rounded-full hover:bg-sage-100 dark:hover:bg-charcoal-700"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5 text-mint-600" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-mint-600 text-xs text-white">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-sage-100 dark:hover:bg-charcoal-700"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-charcoal-800 shadow-xl p-6 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-base font-medium ${
                      isActive
                        ? 'bg-mint-100 text-mint-600'
                        : 'text-charcoal-700 dark:text-charcoal-300 hover:bg-mint-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
