export interface ProductItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  emoji: string;
  priceNote: string;
  sizes: string[];
  materials: string[];
  minOrderQuantity: string;
  colors: string[];
  features: string[];
  recommendedUse: string;
  popular?: boolean;
}

export interface StatItem {
  number: string;
  label: string;
  subtext?: string;
}

export interface WholesaleBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  perk: string;
}

export interface GrowthGuideTopic {
  id: string;
  title: string;
  category: 'Seasonal' | 'Materials' | 'Market Trends' | 'Care';
  readTime: string;
  summary: string;
  points: string[];
  recommendedSeason?: string;
}

export interface TrademarkRecord {
  wordmark: string;
  serialNumber: string;
  registrationNumber: string;
  filingDate: string;
  registrationDate: string;
  internationalClass: string;
  goodsAndServices: string;
  owner: string;
  address: string;
  status: 'LIVE REGISTERED' | 'ACTIVE';
  foreignRegistration: string;
  foreignExpiration: string;
  verificationPortal: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  productInterest: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders & MOQ' | 'Shipping & Logistics' | 'Materials & Quality' | 'Custom Branding';
}

export interface SampleKitOption {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface QuoteCartItem {
  productId: string;
  productTitle: string;
  category: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
