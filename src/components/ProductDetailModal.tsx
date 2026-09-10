import React, { useState } from 'react';
import { ProductItem } from '../types';
import { X, Check, Package, Sparkles, Send, Ruler, Shield, Layers, Plus } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onInquire: (productTitle: string) => void;
  onAddToQuote?: (product: ProductItem, quantity: number, selectedSize?: string, selectedColor?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire,
  onAddToQuote,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || '');
  const [quantity, setQuantity] = useState<number>(
    product.id === 'flower-pots' ? 1000 : product.id === 'decorative-planters' ? 100 : 250
  );
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAddToQuote = () => {
    if (onAddToQuote) {
      onAddToQuote(product, quantity, selectedSize, selectedColor);
      setAddedSuccess(true);
      setTimeout(() => setAddedSuccess(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#e0e6ec]">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#1a4d7a] to-[#266CAC] p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close specifications dialog"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-4xl shadow-inner shrink-0">
              {product.emoji}
            </div>
            <div>
              <div className="inline-block bg-[#E0A86A] text-[#1a4d7a] font-bold text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded mb-1.5">
                {product.category}
              </div>
              <h2 id="modal-product-title" className="text-2xl font-bold font-heading">
                {product.title}
              </h2>
              <p className="text-xs text-slate-200">{product.priceNote}</p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-[#1a4d7a] uppercase tracking-wider mb-2">
              Overview & Application
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">{product.fullDesc}</p>
            <p className="text-xs text-slate-500 mt-2 bg-[#f4f7fa] p-2.5 rounded border border-[#e0e6ec]">
              <strong>Recommended for:</strong> {product.recommendedUse}
            </p>
          </div>

          {/* Specifications Grid with interactive selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Sizes */}
            <div className="border border-[#e0e6ec] rounded-lg p-4 bg-[#faf8f5]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                <Ruler className="w-4 h-4 text-[#E0A86A]" />
                <span>Select Size for Quote</span>
              </div>
              <div className="space-y-1.5">
                {product.sizes.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-all flex items-center justify-between cursor-pointer ${
                      selectedSize === s
                        ? 'bg-[#1a4d7a] text-white font-semibold shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-[#e0e6ec]'
                    }`}
                  >
                    <span>{s}</span>
                    {selectedSize === s && <Check className="w-3 h-3 text-[#f0c896]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="border border-[#e0e6ec] rounded-lg p-4 bg-[#faf8f5]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                <Layers className="w-4 h-4 text-[#266CAC]" />
                <span>Select Finish for Quote</span>
              </div>
              <div className="space-y-1.5">
                {product.colors.map((c, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-all flex items-center justify-between cursor-pointer ${
                      selectedColor === c
                        ? 'bg-[#266CAC] text-white font-semibold shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-[#e0e6ec]'
                    }`}
                  >
                    <span>{c}</span>
                    {selectedColor === c && <Check className="w-3 h-3 text-[#f0c896]" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Quantity Picker for RFQ */}
          {onAddToQuote && (
            <div className="bg-[#f0f6fc] border border-[#266CAC]/20 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <label className="block text-xs font-bold text-[#1a4d7a] uppercase tracking-wider">
                  Requested Commercial Units
                </label>
                <p className="text-[11px] text-slate-500">
                  Minimum recommended wholesale pack: {product.minOrderQuantity}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#266CAC]/30 rounded bg-white shadow-xs">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(50, q - 100))}
                    className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer"
                  >
                    -100
                  </button>
                  <input
                    type="number"
                    min={50}
                    step={50}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(50, Number(e.target.value) || 50))}
                    className="w-20 text-center text-xs font-bold text-[#1a4d7a] py-1.5 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 100)}
                    className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer"
                  >
                    +100
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToQuote}
                  className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                    addedSuccess
                      ? 'bg-green-600 text-white'
                      : 'bg-[#266CAC] hover:bg-[#1a4d7a] text-white'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Queued!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Queue in RFQ</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Materials & MOQ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-[#f4f7fa] rounded border border-[#e0e6ec]">
              <span className="text-slate-500 block mb-1 font-medium">Material Composition</span>
              <span className="font-semibold text-slate-800">
                {product.materials.join(', ')}
              </span>
            </div>
            <div className="p-3 bg-[#f4f7fa] rounded border border-[#e0e6ec]">
              <span className="text-slate-500 block mb-1 font-medium">Wholesale MOQ</span>
              <span className="font-semibold text-[#1a4d7a]">{product.minOrderQuantity}</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold text-[#1a4d7a] uppercase tracking-wider mb-2.5">
              Engineering & Performance Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#f4f7fa] px-6 py-4 border-t border-[#e0e6ec] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Wholesale supply across North America (Est. 2003)
          </span>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onInquire(product.title);
                onClose();
              }}
              className="flex items-center gap-2 bg-[#266CAC] hover:bg-[#1a4d7a] text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#f0c896]" />
              <span>Inquire This Product</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
