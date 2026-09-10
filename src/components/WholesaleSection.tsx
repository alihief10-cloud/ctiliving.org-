import React, { useState } from 'react';
import { WHOLESALE_BENEFITS } from '../data/ctiData';
import { Package, Truck, Palette, Users, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface WholesaleSectionProps {
  onStartWholesaleInquiry: (customDetails?: string) => void;
}

export const WholesaleSection: React.FC<WholesaleSectionProps> = ({
  onStartWholesaleInquiry,
}) => {
  const [estimatedQuantity, setEstimatedQuantity] = useState<number>(1000);
  const [categoryChoice, setCategoryChoice] = useState<string>('Hanging Baskets');

  const getTierDetails = (qty: number) => {
    if (qty >= 5000) {
      return {
        tierName: 'Tier 3 — Enterprise Contract',
        discount: '30% – 35% Off List',
        shipping: 'Free Freight on Full Truckloads (FCL)',
        account: 'Executive Horticultural Director',
        badge: 'Maximum Value',
      };
    } else if (qty >= 2000) {
      return {
        tierName: 'Tier 2 — Commercial Partner',
        discount: '20% – 25% Off List',
        shipping: 'Preferred LTL Pallet Subsidized Rates',
        account: 'Senior Commercial Specialist',
        badge: 'Most Popular',
      };
    } else {
      return {
        tierName: 'Tier 1 — Retail / Nursery Base',
        discount: '15% Off List',
        shipping: 'Standard Regional Freight',
        account: 'Wholesale Sales Representative',
        badge: 'Starter Tier',
      };
    }
  };

  const tier = getTierDetails(estimatedQuantity);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Package':
        return <Package className="w-8 h-8 text-[#266CAC]" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-[#266CAC]" />;
      case 'Palette':
        return <Palette className="w-8 h-8 text-[#266CAC]" />;
      case 'Users':
        return <Users className="w-8 h-8 text-[#266CAC]" />;
      default:
        return <Package className="w-8 h-8 text-[#266CAC]" />;
    }
  };

  const handleApplyEstimate = () => {
    const details = `Estimated Wholesale Order: ${estimatedQuantity.toLocaleString()} units of ${categoryChoice} (${tier.tierName})`;
    onStartWholesaleInquiry(details);
  };

  return (
    <section
      id="wholesale"
      aria-labelledby="wholesale-heading"
      className="py-20 lg:py-24 bg-white border-b border-[#e0e6ec]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#E0A86A] uppercase font-sans-ui mb-3">
            FOR BUSINESSES
          </span>
          <h2
            id="wholesale-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#1a4d7a] font-heading tracking-tight"
          >
            Wholesale Program
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Engineered exclusively for commercial growers, wholesale nurseries, garden centers,
            and landscape distributors throughout North America.
          </p>
        </div>

        {/* 4 Pillars Grid from original design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHOLESALE_BENEFITS.map((b) => (
            <div
              key={b.id}
              className="bg-[#f4f7fa] p-8 rounded-lg border-b-4 border-[#E0A86A] text-center hover:-translate-y-1.5 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white flex items-center justify-center shadow-xs border border-[#e0e6ec]">
                  {getIcon(b.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#1a4d7a] font-heading mb-2">
                  {b.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {b.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#e0e6ec]/60">
                <span className="inline-block text-[11px] font-bold text-[#266CAC] bg-white px-2.5 py-1 rounded border border-[#e0e6ec]">
                  {b.perk}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Wholesale Tier Calculator */}
        <div className="bg-gradient-to-br from-[#faf8f5] to-[#f4f7fa] border border-[#e0e6ec] rounded-xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#266CAC] text-white flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a4d7a] font-heading">
                    Wholesale Volume & Discount Estimator
                  </h3>
                  <p className="text-xs text-slate-500">
                    Slide to evaluate pricing tiers and shipping incentives for your seasonal crop.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#16a34a] text-xs font-bold px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Price Lock Guarantee</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Controls Column */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                    <span>Estimated Annual / Order Volume</span>
                    <span className="text-base font-extrabold text-[#266CAC]">
                      {estimatedQuantity.toLocaleString()} Units
                    </span>
                  </div>
                  <input
                    type="range"
                    min={250}
                    max={15000}
                    step={250}
                    value={estimatedQuantity}
                    onChange={(e) => setEstimatedQuantity(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#266CAC]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>250 min</span>
                    <span>2,500</span>
                    <span>5,000</span>
                    <span>10,000</span>
                    <span>15,000+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                    Primary Product of Interest
                  </label>
                  <select
                    value={categoryChoice}
                    onChange={(e) => setCategoryChoice(e.target.value)}
                    className="w-full bg-white border border-[#e0e6ec] rounded px-3 py-2.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-[#266CAC]"
                  >
                    <option>Hanging Baskets (Commercial wire/poly)</option>
                    <option>Decorative Planters & Patio Urns</option>
                    <option>Balcony Window Boxes</option>
                    <option>Heavy-Duty Nursery Garden Containers</option>
                    <option>Flower Pots & Seedling Containers</option>
                    <option>Custom Molded Solutions / Private Label</option>
                  </select>
                </div>
              </div>

              {/* Result Tier Box */}
              <div className="md:col-span-6 bg-white border border-[#e0e6ec] rounded-lg p-6 shadow-xs space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Calculated Program
                  </span>
                  <span className="bg-[#E0A86A]/20 text-[#1a4d7a] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border border-[#E0A86A]">
                    {tier.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#1a4d7a] font-heading">
                    {tier.tierName}
                  </h4>
                  <p className="text-2xl font-black text-[#266CAC] font-heading mt-1">
                    {tier.discount}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600 bg-[#f4f7fa] p-3 rounded">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Logistics:</span>
                    <span className="font-semibold text-slate-800">{tier.shipping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Estimated Pallets:</span>
                    <span className="font-bold text-[#1a4d7a]">
                      {Math.ceil(estimatedQuantity / 400)} standard 48×40" Pallets
                      {Math.ceil(estimatedQuantity / 400) >= 24 ? ' (Full 53ft Truckload)' : ' (LTL Freight)'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Account Lead:</span>
                    <span className="font-semibold text-slate-800">{tier.account}</span>
                  </div>
                </div>

                <button
                  onClick={handleApplyEstimate}
                  className="w-full flex items-center justify-center gap-2 bg-[#266CAC] hover:bg-[#1a4d7a] text-white py-3 rounded font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                >
                  <span>Lock In Quote for This Tier</span>
                  <ArrowRight className="w-4 h-4 text-[#f0c896]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
