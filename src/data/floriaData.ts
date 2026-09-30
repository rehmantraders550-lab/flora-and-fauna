import { Product, ArchiveItem, Testimonial } from '../types/floria';

export const PRODUCTS: Product[] = [
  {
    id: 'ethereal-greens',
    name: 'Ethereal Greens',
    subtitle: 'Seasonal Assemblage / 01',
    price: 120,
    image: 'https://floria-landing-page.vercel.app/bouquet-3.webp',
    stems: ['Coral Charm Peonies', 'Silver Brunia', 'Sweet Pea Stems', 'Gunni Eucalyptus'],
    dimensions: '65cm H × 45cm W',
    vaseType: 'Hand-thrown charcoal stoneware vessel (included)',
    longevityDays: '10–14 days in indirect daylight',
    scentProfile: 'Crisp green tea, peppery peony sap, cut botanical stem',
    description: 'A structural interplay of full-bloom coral charm peonies anchored against architectural green branches. Designed to command center stage on console tables or open dining islands.'
  },
  {
    id: 'midnight-orchid',
    name: 'Midnight Orchid',
    subtitle: 'Seasonal Assemblage / 02',
    price: 185,
    image: 'https://floria-landing-page.vercel.app/bouquet-2.webp',
    stems: ['Singular Vanda Orchid (Midnight Black/Violet)', 'Ikebana Root Tether', 'Glass Apothecary Vessel'],
    dimensions: '38cm H × 22cm W',
    vaseType: 'Mouth-blown midnight apothecary glass flacon',
    longevityDays: '21–28 days with distilled misting',
    scentProfile: 'Smoked violet petal, dry cedarwood, evening dew',
    description: 'A study in radical minimalism. One single, rare deep-violet Vanda orchid suspended in weightless stillness. An enigmatic focal piece for intimate desks and bedside niches.'
  },
  {
    id: 'blush-peony-structura',
    name: 'Blush Peony Structura',
    subtitle: 'Seasonal Assemblage / 03',
    price: 95,
    image: 'https://floria-landing-page.vercel.app/bouquet-1.webp',
    stems: ['Alabaster Garden Roses', 'Bleached Ruscus', 'Wild Eucalyptus Umbel', 'White Lisianthus'],
    dimensions: '50cm H × 40cm W',
    vaseType: 'Chalk-washed matte ceramic amphora',
    longevityDays: '12–16 days',
    scentProfile: 'Wild honey, crushed olive leaves, morning bergamot',
    description: 'Cascading textures of airy eucalyptus cradling ivory garden roses and bleached ruscus branches. Inspired by Mediterranean limestone and quiet morning light.'
  }
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'wedding-archive',
    number: '01',
    title: 'The Wedding Archive',
    summary: 'Sculptural centerpieces and avant-garde bridal arrangements.',
    image: 'https://floria-landing-page.vercel.app/collection-1.webp',
    aspectClass: 'lg:col-span-8',
    category: 'Installations & Celebrations',
    commissionType: 'Private Commission',
    details: 'Commissioned for an architectural glasshouse ceremony in the coastal hills. Features cascaded phalaenopsis orchids, obsidian calla lilies, and structural monstera silhouettes.',
    specs: ['Site-specific installation', 'Over 400 sculptural stems', 'Natural gravity-balance rigging']
  },
  {
    id: 'weekly-subs',
    number: '02',
    title: 'Weekly Studio Subs',
    summary: 'Seasonal rotations delivered to residences & studios.',
    image: 'https://floria-landing-page.vercel.app/collection-2.webp',
    aspectClass: 'lg:col-span-4',
    category: 'Subscription Editions',
    commissionType: 'Bi-weekly Studio Rotations',
    details: 'Curated weekly botanical deliveries calibrated to architectural interiors. Stems arrive conditioned and ready to drop into signature Floria vessels.',
    specs: ['Rotates every 14 days', 'Zero plastic packaging', 'Seasonal local grower priority']
  },
  {
    id: 'dried-preserved',
    number: '03',
    title: 'Dried & Preserved',
    summary: 'Eternal structures made to withstand years.',
    image: 'https://floria-landing-page.vercel.app/collection-3.webp',
    aspectClass: 'lg:col-span-4',
    category: 'Permanent Botanical Works',
    commissionType: 'Archival Keepsakes',
    details: 'Naturally desiccated florals and structural seed pods treated with organic botanic sealants. Retains rich earth tones without shedding or degradation.',
    specs: ['Zero watering required', '3+ year longevity', 'Sustainably preserved']
  },
  {
    id: 'corporate-installs',
    number: '04',
    title: 'Corporate Installs',
    summary: 'Atmospheric lobbying and boardroom statements.',
    image: 'https://floria-landing-page.vercel.app/collection-4.webp',
    aspectClass: 'lg:col-span-4',
    category: 'Commercial Spaces',
    commissionType: 'Enterprise Architecture',
    details: 'Monumental installations crafted for private equity suites, design agencies, and museum atriums. Engineered for quiet power and low maintenance.',
    specs: ['Weekly maintenance included', 'Fire-rated vessel mounting', 'Acoustic dampening volume']
  },
  {
    id: 'workshops',
    number: '05',
    title: 'Workshops',
    summary: 'Master the structure of nature in small studio salons.',
    image: 'https://floria-landing-page.vercel.app/collection-5.webp',
    aspectClass: 'lg:col-span-4',
    category: 'Educational Salon',
    commissionType: 'Intimate Masterclasses',
    details: 'Limited to 8 practitioners per session. Explore the mathematical harmony of Ikebana, negative space tension, and botanical vessel pairing in our sunlit loft.',
    specs: ['Take-home ceramic kenzan', 'Rare stem kit provided', '3 hours immersive practice']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Floria totally transformed our gallery space. It didn’t look like flowers; it looked like living art.',
    initial: 'A',
    name: 'Amara Osei',
    role: 'Gallery Director',
    stars: 5
  },
  {
    id: 't-2',
    quote: 'Their structural approach to botanicals is unparalleled in the city. Not just a bouquet, an architectural statement.',
    initial: 'M',
    name: 'Markus Vance',
    role: 'Product Lead, Aethos',
    stars: 5
  },
  {
    id: 't-3',
    quote: 'I’ve never experienced an installation so deeply attuned to natural workflows. It responds with quiet intelligence.',
    initial: 'J',
    name: 'Julian Thorne',
    role: 'Founder, Synthetix',
    stars: 5
  },
  {
    id: 't-4',
    quote: 'Elegant, fluid, and brilliantly executed. It stands out by whispering instead of shouting. A profound paradigm shift.',
    initial: 'E',
    name: 'Elena Rostova',
    role: 'Tech Curator',
    stars: 5
  },
  {
    id: 't-5',
    quote: 'The attention to the smallest interactions makes every room feel rewarding. The performance is staggering, yet serene.',
    initial: 'D',
    name: 'David Kim',
    role: 'Systems Engineer',
    stars: 5
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation & Vision',
    description: 'We explore your aesthetic, the spatial architecture, and the invisible emotional tone you wish to set.'
  },
  {
    step: '02',
    title: 'Botanical Sourcing',
    description: 'Procuring rare, seasonal stems from strictly local growers and specialized independent farms.'
  },
  {
    step: '03',
    title: 'Structural Design',
    description: 'Applying Ikebana principles and modern proportions to build a living sculpture that breathes.'
  }
];
