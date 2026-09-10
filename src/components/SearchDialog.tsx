import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowRight, Package, BookOpen, ShieldCheck } from 'lucide-react';
import { PRODUCTS, GROWTH_GUIDE_TOPICS, TRADEMARK_RECORD } from '../data/ctiData';
import { ProductItem } from '../types';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onNavigateSection,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matchedProducts = PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.materials.some((m) => m.toLowerCase().includes(q))
    ).map((p) => ({
      type: 'product' as const,
      id: p.id,
      title: p.title,
      sub: p.category,
      item: p,
    }));

    const matchedGuides = GROWTH_GUIDE_TOPICS.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q) ||
        g.summary.toLowerCase().includes(q)
    ).map((g) => ({
      type: 'guide' as const,
      id: g.id,
      title: g.title,
      sub: `Growth Guide • ${g.category}`,
      section: 'growth',
    }));

    const trademarkMatch =
      TRADEMARK_RECORD.wordmark.toLowerCase().includes(q) ||
      TRADEMARK_RECORD.serialNumber.includes(q) ||
      TRADEMARK_RECORD.goodsAndServices.toLowerCase().includes(q) ||
      'trademark'.includes(q) ||
      'uspto'.includes(q)
        ? [
            {
              type: 'trademark' as const,
              id: 'tm-record',
              title: `USPTO Trademark: ${TRADEMARK_RECORD.wordmark} (#${TRADEMARK_RECORD.registrationNumber})`,
              sub: 'Class 021 - Flower pots and planters for flowers and plants',
              section: 'certificate',
            },
          ]
        : [];

    return [...matchedProducts, ...matchedGuides, ...trademarkMatch];
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full border border-[#e0e6ec] overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#e0e6ec] flex items-center gap-3 bg-[#f8fafc]">
          <Search className="w-5 h-5 text-[#266CAC] shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search planters, hanging baskets, sizes, guides, or trademark..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-800 text-sm focus:outline-none placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-xs text-slate-400 space-y-2">
              <p>Type to search across CTI Living catalog, wholesale data, and guides.</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                <button
                  onClick={() => setQuery('Hanging Baskets')}
                  className="bg-[#f4f7fa] hover:bg-slate-200 px-2.5 py-1 rounded text-slate-700 text-[11px]"
                >
                  Hanging Baskets
                </button>
                <button
                  onClick={() => setQuery('Window Boxes')}
                  className="bg-[#f4f7fa] hover:bg-slate-200 px-2.5 py-1 rounded text-slate-700 text-[11px]"
                >
                  Window Boxes
                </button>
                <button
                  onClick={() => setQuery('Trademark')}
                  className="bg-[#f4f7fa] hover:bg-slate-200 px-2.5 py-1 rounded text-slate-700 text-[11px]"
                >
                  Trademark
                </button>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500">
              No results found for "{query}". Try searching for hanging baskets, planters, or wholesale.
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((res) => (
                <button
                  key={res.id}
                  onClick={() => {
                    if (res.type === 'product' && res.item) {
                      onSelectProduct(res.item);
                    } else if (res.section) {
                      onNavigateSection(res.section);
                    }
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-lg hover:bg-[#f4f7fa] flex items-center justify-between group transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-[#266CAC] shrink-0">
                      {res.type === 'product' && <Package className="w-4 h-4" />}
                      {res.type === 'guide' && <BookOpen className="w-4 h-4" />}
                      {res.type === 'trademark' && <ShieldCheck className="w-4 h-4 text-green-600" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1a4d7a] group-hover:text-[#266CAC] transition-colors">
                        {res.title}
                      </h4>
                      <p className="text-[11px] text-slate-500">{res.sub}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#266CAC] transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#f8fafc] border-t border-[#e0e6ec] text-[11px] text-slate-400 flex justify-between">
          <span>Press ESC to exit</span>
          <span>ctiliving.org</span>
        </div>
      </div>
    </div>
  );
};
