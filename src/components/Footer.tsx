import React, { useState } from 'react';
import { Globe, Shield, Phone, Mail, MapPin, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  return (
    <footer id="site-footer" className="bg-[#0d1f2d] text-[#8fa5b8] pt-16 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#266CAC] flex items-center justify-center text-white font-bold text-sm tracking-wider">
                cti
              </div>
              <span className="text-xl font-extrabold font-heading text-white tracking-wide">
                cti living
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Premium wholesale planters & garden containers. Serving growers and retailers across
              North America since 2003.
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <p className="font-semibold text-white">CTI International Limited</p>
              <p>86 Six Point Rd.</p>
              <p>Toronto, Ontario M8Z 2X2, Canada</p>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded text-xs text-slate-300">
              <Globe className="w-3.5 h-3.5 text-[#E0A86A]" />
              <span>Official Domain: <strong>ctiliving.org</strong></span>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#catalog" className="hover:text-[#E0A86A] transition-colors block">
                  Hanging Baskets (10"–14")
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#E0A86A] transition-colors block">
                  Decorative Planters & Urns
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#E0A86A] transition-colors block">
                  Balcony Window Boxes
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#E0A86A] transition-colors block">
                  Nursery Garden Containers
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#E0A86A] transition-colors block">
                  Classic Flower Pots
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#E0A86A] transition-colors block">
                  Custom Tooling & Private Label
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-[#E0A86A] transition-colors block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#wholesale" className="hover:text-[#E0A86A] transition-colors block">
                  Wholesale Program
                </a>
              </li>
              <li>
                <a href="#growth" className="hover:text-[#E0A86A] transition-colors block">
                  Growth Guide
                </a>
              </li>
              <li>
                <a href="#certificate" className="hover:text-[#E0A86A] transition-colors block">
                  Trademark Certificate
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E0A86A] transition-colors block">
                  Contact Toronto HQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E0A86A] shrink-0" />
                <a href="mailto:sales@ctiliving.org" className="hover:text-white transition-colors">
                  sales@ctiliving.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E0A86A] shrink-0" />
                <a href="tel:+14167679574" className="hover:text-white transition-colors">
                  +1 416-767-9574
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E0A86A] shrink-0 mt-0.5" />
                <span>Toronto, Ontario, Canada</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-green-400 bg-green-950/40 border border-green-800/50 px-2.5 py-1 rounded">
                <Shield className="w-3 h-3" />
                <span>USPTO Reg. #8279298</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 CTI Living. All rights reserved. ctiliving.org</p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#E0A86A] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#E0A86A] transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button
              onClick={() => setLegalModal('disclaimer')}
              className="hover:text-[#E0A86A] transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
        >
          <div className="bg-white text-slate-800 rounded-xl max-w-lg w-full p-6 shadow-2xl relative border border-[#e0e6ec]">
            <button
              onClick={() => setLegalModal(null)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-heading text-[#1a4d7a] mb-3">
              {legalModal === 'privacy' && 'Privacy Policy'}
              {legalModal === 'terms' && 'Terms of Commercial Use'}
              {legalModal === 'disclaimer' && 'Wholesale Disclaimer'}
            </h3>

            <div className="text-xs text-slate-600 leading-relaxed space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
              {legalModal === 'privacy' && (
                <>
                  <p>
                    CTI Living (ctiliving.org), operated by CTI International Limited, values the
                    confidentiality of our commercial partners. Any contact information or purchase
                    order data submitted via this website is used strictly to fulfill quote requests,
                    coordinate freight logistics, and support your grower accounts.
                  </p>
                  <p>
                    We never sell, rent, or distribute business contact records to third-party marketing
                    entities.
                  </p>
                </>
              )}

              {legalModal === 'terms' && (
                <>
                  <p>
                    All quotes issued by CTI Living are subject to written contract confirmation,
                    pallet volume verification, and freight logistics terms.
                  </p>
                  <p>
                    The trademark "CTI LIVING" is registered with the United States Patent and
                    Trademark Office (USPTO Reg. #8279298, Serial #98701773) and the Canadian
                    Intellectual Property Office (TMA1,354,049).
                  </p>
                </>
              )}

              {legalModal === 'disclaimer' && (
                <>
                  <p>
                    All container specifications, dimensions, and capacities are provided as engineering
                    benchmarks. CTI Living is a wholesale business-to-business supplier; minimum order
                    quantities apply to all standard product categories.
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="bg-[#266CAC] hover:bg-[#1a4d7a] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
