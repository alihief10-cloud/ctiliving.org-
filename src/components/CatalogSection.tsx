import React, { useState } from 'react';
import { PRODUCTS } from '../data/ctiData';
import { ProductItem } from '../types';
import { Info, Send, Check, Layers, Plus, PackageCheck, Leaf } from 'lucide-react';

interface CatalogSectionProps {
  onSelectProductForInquiry: (productName: string) => void;
  onOpenProductDetail: (product: ProductItem) => void;
  onAddToQuote?: (product: ProductItem, quantity: number) => void;
  onRequestSampleKit?: () => void;
  onRequestSustainability?: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectProductForInquiry,
  onOpenProductDetail,
  onAddToQuote,
  onRequestSampleKit,
  onRequestSustainability,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    'All',
    'Hanging Baskets',
    'Decorative Planters',
    'Window Boxes',
    'Garden Containers',
    'Flower Pots',
    'Custom Solutions',
  ];

  const handleAdd = (product: ProductItem) => {
    if (onAddToQuote) {
      // Default MOQ or 250 units
      const initialQty = product.id === 'flower-pots' ? 1000 : product.id === 'decorative-planters' ? 100 : 250;
      onAddToQuote(product, initialQty);
      setAddedIds((prev) => ({ ...prev, [product.id]: true }));
      setTimeout(() => {
        setAddedIds((prev) => ({ ...prev, [product.id]: false }));
      }, 2000);
    }
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="catalog"
      aria-labelledby="catalog-heading"
      className="py-20 lg:py-24 bg-[#f4f7fa] border-b border-[#e0e6ec]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#E0A86A] uppercase font-sans-ui mb-3">
            OUR PRODUCTS
          </span>
          <h2
            id="catalog-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#1a4d7a] font-heading tracking-tight"
          >
            Product Catalog
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            Commercial-grade containers precision-engineered for plant vigor, high durability in
            outdoor conditions, and seamless greenhouse staging.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#266CAC] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#e0e6ec]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border-t-4 border-[#266CAC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Visual Header */}
                <div className="h-48 bg-gradient-to-br from-[#4a8bc2] to-[#266CAC] flex items-center justify-center relative overflow-hidden">
                  <span
                    className="text-7xl select-none filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    role="img"
                    aria-label={product.title}
                  >
                    {product.emoji}
                  </span>

                  {product.popular && (
                    <span className="absolute top-3 right-3 bg-[#E0A86A] text-[#1a4d7a] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow">
                      Popular Choice
                    </span>
                  )}

                  <div className="absolute bottom-2 left-3 bg-black/40 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
                    {product.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a4d7a] font-heading mb-2">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5 text-xs text-slate-600 bg-[#f4f7fa] p-3 rounded border border-[#e0e6ec]">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Min. Order:</span>
                      <span className="font-semibold text-[#1a4d7a]">
                        {product.minOrderQuantity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Sizes:</span>
                      <span className="font-medium text-slate-700">
                        {product.sizes.length} Options
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Pricing:</span>
                      <span className="font-semibold text-[#E0A86A]">
                        {product.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Feature preview bullets */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 space-y-2 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenProductDetail(product)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-bold tracking-wider uppercase bg-[#f4f7fa] hover:bg-slate-200 text-[#1a4d7a] transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#266CAC]" />
                    <span>Specs</span>
                  </button>

                  <button
                    onClick={() => onSelectProductForInquiry(product.title)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-bold tracking-wider uppercase bg-[#266CAC] hover:bg-[#1a4d7a] text-white transition-colors shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>

                {onAddToQuote && (
                  <button
                    onClick={() => handleAdd(product)}
                    className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded text-xs font-bold tracking-wider uppercase transition-all cursor-pointer border ${
                      addedIds[product.id]
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-white text-[#1a4d7a] hover:bg-[#E0A86A]/10 border-[#E0A86A] text-[#1a4d7a]'
                    }`}
                  >
                    {addedIds[product.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to RFQ Draft</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-[#E0A86A]" />
                        <span>Add To Wholesale RFQ</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Assistance Banner */}
        <div className="mt-14 bg-white rounded-xl border border-[#e0e6ec] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#266CAC]/10 flex items-center justify-center text-[#266CAC] shrink-0">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#1a4d7a]">
                Need physical material swatches before issuing a purchase order?
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                We mail complimentary sample kits with resin swatches, hanging basket clasps, and color chips to verified commercial growers.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onRequestSustainability && (
              <button
                onClick={onRequestSustainability}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#1a4d7a] rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Leaf className="w-3.5 h-3.5 text-green-600" />
                <span>Eco Standards</span>
              </button>
            )}

            {onRequestSampleKit && (
              <button
                onClick={onRequestSampleKit}
                className="flex items-center gap-1.5 px-5 py-2.5 bg-[#266CAC] hover:bg-[#1a4d7a] text-white rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                <PackageCheck className="w-4 h-4 text-[#f0c896]" />
                <span>Request Sample Kit</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
