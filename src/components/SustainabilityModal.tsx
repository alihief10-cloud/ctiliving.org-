import React from 'react';
import { X, ShieldCheck, Leaf, SunMedium, Snowflake, Recycle, Factory, Award } from 'lucide-react';

interface SustainabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SustainabilityModal: React.FC<SustainabilityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sustainability-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#e0e6ec]">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#1a4d7a] to-[#266CAC] p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close sustainability modal"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1 text-xs font-bold uppercase tracking-widest text-[#f0c896]">
            <Leaf className="w-4 h-4 text-[#E0A86A]" />
            <span>ECO & ENGINEERING STANDARDS</span>
          </div>

          <h2 id="sustainability-modal-title" className="text-2xl font-bold font-heading">
            Sustainability & Quality Assurance
          </h2>
          <p className="text-xs text-slate-200 mt-1">
            How CTI Living combines heavy commercial outdoor durability with closed-loop circular plastics.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* 4 Standards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-[#e0e6ec] rounded-lg p-4 bg-[#faf8f5]">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                <Recycle className="w-4 h-4 text-green-600" />
                <span>100% Recyclable Resins</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All hanging baskets, nursery pots, and window boxes are manufactured from SPI Code #2 (HDPE)
                and #5 (Polypropylene), ensuring clean recycling streams at end of life.
              </p>
            </div>

            <div className="border border-[#e0e6ec] rounded-lg p-4 bg-[#faf8f5]">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                <Snowflake className="w-4 h-4 text-[#266CAC]" />
                <span>-30°C Freeze-Thaw Certified</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compounded with elastomeric impact modifiers so planters expand naturally with wet frozen
                soil without stress cracking or brittle rim fractures.
              </p>
            </div>

            <div className="border border-[#e0e6ec] rounded-lg p-4 bg-[#faf8f5]">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                <SunMedium className="w-4 h-4 text-[#E0A86A]" />
                <span>UV-5000 Hour Invalidation Shield</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hindered Amine Light Stabilizers (HALS) prevent polymer chain breakdown and color fading
                under intense high-altitude sunlight and southern greenhouse rays.
              </p>
            </div>

            <div className="border border-[#e0e6ec] rounded-lg p-4 bg-[#faf8f5]">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#266CAC]" />
                <span>Heavy Metal & BPA Free</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero lead, cadmium, or phthalates in pigments or resin matrix. Safe for organic edible
                herbs, vegetables, and commercial edible bedding plant production.
              </p>
            </div>
          </div>

          {/* Closed-loop statement */}
          <div className="bg-[#f0f6fc] border border-[#266CAC]/20 rounded-lg p-4 text-xs text-slate-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1a4d7a] text-sm">
              <Factory className="w-4 h-4 text-[#266CAC]" />
              <span>Closed-Loop Regrind Manufacturing</span>
            </div>
            <p className="leading-relaxed">
              In our East Asia molding facilities, 100% of internal sprues, runners, and trimming off-cuts
              are granulated and reintroduced into industrial nursery container batches, keeping zero plastic
              waste out of landfills while maintaining virgin-polymer exterior finishes on decorative planters.
            </p>
          </div>

          <div className="flex justify-end pt-2 border-t border-slate-100">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#266CAC] hover:bg-[#1a4d7a] text-white rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
