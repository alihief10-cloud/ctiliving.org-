import React, { useState } from 'react';
import { TRADEMARK_RECORD } from '../data/ctiData';
import { ExternalLink, Copy, Check, ShieldCheck, Award } from 'lucide-react';

export const CertificateSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopySerial = () => {
    navigator.clipboard.writeText(TRADEMARK_RECORD.serialNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const usptoSearchUrl = `https://tsdr.uspto.gov/#caseNumber=${TRADEMARK_RECORD.serialNumber}&caseSearchType=US_APPLICATION&caseType=DEFAULT&searchType=statusSearch`;

  return (
    <section
      id="certificate"
      aria-labelledby="certificate-heading"
      className="py-20 lg:py-24 bg-[#f4f7fa] border-b border-[#e0e6ec]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#E0A86A] uppercase font-sans-ui mb-3">
            OFFICIAL DOCUMENT
          </span>
          <h2
            id="certificate-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#1a4d7a] font-heading tracking-tight"
          >
            Trademark Certificate
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Federally registered brand protection guaranteeing authentic proprietary tooling,
            material integrity, and brand sovereignty across North American commerce.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-white to-[#f8fafc] border-2 border-[#266CAC] rounded-xl p-6 sm:p-12 relative shadow-xl">
          {/* Top Stamp Pill */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#266CAC] text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase shadow-md flex items-center gap-2 whitespace-nowrap">
            <Award className="w-3.5 h-3.5 text-[#f0c896]" />
            <span>OFFICIAL TRADEMARK</span>
          </div>

          {/* Certificate Header */}
          <div className="text-center pb-6 mb-8 border-b border-dashed border-[#e0e6ec] mt-2">
            <div className="flex items-center justify-center gap-2 mb-1 text-[#1a4d7a]">
              <ShieldCheck className="w-6 h-6 text-[#266CAC]" />
              <h3 className="text-xl sm:text-2xl font-bold font-heading tracking-tight">
                UNITED STATES PATENT AND TRADEMARK OFFICE
              </h3>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500">
              Official Trademark Registration Record
            </p>
          </div>

          {/* Certificate Body Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm">
            <div className="flex justify-between py-3 border-b border-[#e0e6ec]">
              <span className="text-slate-500 font-medium">Wordmark</span>
              <span className="font-bold text-[#1a4d7a] text-right font-heading tracking-wide">
                {TRADEMARK_RECORD.wordmark}
              </span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-[#e0e6ec]">
              <span className="text-slate-500 font-medium">Serial Number</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1a4d7a] font-mono">
                  {TRADEMARK_RECORD.serialNumber}
                </span>
                <button
                  onClick={handleCopySerial}
                  title="Copy Serial Number"
                  className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-[#266CAC] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between py-3 border-b border-[#e0e6ec]">
              <span className="text-slate-500 font-medium">Registration Number</span>
              <span className="font-bold text-[#1a4d7a] font-mono">
                {TRADEMARK_RECORD.registrationNumber}
              </span>
            </div>

            <div className="flex justify-between py-3 border-b border-[#e0e6ec]">
              <span className="text-slate-500 font-medium">Filing Date</span>
              <span className="font-bold text-[#1a4d7a] text-right">
                {TRADEMARK_RECORD.filingDate}
              </span>
            </div>

            <div className="flex justify-between py-3 border-b border-[#e0e6ec]">
              <span className="text-slate-500 font-medium">Registration Date</span>
              <span className="font-bold text-[#1a4d7a] text-right">
                {TRADEMARK_RECORD.registrationDate}
              </span>
            </div>

            <div className="flex justify-between py-3 border-b border-[#e0e6ec]">
              <span className="text-slate-500 font-medium">International Class</span>
              <span className="font-bold text-[#1a4d7a] text-right">
                {TRADEMARK_RECORD.internationalClass}
              </span>
            </div>

            <div className="flex justify-between py-3 border-b border-[#e0e6ec] md:col-span-2">
              <span className="text-slate-500 font-medium">Goods & Services</span>
              <span className="font-bold text-[#1a4d7a] text-right max-w-md">
                {TRADEMARK_RECORD.goodsAndServices}
              </span>
            </div>

            <div className="flex justify-between py-3 border-b border-[#e0e6ec] md:col-span-2">
              <span className="text-slate-500 font-medium">Owner</span>
              <span className="font-bold text-[#1a4d7a] text-right">
                {TRADEMARK_RECORD.owner}
              </span>
            </div>

            <div className="flex justify-between py-3 border-b border-[#e0e6ec] md:col-span-2">
              <span className="text-slate-500 font-medium">Address</span>
              <span className="font-bold text-[#1a4d7a] text-right max-w-md">
                {TRADEMARK_RECORD.address}
              </span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-[#e0e6ec]">
              <span className="text-slate-500 font-medium">Status</span>
              <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-400 text-green-700 px-3 py-0.5 rounded-full text-xs font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-status-pulse" />
                {TRADEMARK_RECORD.status}
              </span>
            </div>

            <div className="flex justify-between py-3 border-b border-[#e0e6ec]">
              <span className="text-slate-500 font-medium">Foreign Registration</span>
              <span className="font-bold text-[#1a4d7a] text-right">
                {TRADEMARK_RECORD.foreignRegistration}
              </span>
            </div>

            <div className="flex justify-between py-3 border-b border-[#e0e6ec] md:col-span-2">
              <span className="text-slate-500 font-medium">Foreign Expiration</span>
              <span className="font-bold text-[#1a4d7a] text-right">
                {TRADEMARK_RECORD.foreignExpiration}
              </span>
            </div>
          </div>

          {/* Certificate Footer */}
          <div className="mt-8 pt-6 border-t border-dashed border-[#e0e6ec] text-center text-xs text-slate-500 space-y-3">
            <p>
              This certificate is issued by the USPTO and is valid for all commercial and legal
              purposes.
            </p>
            <div className="flex items-center justify-center gap-2">
              <span>Verify official status at:</span>
              <a
                href={usptoSearchUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-[#266CAC] font-bold hover:text-[#1a4d7a] hover:underline"
              >
                <span>{TRADEMARK_RECORD.verificationPortal}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
