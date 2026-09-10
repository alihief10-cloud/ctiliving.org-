import React from 'react';
import { ArrowRight, PhoneCall, Download } from 'lucide-react';

interface CTASectionProps {
  onContactClick: () => void;
  onCatalogClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onContactClick,
  onCatalogClick,
}) => {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="py-20 lg:py-24 bg-[#1a4d7a] text-white text-center relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#E0A86A_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#E0A86A] uppercase font-sans-ui">
          COMMERCIAL PARTNERSHIP
        </span>
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight"
        >
          Ready to Grow With Us?
        </h2>
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Request a full product catalog or speak directly with our Toronto wholesale team today
          for container schedules and volume tier quotes.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 bg-[#E0A86A] hover:bg-[#f0c896] text-[#1a4d7a] px-8 py-4 rounded font-bold text-xs uppercase tracking-[0.15em] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 text-[#1a4d7a]" />
          </button>

          <a
            href="tel:+14167679574"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-4 rounded font-bold text-xs uppercase tracking-[0.15em] transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#E0A86A]" />
            <span>+1 416-767-9574</span>
          </a>

          <button
            onClick={onCatalogClick}
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-slate-200 hover:text-white px-6 py-4 rounded font-semibold text-xs uppercase tracking-[0.15em] transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#E0A86A]" />
            <span>Request Digital Catalog</span>
          </button>
        </div>
      </div>
    </section>
  );
};
