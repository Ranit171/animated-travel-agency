import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { NAV_DATA, SITE_CONFIG } from '../data/travelData';

interface NavbarProps {
  onOpenPlanModal: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanModal, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = NAV_DATA.navLinks;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0B0F0E]/85 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl shadow-black/40'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9C7A2] rounded-lg"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#D9C7A2]/80 group-hover:bg-[#D9C7A2]/10">
              <Compass className="w-4 h-4 text-white group-hover:text-[#D9C7A2] transition-colors duration-300 group-hover:rotate-45" />
            </div>
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-white font-sans">
              {SITE_CONFIG.brandName}<span className="text-[#D9C7A2]">{SITE_CONFIG.brandSuffix}</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-[#B8BFBB] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="plan-trip-nav-btn"
              onClick={onOpenPlanModal}
              className="relative group px-5 py-2 rounded-full text-xs md:text-sm font-medium text-[#0B0F0E] bg-[#D9C7A2] hover:bg-[#EFE6D2] transition-all duration-300 shadow-lg shadow-[#D9C7A2]/20 hover:shadow-[#D9C7A2]/40 flex items-center gap-1.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D9C7A2] focus-visible:ring-offset-[#0B0F0E]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0B0F0E]" />
              <span>{NAV_DATA.ctaButtonText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9C7A2]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[73px] z-40 bg-[#0B0F0E]/95 backdrop-blur-2xl border-b border-white/15 px-6 py-8 shadow-2xl lg:hidden flex flex-col space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center justify-between border-b border-white/5 last:border-0"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D9C7A2]/70" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanModal();
                }}
                className="w-full py-3 px-6 rounded-full text-sm font-semibold text-[#0B0F0E] bg-[#D9C7A2] hover:bg-[#EFE6D2] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#D9C7A2]/20"
              >
                <Sparkles className="w-4 h-4 text-[#0B0F0E]" />
                <span>{NAV_DATA.ctaButtonText}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
