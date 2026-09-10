import React, { useState } from 'react';
import { GROWTH_GUIDE_TOPICS } from '../data/ctiData';
import { GrowthGuideTopic } from '../types';
import { BookOpen, Check, ArrowRight, X, Sparkles, Clock, Calendar } from 'lucide-react';

export const GrowthGuideSection: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<GrowthGuideTopic | null>(null);

  const guideChecklist = [
    'Seasonal planting recommendations',
    'Container size and material guides',
    'Market trend reports',
    'Care and maintenance tips',
    'Wholesale ordering best practices',
  ];

  return (
    <section
      id="growth"
      aria-labelledby="growth-heading"
      className="relative py-20 lg:py-24 bg-gradient-to-br from-[#266CAC] to-[#1a4d7a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text & Checklist Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#E0A86A] uppercase font-sans-ui">
              RESOURCES
            </span>
            <h2
              id="growth-heading"
              className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white font-heading tracking-tight"
            >
              Growth Guide
            </h2>
            <p className="text-slate-100/90 text-base leading-relaxed">
              Our seasonal growth guides help growers and retailers plan their inventory with
              confidence. Get expert insights on plant care, container selection, and market
              trends.
            </p>

            {/* Checklist exactly matching user HTML */}
            <ul className="space-y-3 pt-2">
              {guideChecklist.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 py-2 border-b border-white/15 text-sm text-slate-100"
                >
                  <span className="text-[#E0A86A] font-extrabold text-lg leading-none">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Guide Cards & Book Preview Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[#f0c896] text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>Commercial Knowledge Base</span>
                </div>
                <span className="text-[11px] text-white/70">Click to read full brief</span>
              </div>

              <div className="space-y-3">
                {GROWTH_GUIDE_TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setActiveTopic(topic)}
                    className="w-full text-left bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#E0A86A]/50 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="pr-3">
                      <div className="flex items-center gap-2 mb-1 text-[11px] text-[#f0c896] font-semibold">
                        <span>{topic.category}</span>
                        <span>•</span>
                        <span>{topic.readTime}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#f0c896] transition-colors leading-snug">
                        {topic.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#E0A86A] shrink-0 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Detail Modal */}
      {activeTopic && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white text-[#1a1a1a] rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#e0e6ec] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveTopic(null)}
              aria-label="Close guide modal"
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 bg-[#266CAC]/10 text-[#266CAC] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E0A86A]" />
              <span>{activeTopic.category}</span>
            </div>

            <h3 className="text-2xl font-bold text-[#1a4d7a] font-heading mb-2">
              {activeTopic.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-slate-500 mb-5 pb-3 border-b border-slate-100">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activeTopic.readTime}
              </span>
              {activeTopic.recommendedSeason && (
                <span className="flex items-center gap-1 text-[#266CAC] font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeTopic.recommendedSeason}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6 bg-[#f4f7fa] p-4 rounded-lg border border-[#e0e6ec]">
              {activeTopic.summary}
            </p>

            <h4 className="text-xs font-bold text-[#1a4d7a] uppercase tracking-wider mb-3">
              Key Recommendations & Insights
            </h4>

            <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
              {activeTopic.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveTopic(null)}
                className="bg-[#266CAC] hover:bg-[#1a4d7a] text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
