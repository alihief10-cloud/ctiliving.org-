import { ProductItem, StatItem, WholesaleBenefit, GrowthGuideTopic, TrademarkRecord, FAQItem, SampleKitOption } from '../types';

export const TRADEMARK_RECORD: TrademarkRecord = {
  wordmark: 'CTI LIVING',
  serialNumber: '98701773',
  registrationNumber: '8279298',
  filingDate: 'August 16, 2024',
  registrationDate: 'June 02, 2026',
  internationalClass: 'Class 021',
  goodsAndServices: 'Flower pots; Planters for flowers and plants',
  owner: 'CTI International Limited',
  address: '86 Six Point Rd., Toronto, Ontario M8Z2X2, Canada',
  status: 'LIVE REGISTERED',
  foreignRegistration: 'Canada — TMA1,354,049',
  foreignExpiration: 'October 17, 2035',
  verificationPortal: 'tsdr.uspto.gov',
};

export const CTI_STATS: StatItem[] = [
  {
    number: '2003',
    label: 'Founded',
    subtext: 'Over two decades of horticultural excellence',
  },
  {
    number: '20+',
    label: 'Years Experience',
    subtext: 'Trusted partner to commercial growers',
  },
  {
    number: '2',
    label: 'Global Offices',
    subtext: 'Toronto HQ & East Asia manufacturing',
  },
  {
    number: '100%',
    label: 'Wholesale Focus',
    subtext: 'Serving retailers, greenhouses & landscapers',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'hanging-baskets',
    title: 'Hanging Baskets',
    category: 'Hanging Baskets',
    shortDesc: 'Durable hanging baskets in various sizes for retail and commercial use.',
    fullDesc: 'Engineered specifically for heavy floral loads and outdoor commercial resilience. Includes heavy-gauge UV-stabilized wire/poly hangers, optimized drainage channels, and soil aeration slits.',
    emoji: '🪴',
    priceNote: 'Tiered Bulk Pricing Available',
    sizes: ['10-inch Standard', '12-inch Premium Deep', '14-inch Commercial Jumbo'],
    materials: ['UV-Stabilized Polypropylene', 'Weatherproof Co-Polymer'],
    minOrderQuantity: '250 units / 1 pallet',
    colors: ['Classic Green', 'Mocha Brown', 'Terracotta', 'Slate Black'],
    features: [
      'Self-watering reservoirs available',
      'Engineered snap-on hanger clasps',
      'High wind resistance & load-bearing hooks',
      'Perforated aerating bottom grid'
    ],
    recommendedUse: 'Commercial greenhouses, retail garden centers, municipal downtown beautification projects.',
    popular: true,
  },
  {
    id: 'decorative-planters',
    title: 'Decorative Planters',
    category: 'Decorative Planters',
    shortDesc: 'Stylish planters designed for indoor and outdoor displays.',
    fullDesc: 'Contemporary architectural silhouettes that elevate hospitality, patio, and high-end retail displays. Frost-resistant composition with luxurious textured finishes.',
    emoji: '🏺',
    priceNote: 'Wholesale Volume Rates',
    sizes: ['14-inch Patio', '18-inch Architectural', '24-inch Statement Urn'],
    materials: ['Fiber-Clay Composite', 'Heavy-Duty Reinforced Resin'],
    minOrderQuantity: '100 units',
    colors: ['Graphite Stone', 'Sand Dune', 'Espresso Matte', 'Alpine White'],
    features: [
      'Authentic stone & pottery look at 1/3 the weight',
      'Freeze-thaw crack resistant down to -30°C',
      'Removable drainage plugs with silicone gasket',
      'UV fade-proof coloration'
    ],
    recommendedUse: 'Hotels, corporate courtyards, luxury residential patios, boutique florists.',
    popular: true,
  },
  {
    id: 'window-boxes',
    title: 'Window Boxes',
    category: 'Window Boxes',
    shortDesc: 'Perfect for windowsills and balconies — available in multiple colors.',
    fullDesc: 'Sleek horizontal rectangular planters engineered with universal mounting brackets and internal root moisture guards. Perfect for herbs, petunias, and trailing greenery.',
    emoji: '🌸',
    priceNote: 'Competitive Case Packs',
    sizes: ['24-inch Balcony', '30-inch Standard', '36-inch Estate Wide'],
    materials: ['Impact Polyethylene', 'Recycled Marine-Grade Polymer'],
    minOrderQuantity: '150 units',
    colors: ['Classic White', 'Dark Charcoal', 'Forest Green', 'Cedar Rust'],
    features: [
      'Pre-drilled bracket mounting channels',
      'Sub-irrigation moisture grid prevents root rot',
      'Non-bowing reinforced internal ribbing',
      'Overflow drainage spout'
    ],
    recommendedUse: 'Condo balcony programs, restaurant façades, retail window installations.',
  },
  {
    id: 'garden-containers',
    title: 'Garden Containers',
    category: 'Garden Containers',
    shortDesc: 'Heavy-duty containers for nurseries and landscape projects.',
    fullDesc: 'Rugged, commercial-grade growing containers designed for nursery production, tree calipering, and large-scale architectural landscaping installations.',
    emoji: '🌿',
    priceNote: 'Truckload & Pallet Rates',
    sizes: ['5-Gallon Nursery', '10-Gallon Landscape', '25-Gallon Specimen Tree'],
    materials: ['High-Density Injection Molded Polyethylene (HDPE)'],
    minOrderQuantity: '500 units',
    colors: ['Standard Matte Black', 'Forest Olive'],
    features: [
      'Heavy-duty grip handles for forklift / manual transport',
      'Multi-tier drainage system for rapid root run-off',
      'Stackable nesting geometry for minimal freight space',
      'Root-air pruning internal grooves'
    ],
    recommendedUse: 'Wholesale tree nurseries, commercial landscapers, botanical gardens.',
  },
  {
    id: 'flower-pots',
    title: 'Flower Pots',
    category: 'Flower Pots',
    shortDesc: 'Classic and modern flower pots for every season.',
    fullDesc: 'A versatile staple range of round, square, and tapered flower pots suitable for greenhouse seed-to-sale potting and seasonal point-of-sale displays.',
    emoji: '🌷',
    priceNote: 'Direct Factory Case Packing',
    sizes: ['6-inch Retail', '8-inch Standard', '10-inch Display', '12-inch Patio'],
    materials: ['Recyclable Polypropylene', 'Matte Finish Resin'],
    minOrderQuantity: '1,000 units',
    colors: ['Terracotta Classic', 'Onyx Black', 'Ivory', 'Sage Green'],
    features: [
      'High-speed automated potting machine compatible lips',
      'Optimized soil volume ratio',
      'UV resistant for prolonged sunny outdoor retail staging',
      'Matching snap-on saucers available'
    ],
    recommendedUse: 'Bedding plant growers, retail nurseries, floral mass merchants.',
    popular: true,
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    category: 'Custom Solutions',
    shortDesc: 'Bespoke planters tailored to your brand and specifications.',
    fullDesc: 'End-to-end bespoke manufacturing from 3D CAD modeling and custom tooling to branded embossing and custom Pantone color matching.',
    emoji: '🎍',
    priceNote: 'Custom Tooling & Contract Quotes',
    sizes: ['Custom engineered to client specifications'],
    materials: ['Custom Polymer blends, Biodegradable options, Fiber composites'],
    minOrderQuantity: 'Negotiable based on custom mold run',
    colors: ['Full Custom Pantone Color Matching'],
    features: [
      'In-house CAD & prototype 3D printing in 72 hours',
      'Embossed logo or molded brand tags',
      'Custom palletizing and barcoding for automated warehouses',
      'Complete supply chain logistics managed from our East Asia facility'
    ],
    recommendedUse: 'Major retail chains, private label brands, large horticultural conglomerates.',
  },
];

export const WHOLESALE_BENEFITS: WholesaleBenefit[] = [
  {
    id: 'volume-discounts',
    title: 'Volume Discounts',
    description: 'Competitive tiered pricing for bulk orders, pallet quantities, and seasonal long-term supply contracts.',
    iconName: 'Package',
    perk: 'Up to 35% margin savings',
  },
  {
    id: 'reliable-shipping',
    title: 'Reliable Shipping',
    description: 'Fast, freight-optimized delivery across Canada and the Continental United States from our Toronto distribution center.',
    iconName: 'Truck',
    perk: 'FCL, LTL & Pallet freight',
  },
  {
    id: 'custom-branding',
    title: 'Custom Branding',
    description: 'Private label options, barcode labeling, custom Pantone matching, and branded retail display packaging.',
    iconName: 'Palette',
    perk: 'Turnkey OEM & ODM',
  },
  {
    id: 'dedicated-support',
    title: 'Dedicated Support',
    description: 'A personal horticultural account manager assisting with seasonal forecasting, order coordination, and replenishment.',
    iconName: 'Users',
    perk: 'Direct Toronto sales desk',
  },
];

export const GROWTH_GUIDE_TOPICS: GrowthGuideTopic[] = [
  {
    id: 'seasonal-planning',
    title: 'Seasonal Commercial Planting & Ordering Calendar',
    category: 'Seasonal',
    readTime: '4 min read',
    summary: 'How commercial nurseries schedule planter delivery 3-4 months prior to spring potting to secure early-bird freight rates.',
    points: [
      'Order hanging baskets and bedding pots between October and December for Q1 arrival.',
      'Allow 4-6 weeks for pre-rooting trailing annuals prior to Mother’s Day retail peaks.',
      'Select insulated double-wall resin planters for late autumn mum programs to buffer root temperatures.',
      'Ensure drainage holes are cleared of winter salts before re-potting spring crops.'
    ],
    recommendedSeason: 'Spring & Fall Cycles',
  },
  {
    id: 'container-materials',
    title: 'Material Science: Resin vs Fiber-Clay vs HDPE',
    category: 'Materials',
    readTime: '5 min read',
    summary: 'A technical comparison of planter durability, weight-to-strength ratios, thermal insulation, and UV degradation thresholds.',
    points: [
      'Resin & Polypropylene: Superior flexibility, zero moisture absorption, shatter-proof in freeze-thaw cycles.',
      'Fiber-Clay: Aesthetic stone-like texture with superior thermal stability, ideal for municipal plazas.',
      'HDPE (Nursery Grade): Chemical resistance, longevity under high UV exposure, 100% recyclable.',
      'Drainage engineering: Why multi-tiered base channels prevent anaerobic root bacteria.'
    ],
    recommendedSeason: 'Year-Round Guide',
  },
  {
    id: 'market-trends',
    title: 'North American Horticultural Retail Trends',
    category: 'Market Trends',
    readTime: '3 min read',
    summary: 'Consumer appetite for earthy natural tones, space-saving vertical gardening, and durable self-watering balcony containers.',
    points: [
      'Growing urban density drives 28% year-over-year growth in hanging baskets and window box demand.',
      'Neutral earth pigments (Graphite, Mocha, Terracotta Matte) dominate consumer sales over glossy neons.',
      'Retailers reporting higher average order value when displaying pre-planted composite patio urns.',
      'Demand for 100% post-consumer recycled plastic containers continuing to expand.'
    ],
    recommendedSeason: 'Commercial Outlook',
  },
  {
    id: 'care-and-maintenance',
    title: 'Commercial Cleaning, Storage & Winterization',
    category: 'Care',
    readTime: '3 min read',
    summary: 'Best practices for sterilizing greenhouse containers between crop turns and stacking methods that prevent rim deformation.',
    points: [
      'Sanitize production containers with a 10% quaternary ammonium or mild hydrogen peroxide solution.',
      'Stack tapered pots inverted on wooden pallets to allow airflow and prevent moisture accumulation.',
      'Avoid high-pressure direct steam on thin-walled hanging baskets to preserve resin elasticity.',
      'Inspect wire hangers annually for stress fatigue in high-wind municipal hanging installations.'
    ],
    recommendedSeason: 'Post-Harvest Maintenance',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-moq',
    question: 'What are your minimum order quantities (MOQ)?',
    answer: 'Standard wholesale minimum order quantities depend on the product category. Hanging baskets start at 250 units (1 pallet), decorative planters at 100 units, standard flower pots at 1,000 units, and commercial garden containers at 500 units. For custom OEM colors or private molding, MOQ depends on tooling runs.',
    category: 'Orders & MOQ',
  },
  {
    id: 'faq-shipping',
    question: 'Where do you ship from and what are the freight options?',
    answer: 'Our primary North American fulfillment hub is located in Toronto, Ontario (86 Six Point Rd), providing rapid LTL (Less Than Truckload) and FTL (Full Truckload) delivery across Canada and the Continental United States. For mega-scale contract orders, factory-direct 40ft High Cube containers are shipped directly from our East Asia facility with customs clearance pre-arranged.',
    category: 'Shipping & Logistics',
  },
  {
    id: 'faq-frost',
    question: 'How do CTI Living planters withstand Canadian and northern US winters?',
    answer: 'All CTI Living resin, polypropylene, and fiber-clay products undergo rigorous laboratory freeze-thaw testing down to -30°C (-22°F). Our co-polymer resins contain specialized elasticizers that absorb expansion when soil freezes, preventing cracking, shattering, or surface spalling.',
    category: 'Materials & Quality',
  },
  {
    id: 'faq-branding',
    question: 'Can we apply custom branding, barcodes, or custom Pantone colors?',
    answer: 'Yes. We offer complete private label (OEM/ODM) programs. Options include permanent molded-in brand logos, UPC/barcode adhesive labeling for automated retail scanning, custom color matching to client Pantone swatches, and retail-ready pallet displays.',
    category: 'Custom Branding',
  },
  {
    id: 'faq-samples',
    question: 'Can commercial growers and retailers request physical samples before ordering?',
    answer: 'Absolutely. We provide free commercial sample kits to verified businesses, nurseries, landscape firms, and distributors. You can choose material swatches (polypropylene, fiber-clay, drainage cutouts) and color chips shipped directly to your facility.',
    category: 'Orders & MOQ',
  },
  {
    id: 'faq-payment',
    question: 'What are your commercial payment and credit terms?',
    answer: 'We accept wire transfers, major commercial cards, and EFT payments. Approved recurring wholesale accounts can qualify for Net 30 terms following an initial trade credit review. Pre-season booking discounts are available for orders placed 3–4 months in advance.',
    category: 'Orders & MOQ',
  },
  {
    id: 'faq-recyclable',
    question: 'Are CTI Living containers recyclable and eco-compliant?',
    answer: 'Yes. Our high-density polyethylene (HDPE) and polypropylene containers are 100% recyclable (Resin Identification Code #2 and #5). We utilize closed-loop regrind material where feasible while maintaining strict structural tensile requirements, and all colorants are heavy-metal free.',
    category: 'Materials & Quality',
  },
];

export const SAMPLE_KIT_OPTIONS: SampleKitOption[] = [
  {
    id: 'sample-resin-poly',
    name: 'UV-Stabilized Polypropylene Swatch',
    description: 'Raw material sample demonstrating wall thickness, flexural modulus, and UV inhibitor finish.',
    category: 'Polymer Resins',
  },
  {
    id: 'sample-fiber-clay',
    name: 'Fiber-Clay Architectural Finish Chip',
    description: 'Textured natural stone replica sample showing freeze-thaw composite density and weight.',
    category: 'Composites',
  },
  {
    id: 'sample-hanger-hook',
    name: 'Commercial Hanging Basket Wire & Clasp',
    description: 'Heavy-gauge steel wire hanger with wind-resistant snap clasp and swivel hook.',
    category: 'Hardware',
  },
  {
    id: 'sample-drainage-grid',
    name: 'Multi-Tier Aeration Base Cut-Out',
    description: 'Engineered cross-section showing sub-irrigation water wells and root aeration channels.',
    category: 'Engineering',
  },
  {
    id: 'sample-color-palette',
    name: 'Standard Commercial Color Chip Fan',
    description: 'Includes Terracotta, Slate Black, Classic Green, Mocha Brown, and Graphite Matte.',
    category: 'Finishes',
  },
];
