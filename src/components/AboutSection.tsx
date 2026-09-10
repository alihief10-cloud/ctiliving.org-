import React from 'react';
import { CTI_STATS } from '../data/ctiData';
import { MapPin, Globe, CheckCircle2, Factory } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 lg:py-24 bg-white border-b border-[#e0e6ec]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#E0A86A] uppercase font-sans-ui">
              WHO WE ARE
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#1a4d7a] font-heading tracking-tight leading-tight"
            >
              Rooted in Quality Since 2003
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                <strong className="text-[#1a4d7a] font-semibold">CTI Living</strong> is a Canadian
                wholesale supplier of premium planters, flower pots and garden containers.
                Headquartered in Toronto, we have been proudly serving the North American
                horticultural industry for over two decades.
              </p>
              <p>
                Our product line includes heavy-duty hanging baskets, balcony window boxes,
                architectural decorative planters, and bespoke custom solutions tailored for
                growers, greenhouse operations, garden centers, and landscape professionals.
              </p>
              <p>
                With dual operating hubs in <strong className="text-[#1a4d7a]">Toronto</strong> and{' '}
                <strong className="text-[#1a4d7a]">East Asia</strong>, we combine direct global
                manufacturing prowess with attentive, local Canadian customer support and reliable
                cross-border freight delivery.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#266CAC] shrink-0" aria-hidden="true" />
                <span>Heavy-gauge UV-stabilized resins</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#266CAC] shrink-0" aria-hidden="true" />
                <span>Engineered drainage & root airflow</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#266CAC] shrink-0" aria-hidden="true" />
                <span>Full-truckload & pallet freight logistics</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#266CAC] shrink-0" aria-hidden="true" />
                <span>Bespoke OEM private labeling</span>
              </div>
            </div>

            {/* Location Pill */}
            <div className="mt-4 inline-flex items-center gap-2 bg-[#f4f7fa] border border-[#e0e6ec] rounded-lg px-4 py-2.5 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#266CAC] shrink-0" />
              <span>
                <strong>Headquarters:</strong> 86 Six Point Rd., Toronto, Ontario M8Z 2X2, Canada
              </span>
            </div>
          </div>

          {/* Stats & Global Reach Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {CTI_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#f4f7fa] p-6 rounded-lg border-l-4 border-[#266CAC] shadow-xs hover:shadow-sm transition-all"
                >
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#266CAC] font-heading leading-none mb-2">
                    {stat.number}
                  </span>
                  <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {stat.label}
                  </span>
                  {stat.subtext && (
                    <span className="block text-[11px] text-slate-500 leading-snug">
                      {stat.subtext}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Global Presence Box */}
            <div className="bg-gradient-to-r from-[#1a4d7a] to-[#266CAC] rounded-lg p-6 text-white text-sm shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#f0c896] font-bold text-xs uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Global Manufacturing & Local Service</span>
              </div>
              <p className="text-xs text-slate-100 leading-relaxed">
                Direct manufacturing facilities in East Asia enable cost advantages and custom tooling,
                while our Toronto hub maintains inventories ready for rapid dispatch across Canada and the US.
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-200 border-t border-white/15">
                <span>Toronto HQ: Warehouse & Sales</span>
                <span>East Asia: Tooling & Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
