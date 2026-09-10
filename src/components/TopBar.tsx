import React from 'react';
import { Search, Phone, Mail, Globe, Download, PackageCheck, Languages } from 'lucide-react';

interface TopBarProps {
  onSearchClick: () => void;
  onCatalogDownloadClick: () => void;
  onRequestSampleKit?: () => void;
  currentLang?: string;
  onLangChange?: (lang: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onSearchClick,
  onCatalogDownloadClick,
  onRequestSampleKit,
  currentLang = 'en',
  onLangChange,
}) => {
  return (
    <aside
      id="top-bar"
      aria-label="Quick links and contact toolbar"
      className="bg-[#1a4d7a] text-white py-2 text-xs border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center space-x-4 sm:space-x-6 text-slate-200">
          <div className="flex items-center gap-1.5 font-semibold text-[#f0c896] bg-white/10 px-2.5 py-0.5 rounded text-[11px] tracking-wide">
            <Globe className="w-3 h-3 text-[#E0A86A]" aria-hidden="true" />
            <span>ctiliving.org</span>
          </div>

          <a href="#wholesale" className="hover:text-[#E0A86A] transition-colors">
            Wholesale
          </a>
          <a href="#catalog" className="hover:text-[#E0A86A] transition-colors">
            Catalog
          </a>
          <a href="#growth" className="hover:text-[#E0A86A] transition-colors">
            Growth Guide
          </a>
          <a href="#faq" className="hover:text-[#E0A86A] transition-colors">
            FAQ
          </a>
          <a href="#certificate" className="hidden sm:inline hover:text-[#E0A86A] transition-colors">
            Trademark
          </a>

          <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300">
            <Phone className="w-3 h-3 text-[#E0A86A]" aria-hidden="true" />
            <a href="tel:+14167679574" className="hover:underline">+1 416-767-9574</a>
          </span>

          <span className="hidden xl:inline-flex items-center gap-1.5 text-slate-300">
            <Mail className="w-3 h-3 text-[#E0A86A]" aria-hidden="true" />
            <a href="mailto:sales@ctiliving.org" className="hover:underline">sales@ctiliving.org</a>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Free Sample Kit Quick Link */}
          {onRequestSampleKit && (
            <button
              onClick={onRequestSampleKit}
              className="hidden lg:flex items-center gap-1.5 bg-[#E0A86A] hover:bg-[#d99f5e] text-[#1a4d7a] font-bold px-2.5 py-1 rounded text-[11px] uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
            >
              <PackageCheck className="w-3.5 h-3.5" />
              <span>Free Sample Kit</span>
            </button>
          )}

          {/* Language Selector */}
          {onLangChange && (
            <div className="flex items-center bg-white/10 rounded px-1.5 py-0.5 border border-white/20 text-[11px]">
              <Languages className="w-3 h-3 text-[#E0A86A] mr-1" />
              <select
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer text-[11px]"
                aria-label="Select language"
              >
                <option value="en" className="bg-[#1a4d7a] text-white">EN (English)</option>
                <option value="ar" className="bg-[#1a4d7a] text-white">العربية</option>
                <option value="fr" className="bg-[#1a4d7a] text-white">FR (Français)</option>
              </select>
            </div>
          )}

          <button
            id="download-catalog-top-btn"
            onClick={onCatalogDownloadClick}
            aria-label="Request or download CTI Living product catalog"
            className="hidden sm:flex items-center gap-1.5 bg-[#E0A86A]/20 hover:bg-[#E0A86A]/30 border border-[#E0A86A]/50 text-[#f0c896] px-2.5 py-1 rounded text-xs transition-colors cursor-pointer"
          >
            <Download className="w-3 h-3 text-[#E0A86A]" aria-hidden="true" />
            <span>Catalog</span>
          </button>

          <button
            id="search-trigger-btn"
            onClick={onSearchClick}
            aria-label="Search planters, hanging baskets, and products (shortcut: Command K)"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-slate-100 px-3 py-1 rounded text-xs transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-[#E0A86A]" aria-hidden="true" />
            <span className="hidden sm:inline">Search...</span>
            <kbd
              aria-hidden="true"
              className="hidden md:inline-block bg-white/20 text-[10px] px-1.5 py-0.5 rounded text-white/90"
            >
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </aside>
  );
};
