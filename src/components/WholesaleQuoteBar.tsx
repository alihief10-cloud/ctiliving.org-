import React, { useState } from 'react';
import { QuoteCartItem } from '../types';
import { ClipboardList, X, Trash2, ArrowRight, Check, Plus, Minus, Send } from 'lucide-react';

interface WholesaleQuoteBarProps {
  items: QuoteCartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearItems: () => void;
  onSubmitRFQ: (summaryText: string) => void;
}

export const WholesaleQuoteBar: React.FC<WholesaleQuoteBarProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearItems,
  onSubmitRFQ,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (items.length === 0) return null;

  const totalUnits = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleCheckoutRFQ = () => {
    const summary = items
      .map(
        (it) =>
          `• ${it.productTitle} (${it.category}): ${it.quantity.toLocaleString()} units ${
            it.selectedSize ? `[Size: ${it.selectedSize}]` : ''
          } ${it.selectedColor ? `[Finish: ${it.selectedColor}]` : ''}`
      )
      .join('\n');

    const fullMessage = `Formal Wholesale Request For Quote (RFQ):\nTotal Items: ${items.length} product line(s)\nEstimated Total Units: ${totalUnits.toLocaleString()} units\n\nDetailed Breakdown:\n${summary}\n\nPlease provide tiered pricing, current pallet configuration, and estimated freight delivery schedule to our facility.`;

    onSubmitRFQ(fullMessage);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Bottom Pill Bar */}
      <div className="fixed bottom-5 right-5 z-40 animate-in slide-in-from-bottom-5 duration-300">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 bg-[#1a4d7a] hover:bg-[#266CAC] text-white px-5 py-3 rounded-full shadow-2xl border border-white/20 transition-all hover:scale-105 cursor-pointer group"
        >
          <div className="relative">
            <ClipboardList className="w-5 h-5 text-[#E0A86A]" />
            <span className="absolute -top-2 -right-2 bg-[#E0A86A] text-[#1a4d7a] text-[11px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow">
              {items.length}
            </span>
          </div>

          <div className="text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Wholesale Quote Draft
            </div>
            <div className="text-xs text-[#f0c896]">
              {totalUnits.toLocaleString()} total units queued
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
        </button>
      </div>

      {/* Slide-over or Modal for Quote Items */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[85vh] flex flex-col border border-[#e0e6ec] overflow-hidden">
            {/* Header */}
            <div className="bg-[#1a4d7a] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ClipboardList className="w-5 h-5 text-[#E0A86A]" />
                <h3 className="text-lg font-bold font-heading">
                  Wholesale RFQ Draft ({items.length} Products)
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="p-5 overflow-y-auto flex-1 space-y-3 divide-y divide-slate-100">
              {items.map((item) => (
                <div key={item.productId} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#1a4d7a] truncate">
                      {item.productTitle}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {item.category}{' '}
                      {item.selectedSize ? `• ${item.selectedSize}` : ''}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#e0e6ec] rounded bg-slate-50">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.productId, Math.max(50, item.quantity - 100))
                        }
                        className="px-2 py-1 text-slate-600 hover:bg-slate-200 text-xs font-bold cursor-pointer"
                        title="Decrease by 100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-[#1a4d7a] min-w-[50px] text-center">
                        {item.quantity.toLocaleString()}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.productId, item.quantity + 100)}
                        className="px-2 py-1 text-slate-600 hover:bg-slate-200 text-xs font-bold cursor-pointer"
                        title="Increase by 100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => onRemoveItem(item.productId)}
                      className="text-slate-400 hover:text-red-500 p-1.5 rounded transition-colors cursor-pointer"
                      title="Remove product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Calculation & Actions */}
            <div className="bg-[#f4f7fa] p-5 border-t border-[#e0e6ec] space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Total Estimated Volume:</span>
                <span className="text-sm font-extrabold text-[#1a4d7a]">
                  {totalUnits.toLocaleString()} units
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Tier Qualification:</span>
                <span className="font-bold text-[#E0A86A]">
                  {totalUnits >= 5000
                    ? 'Tier 3 (30-35% Off FCL)'
                    : totalUnits >= 2000
                    ? 'Tier 2 (20-25% Off LTL)'
                    : 'Tier 1 (15% Off)'}
                </span>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={onClearItems}
                  className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 border border-slate-300 rounded cursor-pointer"
                >
                  Clear All
                </button>
                <button
                  onClick={handleCheckoutRFQ}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#266CAC] hover:bg-[#1a4d7a] text-white rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transfer to Official Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
