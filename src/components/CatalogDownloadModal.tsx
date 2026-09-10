import React, { useState } from 'react';
import { X, Download, CheckCircle2, FileText, Mail, Building } from 'lucide-react';

interface CatalogDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogDownloadModal: React.FC<CatalogDownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative border border-[#e0e6ec]">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#266CAC] text-white flex items-center justify-center shadow-xs">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#E0A86A]">
              OFFICIAL WHOLESALE EDITION
            </span>
            <h3 className="text-xl font-bold font-heading text-[#1a4d7a]">
              2026 Product Catalog
            </h3>
          </div>
        </div>

        {downloaded ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#1a4d7a]">Catalog Link Dispatched!</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We have forwarded the comprehensive 2026 CTI Living wholesale spec sheet to{' '}
              <strong className="text-slate-900">{email}</strong>.
            </p>
            <button
              onClick={() => {
                setDownloaded(false);
                onClose();
              }}
              className="mt-4 bg-[#266CAC] text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              Access dimensional diagrams, carton palletizing ratios, and freight minimums for our
              complete hanging basket and container line.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-1.5">
                Business / Nursery Name
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Greenhouse & Garden Supply"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-[#e0e6ec] rounded focus:outline-none focus:border-[#266CAC]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-1.5">
                Work Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="purchasing@grower.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-[#e0e6ec] rounded focus:outline-none focus:border-[#266CAC]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#266CAC] hover:bg-[#1a4d7a] text-white py-3 rounded font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#f0c896]" />
              <span>Download Digital Catalog PDF</span>
            </button>

            <p className="text-[10px] text-slate-400 text-center">
              Published by CTI International Limited (Toronto, Canada)
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
