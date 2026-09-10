import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CatalogSection } from './components/CatalogSection';
import { WholesaleSection } from './components/WholesaleSection';
import { GrowthGuideSection } from './components/GrowthGuideSection';
import { FAQSection } from './components/FAQSection';
import { CertificateSection } from './components/CertificateSection';
import { ContactSection } from './components/ContactSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchDialog } from './components/SearchDialog';
import { CatalogDownloadModal } from './components/CatalogDownloadModal';
import { SampleRequestModal } from './components/SampleRequestModal';
import { SustainabilityModal } from './components/SustainabilityModal';
import { WholesaleQuoteBar } from './components/WholesaleQuoteBar';
import { ProductItem, QuoteCartItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<string>('');
  const [customInquiryNote, setCustomInquiryNote] = useState<string>('');
  const [selectedProductDetail, setSelectedProductDetail] = useState<ProductItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCatalogDownloadOpen, setIsCatalogDownloadOpen] = useState<boolean>(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState<boolean>(false);
  const [isSustainabilityOpen, setIsSustainabilityOpen] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<string>('en');

  // Wholesale Quote (RFQ) Cart state
  const [quoteItems, setQuoteItems] = useState<QuoteCartItem[]>([]);

  // Scroll spy to update active nav link as in original site
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'catalog', 'wholesale', 'growth', 'faq', 'certificate', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForInquiry = (productTitle: string) => {
    setSelectedProductForInquiry(productTitle);
    scrollToSection('contact');
  };

  const handleWholesaleTierInquiry = (details?: string) => {
    if (details) {
      setCustomInquiryNote(details);
    }
    scrollToSection('contact');
  };

  const handleAddToQuote = (
    product: ProductItem,
    quantity: number,
    selectedSize?: string,
    selectedColor?: string
  ) => {
    setQuoteItems((prev) => {
      const existing = prev.find((it) => it.productId === product.id);
      if (existing) {
        return prev.map((it) =>
          it.productId === product.id ? { ...it, quantity: it.quantity + quantity } : it
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          productTitle: product.title,
          category: product.category,
          quantity,
          selectedSize: selectedSize || product.sizes[0],
          selectedColor: selectedColor || product.colors[0],
        },
      ];
    });
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    setQuoteItems((prev) =>
      prev.map((it) => (it.productId === productId ? { ...it, quantity: newQty } : it))
    );
  };

  const handleRemoveQuoteItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((it) => it.productId !== productId));
  };

  const handleClearQuoteItems = () => {
    setQuoteItems([]);
  };

  const handleSubmitRFQ = (summaryText: string) => {
    setCustomInquiryNote(summaryText);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a1a]">
      {/* Top Bar with domain, search, catalog download & sample kit */}
      <TopBar
        onSearchClick={() => setIsSearchOpen(true)}
        onCatalogDownloadClick={() => setIsCatalogDownloadOpen(true)}
        onRequestSampleKit={() => setIsSampleModalOpen(true)}
        currentLang={currentLang}
        onLangChange={(lang) => setCurrentLang(lang)}
      />

      {/* Primary Sticky Header */}
      <Header
        activeSection={activeSection}
        onInquireClick={() => scrollToSection('contact')}
        onRequestSampleKit={() => setIsSampleModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onCatalogClick={() => scrollToSection('catalog')}
          onWholesaleClick={() => scrollToSection('wholesale')}
        />

        {/* About Section */}
        <AboutSection />

        {/* Product Catalog Section */}
        <CatalogSection
          onSelectProductForInquiry={handleSelectProductForInquiry}
          onOpenProductDetail={(prod) => setSelectedProductDetail(prod)}
          onAddToQuote={handleAddToQuote}
          onRequestSampleKit={() => setIsSampleModalOpen(true)}
          onRequestSustainability={() => setIsSustainabilityOpen(true)}
        />

        {/* Wholesale Program & Calculator */}
        <WholesaleSection
          onStartWholesaleInquiry={handleWholesaleTierInquiry}
        />

        {/* Growth Guide Resources */}
        <GrowthGuideSection />

        {/* FAQ Section */}
        <FAQSection
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Official Trademark Certificate */}
        <CertificateSection />

        {/* Contact & Inquiries */}
        <ContactSection
          initialProductInterest={selectedProductForInquiry}
          customInquiryNote={customInquiryNote}
        />

        {/* Final CTA Banner */}
        <CTASection
          onContactClick={() => scrollToSection('contact')}
          onCatalogClick={() => setIsCatalogDownloadOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Wholesale RFQ Bar */}
      <WholesaleQuoteBar
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveQuoteItem}
        onClearItems={handleClearQuoteItems}
        onSubmitRFQ={handleSubmitRFQ}
      />

      {/* Modals & Dialogs */}
      <ProductDetailModal
        product={selectedProductDetail}
        onClose={() => setSelectedProductDetail(null)}
        onInquire={handleSelectProductForInquiry}
        onAddToQuote={handleAddToQuote}
      />

      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProductDetail(product)}
        onNavigateSection={(sectionId) => scrollToSection(sectionId)}
      />

      <CatalogDownloadModal
        isOpen={isCatalogDownloadOpen}
        onClose={() => setIsCatalogDownloadOpen(false)}
      />

      <SampleRequestModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
      />

      <SustainabilityModal
        isOpen={isSustainabilityOpen}
        onClose={() => setIsSustainabilityOpen(false)}
      />
    </div>
  );
}
