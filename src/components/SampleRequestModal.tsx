import React, { useState } from 'react';
import { SAMPLE_KIT_OPTIONS } from '../data/ctiData';
import { X, PackageCheck, Send, Check, Sparkles, Building2, MapPin, Mail, Phone, User } from 'lucide-react';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({ isOpen, onClose }) => {
  const [selectedSamples, setSelectedSamples] = useState<string[]>([
    'sample-resin-poly',
    'sample-drainage-grid',
  ]);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [facilityType, setFacilityType] = useState('Commercial Greenhouse / Nursery');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleToggleSample = (id: string) => {
    setSelectedSamples((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#e0e6ec]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a4d7a] to-[#266CAC] p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close sample request modal"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-lg bg-[#E0A86A] text-[#1a4d7a] flex items-center justify-center font-bold">
              <PackageCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f0c896]">
              CTI LIVING COMMERCE
            </span>
          </div>

          <h2 id="sample-modal-title" className="text-2xl font-bold font-heading">
            Request Commercial Sample Kit
          </h2>
          <p className="text-xs text-slate-200 mt-1">
            We provide complimentary material swatches, resin durability chips, and hardware samples
            to qualified growers, nurseries, and retail distributors.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto border border-green-200">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1a4d7a] font-heading">
              Sample Request Dispatched!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong>{contactName || 'Valued Partner'}</strong> at{' '}
              <strong>{companyName || 'your company'}</strong>. Your custom sample kit with{' '}
              {selectedSamples.length} item(s) has been queued for fulfillment at our Toronto hub.
            </p>
            <div className="bg-[#f4f7fa] p-4 rounded-lg text-xs text-slate-500 max-w-sm mx-auto border border-[#e0e6ec] space-y-1 text-left">
              <div>
                <span className="font-semibold text-slate-700">Dispatch Reference:</span> CTI-SMP-
                {Math.floor(100000 + Math.random() * 900000)}
              </div>
              <div>
                <span className="font-semibold text-slate-700">Fulfillment Center:</span> 86 Six Point
                Rd., Toronto ON
              </div>
              <div>
                <span className="font-semibold text-slate-700">Estimated Dispatch:</span> 24–48 Business
                Hours
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#266CAC] hover:bg-[#1a4d7a] text-white rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Step 1: Select Samples */}
            <div>
              <label className="block text-xs font-bold text-[#1a4d7a] uppercase tracking-wider mb-2">
                1. Select Desired Sample Items ({selectedSamples.length} Selected)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SAMPLE_KIT_OPTIONS.map((sample) => {
                  const isChecked = selectedSamples.includes(sample.id);
                  return (
                    <div
                      key={sample.id}
                      onClick={() => handleToggleSample(sample.id)}
                      className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#266CAC] bg-[#f0f6fc] ring-1 ring-[#266CAC]/30'
                          : 'border-[#e0e6ec] hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                            isChecked
                              ? 'bg-[#266CAC] border-[#266CAC] text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1a4d7a]">{sample.name}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {sample.description}
                          </div>
                          <span className="inline-block mt-1 text-[10px] uppercase font-bold text-[#266CAC] bg-white px-1.5 py-0.5 rounded border border-[#e0e6ec]">
                            {sample.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Commercial Business Shipping Address */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-[#1a4d7a] uppercase tracking-wider">
                2. Business Destination & Contact Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Company / Nursery Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pine Ridge Nurseries Ltd."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-[#e0e6ec] rounded focus:outline-none focus:ring-1 focus:ring-[#266CAC]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Contact Person *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Vance"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-[#e0e6ec] rounded focus:outline-none focus:ring-1 focus:ring-[#266CAC]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="purchasing@nursery.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-[#e0e6ec] rounded focus:outline-none focus:ring-1 focus:ring-[#266CAC]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Telephone *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-[#e0e6ec] rounded focus:outline-none focus:ring-1 focus:ring-[#266CAC]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Facility Type
                </label>
                <select
                  value={facilityType}
                  onChange={(e) => setFacilityType(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#e0e6ec] rounded focus:outline-none focus:ring-1 focus:ring-[#266CAC] bg-white"
                >
                  <option>Commercial Greenhouse / Nursery</option>
                  <option>Retail Garden Center</option>
                  <option>Landscape Contractor / Architectural Firm</option>
                  <option>Wholesale Horticultural Distributor</option>
                  <option>Municipal / Urban Parks Board</option>
                  <option>Private Label Brand / Retailer</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Delivery Postal / Street Address *
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <textarea
                    required
                    rows={2}
                    placeholder="Full street address, City, Province/State, Postal/ZIP Code"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-[#e0e6ec] rounded focus:outline-none focus:ring-1 focus:ring-[#266CAC]"
                  />
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-[11px] text-slate-500">
                Shipped free via Canada Post / FedEx Ground.
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={selectedSamples.length === 0}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-[#266CAC] hover:bg-[#1a4d7a] text-white rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Sample Request</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
