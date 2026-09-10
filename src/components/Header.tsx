import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sprout } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onInquireClick: () => void;
  onRequestSampleKit?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onInquireClick,
  onRequestSampleKit,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Catalog', href: '#catalog', id: 'catalog' },
    { label: 'Wholesale', href: '#wholesale', id: 'wholesale' },
    { label: 'Growth Guide', href: '#growth', id: 'growth' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Trademark', href: '#certificate', id: 'certificate' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="site-header"
      className={`site-header sticky top-0 z-40 bg-white transition-all duration-300 ${
        isScrolled
          ? 'shadow-md py-3.5 border-b border-[#e0e6ec]'
          : 'py-4 border-b border-[#e0e6ec]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          id="logo-brand-link"
          className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
        >
          <div className="relative w-12 h-12 rounded-lg bg-[#266CAC] group-hover:bg-[#1a4d7a] transition-colors flex items-center justify-center text-white shadow-sm font-bold text-lg tracking-wider">
            <span>cti</span>
            <span
              className="absolute -top-1.5 -right-1.5 text-sm filter drop-shadow-sm select-none"
              aria-hidden="true"
            >
              🌿
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[22px] font-extrabold tracking-wide text-[#266CAC] leading-tight font-heading group-hover:text-[#1a4d7a] transition-colors">
              cti living
            </span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#666666]">
              GROWING TOGETHER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-[13px] font-semibold tracking-wider uppercase transition-colors relative py-1.5 ${
                      isActive
                        ? 'text-[#E0A86A]'
                        : 'text-[#1a4d7a] hover:text-[#266CAC]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E0A86A] rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            id="header-inquire-btn"
            onClick={onInquireClick}
            aria-label="Request wholesale quote"
            className="flex items-center gap-2 bg-[#266CAC] hover:bg-[#1a4d7a] text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#f0c896]" aria-hidden="true" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-inquire-btn"
            onClick={onInquireClick}
            className="bg-[#266CAC] text-white px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider sm:inline-block"
          >
            Quote
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 text-[#266CAC] hover:text-[#1a4d7a] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-white border-b border-[#e0e6ec] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-[#666] bg-[#f4f7fa] rounded mb-2">
            <Sprout className="w-4 h-4 text-[#266CAC]" />
            <span>Serving Growers & Retailers Across North America</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeSection === link.id
                  ? 'bg-[#266CAC]/10 text-[#266CAC]'
                  : 'text-[#1a4d7a] hover:bg-slate-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-2">
            {onRequestSampleKit && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestSampleKit();
                }}
                className="w-full bg-[#f4f7fa] hover:bg-slate-100 text-[#1a4d7a] border border-[#e0e6ec] font-bold py-2.5 rounded text-center text-xs uppercase tracking-wider"
              >
                Request Free Sample Kit
              </button>
            )}
            <button
              id="mobile-menu-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onInquireClick();
              }}
              className="w-full bg-[#266CAC] hover:bg-[#1a4d7a] text-white font-bold py-3 rounded text-center text-xs uppercase tracking-wider shadow"
            >
              Request Wholesale Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
