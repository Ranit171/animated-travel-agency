import React, { useState } from 'react';
import { Compass, Mail, Phone, Instagram, Facebook, Youtube, CheckCircle2, ArrowRight } from 'lucide-react';
import { FOOTER_DATA, NAV_DATA, SITE_CONFIG } from '../data/travelData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navLinks = NAV_DATA.navLinks;

  return (
    <footer id="footer" className="relative bg-[#070A09] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Essence */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#D9C7A2]" />
              </div>
              <span className="text-2xl font-semibold tracking-tight font-sans">
                {FOOTER_DATA.brandName}<span className="text-[#D9C7A2]">{FOOTER_DATA.brandSuffix}</span>
              </span>
            </div>

            <p className="text-xl font-serif italic text-white/90">
              {FOOTER_DATA.tagline}
            </p>

            <p className="text-sm text-[#B8BFBB] font-light leading-relaxed max-w-sm">
              {FOOTER_DATA.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#footer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#B8BFBB] hover:text-[#D9C7A2] hover:border-[#D9C7A2]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#B8BFBB] hover:text-[#D9C7A2] hover:border-[#D9C7A2]/40 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#B8BFBB] hover:text-[#D9C7A2] hover:border-[#D9C7A2]/40 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#D9C7A2]">
              {FOOTER_DATA.navTitle}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#B8BFBB] hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#D9C7A2]">
              {FOOTER_DATA.contactTitle}
            </h4>
            <div className="space-y-3 text-sm text-[#B8BFBB]">
              <a
                href={`mailto:${FOOTER_DATA.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D9C7A2] shrink-0" />
                <span className="truncate">{FOOTER_DATA.email}</span>
              </a>
              <a
                href={`tel:${FOOTER_DATA.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D9C7A2] shrink-0" />
                <span>{FOOTER_DATA.phone}</span>
              </a>
              <p className="text-xs text-[#B8BFBB]/60 pt-2 font-light whitespace-pre-line">
                {FOOTER_DATA.hours}
              </p>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#D9C7A2]">
              {FOOTER_DATA.newsletterTitle}
            </h4>
            <p className="text-xs sm:text-sm text-[#B8BFBB] font-light leading-relaxed">
              {FOOTER_DATA.newsletterDescription}
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-[#D9C7A2]/10 border border-[#D9C7A2]/30 flex items-center gap-2.5 text-xs text-[#D9C7A2]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{FOOTER_DATA.newsletterSuccessText}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder={FOOTER_DATA.newsletterPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm text-white placeholder:text-[#B8BFBB]/50 focus:outline-none focus:border-[#D9C7A2] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-[#D9C7A2] text-[#0B0F0E] text-xs font-semibold hover:bg-[#EFE6D2] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{FOOTER_DATA.newsletterButtonText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <span className="text-[10px] text-[#B8BFBB]/60 block px-1">
                  Strictly zero spam. Unsubscribe at any time.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8BFBB]/60 font-mono">
          <p>{FOOTER_DATA.copyrightText}</p>
          <div className="flex items-center gap-6">
            {FOOTER_DATA.legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
