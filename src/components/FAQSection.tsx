import React, { useState } from 'react';
import { FAQS } from '../data/ctiData';
import { ChevronDown, HelpCircle, Search, MessageSquare, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onContactClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-moq');

  const categories = ['All', 'Orders & MOQ', 'Shipping & Logistics', 'Materials & Quality', 'Custom Branding'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-24 bg-[#f8fafc] border-b border-[#e0e6ec]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#E0A86A] uppercase font-sans-ui mb-3">
            HORTICULTURAL COMMERCE
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#1a4d7a] font-heading tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Direct answers regarding commercial minimums, Toronto distribution transit, custom OEM tooling,
            and winter weather resistance.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search wholesale questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e0e6ec] rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#266CAC] focus:border-transparent transition-all shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#266CAC] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#e0e6ec]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-[#e0e6ec] p-6 text-slate-500">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="font-semibold text-slate-700">No matching questions found</p>
              <p className="text-xs mt-1">Try another search keyword or contact our Toronto sales desk.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-lg border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'border-[#266CAC] shadow-sm ring-1 ring-[#266CAC]/20'
                      : 'border-[#e0e6ec] hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isExpanded}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#1a4d7a] shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#1a4d7a]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#266CAC] shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#fafcff]/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 bg-white border border-[#e0e6ec] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#E0A86A]/20 flex items-center justify-center text-[#1a4d7a] shrink-0">
              <MessageSquare className="w-5 h-5 text-[#266CAC]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1a4d7a]">Have custom specifications or freight questions?</h4>
              <p className="text-xs text-slate-600">Our commercial specialists in Toronto typically reply within 2 business hours.</p>
            </div>
          </div>
          <button
            onClick={onContactClick}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#266CAC] hover:bg-[#1a4d7a] text-white rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            <span>Ask Commercial Desk</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#f0c896]" />
          </button>
        </div>
      </div>
    </section>
  );
};
