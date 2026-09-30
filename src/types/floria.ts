export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  heightRatio?: string;
  stems: string[];
  dimensions: string;
  vaseType: string;
  longevityDays: string;
  scentProfile: string;
  description: string;
}

export interface ArchiveItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  image: string;
  aspectClass: string;
  category: string;
  commissionType: string;
  details: string;
  specs: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  initial: string;
  name: string;
  role: string;
  stars: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizationNotes?: string;
}

export interface CustomStemChoice {
  vessel: string;
  primaryStem: string;
  companionFoliage: string;
  aestheticMood: string;
  basePrice: number;
}
