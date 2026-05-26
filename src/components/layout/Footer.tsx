import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function Footer() {
  const links = {
    shop: [
      { label: 'All Seeds', to: '/shop' },
      { label: 'Medicinal Plants', to: '/shop?category=medicinal' },
      { label: 'Beginner Friendly', to: '/shop?category=beginner' },
      { label: 'Native Plants', to: '/shop?category=native' },
      { label: 'Take Plant Quiz', to: '/quiz' },
    ],
    learn: [
      { label: 'About Us', to: '/about' },
      { label: 'Native Karachi', to: '/native-karachi' },
      { label: 'Community', to: '/community' },
      { label: 'Contact', to: '/contact' },
    ],
  };

  return (
    <footer className="bg-[#1F4D36] text-[#F6F2E8] border-t border-sage-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Highlight Title */}
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest text-[#D4A62A] opacity-95">
            Grow Organic with Nayab
          </h2>
          <div className="w-24 h-0.5 bg-[#D4A62A]/40 mx-auto mt-4" />
        </div>

        {/* Centered Logo Badge */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="p-1 bg-white/10 rounded-full shadow-lg border border-white/20 mb-3">
            <img
              src="/logo.png"
              alt="Nayab Seeds"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-[#D4A62A]"
            />
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-[#F6F2E8]">NAYAB SEEDS</span>
          <p className="text-xs text-sage-200 mt-1 uppercase tracking-widest">Grow the Extraordinary</p>
        </div>

        {/* 3-Column Footer Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-12 pb-8 text-center md:text-left">
          
          {/* Column 1: Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#D4A62A] mb-4">Social Us</h4>
            <div className="flex items-center gap-4">
              <a href={siteConfig.social.instagram} className="p-3 bg-white/5 rounded-full hover:bg-white/15 hover:text-[#D4A62A] transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.facebook} className="p-3 bg-white/5 rounded-full hover:bg-white/15 hover:text-[#D4A62A] transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-sage-300 mt-4 max-w-xs leading-relaxed">
              Join our growing community on social media to learn seasonal planting tips and showcase your balcony garden.
            </p>
          </div>

          {/* Column 2: Sitemap */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#D4A62A] mb-4">Sitemap</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {links.shop.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-sage-200 hover:text-[#D4A62A] transition-colors">
                  {link.label}
                </Link>
              ))}
              {links.learn.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-sage-200 hover:text-[#D4A62A] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-[#D4A62A] mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-sage-200">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-[#D4A62A] shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-[#D4A62A]">
                <Mail className="w-4 h-4 text-[#D4A62A] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4A62A] mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-400">
          <p>© {new Date().getFullYear()} Nayab Seeds. Small Seeds, Big Change. Crafted for Karachi gardeners.</p>
          <p>Cash on Delivery (COD) & Easy Paisa nationwide shipping.</p>
        </div>

      </div>
    </footer>
  );
}
