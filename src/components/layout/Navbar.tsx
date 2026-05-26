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

  const leftNavItems = [
    { to: '/shop', label: 'Our Seeds' },
    { to: '/shop?category=native', label: 'Heirloom Collections' },
  ];

  const rightNavItems = [
    { to: '/quiz', label: 'Growing Guide' },
    { to: '/about', label: 'Sustainability' },
    { to: '/contact', label: 'About Us' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-sage-200/40 dark:border-charcoal-700/40 ${
          scrolled ? 'bg-warm-100/95 dark:bg-charcoal-900/95 shadow-md py-1' : 'bg-warm-100/90 dark:bg-charcoal-900/90 py-2 sm:py-3'
        } backdrop-blur-md`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 relative h-16 sm:h-20">
          
          {/* Mobile Brand / Logo */}
          <Link to="/" className="lg:hidden flex items-center gap-2 font-bold text-mint-800 dark:text-mint-400">
            <img src="/logo.png" alt="Nayab Seeds" className="h-10 w-10 rounded-full border border-mint-700 bg-white object-cover" />
            <span className="font-display text-lg tracking-tight font-extrabold text-mint-900 dark:text-warm-50">Nayab Seeds</span>
          </Link>

          {/* Desktop Left Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10 w-1/3 justify-end pr-8">
            {leftNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide uppercase transition-colors font-sans py-2 ${
                    isActive
                      ? 'text-mint-800 dark:text-mint-400 border-b-2 border-mint-600'
                      : 'text-charcoal-700 dark:text-charcoal-300 hover:text-mint-700 dark:hover:text-mint-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Centered Overlapping Logo - Desktop only */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50">
            <Link to="/" className="group flex flex-col items-center">
              <div className="p-1 bg-warm-100 dark:bg-charcoal-900 rounded-full shadow-lg border border-sage-200/40 dark:border-charcoal-700/40 relative">
                <img
                  src="/logo.png"
                  alt="Nayab Seeds Logo"
                  className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover transition-all duration-500 group-hover:scale-105 border-2 border-[#1F4D36]"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Right Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10 w-1/3 pl-8">
            {rightNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide uppercase transition-colors font-sans py-2 ${
                    isActive
                      ? 'text-mint-800 dark:text-mint-400 border-b-2 border-mint-600'
                      : 'text-charcoal-700 dark:text-charcoal-300 hover:text-mint-700 dark:hover:text-mint-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right side controls: Theme + Cart + Mobile burger */}
          <div className="flex items-center gap-2 lg:w-1/3 lg:justify-end">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggle}
              className="p-2.5 rounded-full hover:bg-sage-100 dark:hover:bg-charcoal-800 text-charcoal-700 dark:text-warm-200 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Cart button */}
            <button
              type="button"
              onClick={() => setCartOpen(!cartOpen)}
              className="relative p-2.5 rounded-full hover:bg-sage-100 dark:hover:bg-charcoal-800 text-charcoal-700 dark:text-warm-200 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5 text-mint-800 dark:text-mint-400" />
              {totalItems > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#1F4D36] text-[10px] font-bold text-white shadow-sm animate-pulse-soft">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-sage-100 dark:hover:bg-charcoal-800 text-charcoal-700 dark:text-warm-200 transition-colors"
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
          <div className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-warm-100 dark:bg-charcoal-900 shadow-2xl p-6 overflow-y-auto border-l border-sage-200/40 dark:border-charcoal-800/40">
            <div className="flex flex-col gap-6 pt-10">
              <div className="flex justify-center mb-4">
                <img src="/logo.png" alt="Nayab Seeds" className="h-20 w-20 rounded-full border-2 border-mint-800 bg-white" />
              </div>
              <nav className="flex flex-col gap-3">
                {[...leftNavItems, ...rightNavItems].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-mint-800 text-white shadow-md'
                          : 'text-charcoal-700 dark:text-charcoal-300 hover:bg-sage-100/50 dark:hover:bg-charcoal-800'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
