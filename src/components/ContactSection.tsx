import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Copy } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialProductInterest?: string;
  customInquiryNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProductInterest = '',
  customInquiryNote = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Wholesale Inquiry',
    productInterest: initialProductInterest || 'General / All Products',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (initialProductInterest) {
      setFormData((prev) => ({
        ...prev,
        productInterest: initialProductInterest,
        inquiryType: 'Product Catalog Request',
      }));
    }
  }, [initialProductInterest]);

  useEffect(() => {
    if (customInquiryNote) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[Note]: ${customInquiryNote}` : customInquiryNote,
      }));
    }
  }, [customInquiryNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#E0A86A] uppercase font-sans-ui mb-3">
            GET IN TOUCH
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#1a4d7a] font-heading tracking-tight"
          >
            Contact Us
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Interested in wholesale volume rates, catalog samples, or customized tooling? Our Toronto
            sales engineering desk is ready to support your seasonal requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1a4d7a] font-heading mb-3">
                Let's Talk
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you are ordering 250 units or 15,000 container loads, our wholesale advisors
                provide rapid turnaround on formal quote sheets and freight estimates.
              </p>
            </div>

            <div className="space-y-6">
              {/* Headquarters */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#266CAC] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#1a4d7a] uppercase tracking-wider mb-1">
                    Headquarters
                  </strong>
                  <span className="text-sm text-slate-600 block">
                    86 Six Point Rd.<br />Toronto, Ontario M8Z 2X2, Canada
                  </span>
                  <button
                    onClick={() => handleCopy('86 Six Point Rd., Toronto, Ontario M8Z 2X2, Canada', 'address')}
                    className="text-[11px] text-[#266CAC] hover:underline font-semibold mt-1 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{copiedField === 'address' ? 'Copied to clipboard' : 'Copy address'}</span>
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#266CAC] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#1a4d7a] uppercase tracking-wider mb-1">
                    Phone
                  </strong>
                  <a
                    href="tel:+14167679574"
                    className="text-sm text-slate-700 hover:text-[#266CAC] font-semibold hover:underline block"
                  >
                    +1 416-767-9574
                  </a>
                  <span className="text-[11px] text-slate-500">Toll-free North American routing</span>
                </div>
              </div>

              {/* Sales Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#266CAC] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#1a4d7a] uppercase tracking-wider mb-1">
                    Sales Email
                  </strong>
                  <a
                    href="mailto:sales@ctiliving.org"
                    className="text-sm text-[#266CAC] font-semibold hover:underline block"
                  >
                    sales@ctiliving.org
                  </a>
                  <span className="text-[11px] text-slate-500">Official domain correspondence</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#266CAC] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#1a4d7a] uppercase tracking-wider mb-1">
                    Working Hours
                  </strong>
                  <span className="text-sm text-slate-600 block">
                    Mon - Fri: 9:00 AM - 6:00 PM EST
                  </span>
                  <span className="text-[11px] text-slate-500">Weekend email support available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#f4f7fa] p-8 sm:p-10 rounded-lg border-t-4 border-[#266CAC] shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a4d7a] font-heading">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{formData.fullName || 'Partner'}</span>. Your wholesale inquiry has been dispatched directly to{' '}
                    <span className="font-semibold text-[#266CAC]">sales@ctiliving.org</span>. A dedicated account specialist will reach out within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          company: '',
                          email: '',
                          phone: '',
                          inquiryType: 'Wholesale Inquiry',
                          productInterest: 'General / All Products',
                          message: '',
                        });
                      }}
                      className="text-xs font-bold uppercase tracking-wider text-[#266CAC] hover:underline cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border border-[#e0e6ec] rounded px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#266CAC] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                        Company / Nursery *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Green Valley Nurseries"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white border border-[#e0e6ec] rounded px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#266CAC] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-[#e0e6ec] rounded px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#266CAC] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-[#e0e6ec] rounded px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#266CAC] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        required
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-white border border-[#e0e6ec] rounded px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#266CAC] transition-colors"
                      >
                        <option>Wholesale Inquiry</option>
                        <option>Product Catalog Request</option>
                        <option>Custom Order</option>
                        <option>General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                        Product of Interest
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full bg-white border border-[#e0e6ec] rounded px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#266CAC] transition-colors"
                      >
                        <option>General / All Products</option>
                        <option>Hanging Baskets</option>
                        <option>Decorative Planters</option>
                        <option>Window Boxes</option>
                        <option>Garden Containers</option>
                        <option>Flower Pots</option>
                        <option>Custom Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a4d7a] mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please specify your desired quantities, preferred delivery window, and destination postal/ZIP code..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[#e0e6ec] rounded px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#266CAC] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#266CAC] hover:bg-[#E0A86A] text-white hover:text-[#1a4d7a] py-4 rounded font-bold text-xs uppercase tracking-[0.15em] transition-all duration-200 shadow hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Directly transmitted to CTI International Limited sales desk. We respect your commercial privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
