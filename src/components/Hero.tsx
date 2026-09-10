import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Sparkles, Building2 } from 'lucide-react';

interface HeroProps {
  onCatalogClick: () => void;
  onWholesaleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCatalogClick, onWholesaleClick }) => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#1a4d7a] via-[#266CAC] to-[#4a8bc2] text-white py-20 lg:py-28"
    >
      {/* Subtle radial ambient circles */}
      <div
        className="pointer-events-none absolute -top-40 -right-20 w-[550px] h-[550px] rounded-full bg-[#E0A86A]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 w-[450px] h-[450px] rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E0A86A]/20 border border-[#E0A86A] text-[#f0c896] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.18em] uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E0A86A]" aria-hidden="true" />
            <span>SERVING GROWERS SINCE 2003</span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12] mb-6"
          >
            Growing Together <br className="hidden sm:inline" />
            <span className="text-[#f0c896]">With Quality Planters.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-100/95 leading-relaxed max-w-2xl mb-10 font-normal">
            Premium wholesale planters, hanging baskets and garden containers for growers, retailers
            and landscapers across North America.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14">
            <button
              id="hero-view-catalog-btn"
              onClick={onCatalogClick}
              className="inline-flex items-center gap-2.5 bg-[#E0A86A] hover:bg-[#f0c896] text-[#1a4d7a] px-8 py-4 rounded font-bold text-xs uppercase tracking-[0.12em] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#1a4d7a]" aria-hidden="true" />
            </button>

            <button
              id="hero-wholesale-info-btn"
              onClick={onWholesaleClick}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#1a4d7a] border-2 border-white px-8 py-3.5 rounded font-bold text-xs uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer"
            >
              <span>Wholesale Info</span>
            </button>
          </div>

          {/* Trust Highlights Grid */}
          <div className="pt-8 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-2.5 text-slate-200">
              <Building2 className="w-4 h-4 text-[#E0A86A] shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold text-white text-sm">Est. 2003</p>
                <p className="text-[11px] text-slate-300">20+ Years in Industry</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-slate-200">
              <Truck className="w-4 h-4 text-[#E0A86A] shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold text-white text-sm">North America</p>
                <p className="text-[11px] text-slate-300">Fast Freight Delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#E0A86A] shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold text-white text-sm">USPTO Brand</p>
                <p className="text-[11px] text-slate-300">Registered Trademark</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-slate-200">
              <div className="w-4 h-4 rounded-full bg-[#E0A86A] text-[#1a4d7a] font-bold text-[10px] flex items-center justify-center shrink-0">
                %
              </div>
              <div>
                <p className="font-bold text-white text-sm">100% Wholesale</p>
                <p className="text-[11px] text-slate-300">Grower-Direct Rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
