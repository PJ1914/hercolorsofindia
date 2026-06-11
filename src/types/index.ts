export type ProductStatus = "published" | "draft";

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  fabricType: string;
  artisanId: string;
  featured: boolean;
  displayOrder: number;
  priceDisplay: string;
  galleryImages: string[];
  materials: string[];
  careInstructions: string;
  seoTitle: string;
  seoDescription: string;
  status: ProductStatus;
  createdAt: number; // Storing as Unix timestamp for easier serialization
  updatedAt: number;
}

export interface Artisan {
  id: string;
  slug: string;
  name: string;
  biography: string;
  location: string;
  experience: string;
  craftSpecialty: string;
  gallery: string[];
  productsCreated: string[]; // Array of product IDs
  story: string; // Rich text / HTML
  createdAt: number;
  updatedAt: number;
}

export type InquiryStatus = "New" | "In Progress" | "Responded" | "Closed";

export interface Inquiry {
  id: string;
  productId: string;
  customerName: string;
  email: string;
  phone: string;
  message: string;
  status: InquiryStatus;
  createdAt: number;
}

// Modular Homepage Types
export type HomepageSectionType = 
  | "Hero" 
  | "Story" 
  | "FeaturedCategories"
  | "ArtisanSpotlight" 
  | "Craftsmanship" 
  | "FeaturedProducts" 
  | "Testimonials" 
  | "CTA";

export interface HomepageSection {
  id: string;
  type: HomepageSectionType;
  isHidden: boolean;
  order: number;
  data: Record<string, any>; // Flexible payload depending on type
}

export interface Homepage {
  id: string; // Typically a singleton "content"
  sections: HomepageSection[];
  updatedAt: number;
}

export interface Settings {
  id: string; // Singleton
  siteName: string;
  logo: string;
  favicon: string;
  contactEmail: string;
  contactPhone: string;
  whatsapp: string;
  socialLinks: Record<string, string>;
  seoDefaults: {
    title: string;
    description: string;
    image: string;
  };
  createdAt: number;
  updatedAt: number;
}
