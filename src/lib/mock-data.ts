import { Product, Artisan, HomepageSection } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "indigo-block-print-maxi",
    name: "Indigo Block Print Maxi Dress",
    shortDescription: "A breezy, floor-length summer dress.",
    description: "A breezy, floor-length summer dress featuring traditional indigo block printing. Perfect for a sunny stroll or a weekend getaway.",
    category: "Resort Wear",
    fabricType: "Cotton",
    artisanId: "a1",
    featured: true,
    displayOrder: 1,
    priceDisplay: "$145",
    galleryImages: ["/images/hero-new-1.png"],
    materials: ["100% Cotton"],
    careInstructions: "Machine wash cold.",
    seoTitle: "Indigo Maxi Dress | Her Colors of India",
    seoDescription: "A beautiful block printed summer dress.",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "p2",
    slug: "vibrant-woven-market-tote",
    name: "Vibrant Woven Market Tote",
    shortDescription: "Bright, durable, and spacious woven tote.",
    description: "Bright, durable, and spacious. This woven tote is ethically handcrafted and perfect for groceries, the beach, or a summer picnic.",
    category: "Accessories",
    fabricType: "Woven Plastic",
    artisanId: "a2",
    featured: true,
    displayOrder: 2,
    priceDisplay: "$45",
    galleryImages: ["/images/product-bag.png"],
    materials: ["Recycled Plastic"],
    careInstructions: "Wipe clean with a damp cloth.",
    seoTitle: "Woven Market Tote | Her Colors of India",
    seoDescription: "Bright colorful woven market bags.",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "p3",
    slug: "white-linen-resort-dress",
    name: "White Linen Resort Dress",
    shortDescription: "The ultimate staple for any summer wardrobe.",
    description: "The ultimate staple for any summer wardrobe. Simple, elegant, and incredibly breathable white linen.",
    category: "Resort Wear",
    fabricType: "Linen",
    artisanId: "a1",
    featured: true,
    displayOrder: 3,
    priceDisplay: "$120",
    galleryImages: ["/images/product-linen.png"],
    materials: ["100% Linen"],
    careInstructions: "Dry clean or gentle hand wash.",
    seoTitle: "White Linen Dress | Her Colors of India",
    seoDescription: "Elegant white linen summer resort dress.",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "p4",
    slug: "set-3-block-print-pouches",
    name: "Set of 3 Block-Print Pouches",
    shortDescription: "Organize your life with color.",
    description: "Organize your life with color. These quilted, block-printed cotton pouches are perfect for cosmetics or travel.",
    category: "Accessories",
    fabricType: "Cotton",
    artisanId: "a2",
    featured: true,
    displayOrder: 4,
    priceDisplay: "$35",
    galleryImages: ["/images/product-pouches.png"],
    materials: ["100% Cotton", "YKK Zippers"],
    careInstructions: "Spot clean only.",
    seoTitle: "Block Print Pouches | Her Colors of India",
    seoDescription: "Set of 3 colorful block printed makeup bags.",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "p5",
    slug: "suzy-wrap-dress",
    name: "Suzy Bohemian Wrap Dress",
    shortDescription: "A beautiful, colorful wrap dress.",
    description: "Our signature Suzy Wrap Dress features intricate Indian block print patterns. It is incredibly versatile, comfortable, and perfect for warm summer days or dressed up for an evening out.",
    category: "Resort Wear",
    fabricType: "Cotton",
    artisanId: "a1",
    featured: true,
    displayOrder: 5,
    priceDisplay: "$95",
    galleryImages: ["/images/product-wrap.png"],
    materials: ["100% Cotton"],
    careInstructions: "Machine wash cold on gentle.",
    seoTitle: "Suzy Wrap Dress | Her Colors of India",
    seoDescription: "A beautiful bohemian block print wrap dress.",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "p6",
    slug: "tulip-double-layer-skirt",
    name: "Tulip Double Layer Skirt",
    shortDescription: "A flowy, double-layer maxi skirt.",
    description: "The Tulip skirt features two vibrant layers of block-printed cotton, creating beautiful movement as you walk. An absolute showstopper for summer festivals or beach vacations.",
    category: "Resort Wear",
    fabricType: "Cotton",
    artisanId: "a1",
    featured: true,
    displayOrder: 6,
    priceDisplay: "$85",
    galleryImages: ["/images/product-tulip.png"],
    materials: ["100% Cotton"],
    careInstructions: "Hand wash cold, hang to dry.",
    seoTitle: "Tulip Double Layer Skirt | Her Colors of India",
    seoDescription: "Flowy, colorful double layer tulip skirt.",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "p7",
    slug: "pointy-wrap-kimono",
    name: "Pointy Wrap Kimono Jacket",
    shortDescription: "Lightweight, flowy summer kimono.",
    description: "Layer with style. Our Pointy Wrap Kimono is made from ultra-lightweight fabric with stunning floral prints. Throw it over a tank top and jeans or use it as a chic swimsuit cover-up.",
    category: "Resort Wear",
    fabricType: "Rayon Blend",
    artisanId: "a2",
    featured: true,
    displayOrder: 7,
    priceDisplay: "$75",
    galleryImages: ["/images/product-kimono.png"],
    materials: ["Lightweight Rayon"],
    careInstructions: "Machine wash delicate.",
    seoTitle: "Wrap Kimono Jacket | Her Colors of India",
    seoDescription: "Colorful summer wrap kimono jacket.",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "p8",
    slug: "vibrant-harem-pants",
    name: "Vibrant Tie-Dye Harem Pants",
    shortDescription: "Ultra-comfortable wide-leg harem pants.",
    description: "The ultimate in comfort and boho style. These wide-leg harem pants feature vibrant tie-dye patterns and an elastic waist for the perfect fit.",
    category: "Resort Wear",
    fabricType: "Viscose",
    artisanId: "a2",
    featured: true,
    displayOrder: 8,
    priceDisplay: "$65",
    galleryImages: ["/images/product-harem.png"],
    materials: ["100% Viscose"],
    careInstructions: "Hand wash cold to preserve color.",
    seoTitle: "Tie-Dye Harem Pants | Her Colors of India",
    seoDescription: "Vibrant wide leg harem pants.",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
];

export const MOCK_ARTISANS: Artisan[] = [
  {
    id: "a1",
    slug: "amina-begum",
    name: "Amina Begum",
    biography: "A 5th generation master weaver specializing in intricate Banarasi brocades.",
    location: "Varanasi, Uttar Pradesh",
    experience: "35 Years",
    craftSpecialty: "Zari Weaving",
    gallery: [
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2128&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621886292650-520f76c747d6?q=80&w=2071&auto=format&fit=crop"
    ],
    productsCreated: ["p1"],
    story: "For Amina, the loom is not just a tool; it is an extension of her own heartbeat. Taught by her grandmother in the narrow, bustling lanes of Varanasi, she learned the rhythm of the shuttle before she could read. Today, she is one of the few women who command a master weaver's respect, meticulously guiding fine silver threads through deep, indigo-dyed silk. Every piece she creates carries the weight of a century-old legacy, an unspoken poem woven in silk and silver.",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "a2",
    slug: "devi-lal",
    name: "Devi Lal",
    biography: "A renowned Gota Patti artisan whose work has adorned royalty.",
    location: "Jaipur, Rajasthan",
    experience: "40 Years",
    craftSpecialty: "Gota Patti Embroidery",
    gallery: [
      "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2128&auto=format&fit=crop"
    ],
    productsCreated: ["p2"],
    story: "Devi Lal's hands move with a precision that defies his age. In a sunlit courtyard in Jaipur, he folds, cuts, and stitches ribbons of gold and silver onto vibrant fabrics. His work is highly sought after, characterized by a distinct sharpness in the metallic floral motifs that lesser artisans struggle to replicate. He works patiently, often spending weeks on a single lehenga, ensuring that the heritage of Rajasthani royalty lives on in the modern era.",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }
];

export const MOCK_HOMEPAGE_SECTIONS: HomepageSection[] = [
  {
    id: "hero-1",
    type: "Hero",
    isHidden: false,
    order: 1,
    data: {
      title: "The Art of Handcrafted Luxury",
      subtitle: "Discover authentic Indian heritage, woven into every thread by master artisans.",
      mediaUrls: [
        "/images/hero-new-1.png",
        "/images/product-bag.png",
        "/images/product-linen.png",
        "/images/product-pouches.png"
      ],
      ctaText: "Explore the Collection",
      ctaLink: "/collections"
    }
  },
  {
    id: "story-1",
    type: "Story",
    isHidden: false,
    order: 2,
    data: {
      title: "Handcrafted with Love",
      content: "Her Colors of India is more than a label. We bring you a curated collection of breezy clothing, woven market bags, and home decor directly from women entrepreneurs and designers across India. Every piece you buy supports small businesses and authentic craftsmanship."
    }
  },
  {
    id: "categories-1",
    type: "FeaturedCategories",
    isHidden: false,
    order: 3,
    data: {
      title: "Curated Collections",
      categories: [
        {
          name: "Resort Wear",
          image: "/images/product-linen.png",
          link: "/collections"
        },
        {
          name: "Woven Bags",
          image: "/images/product-bag.png",
          link: "/collections"
        },
        {
          name: "Accessories",
          image: "/images/product-pouches.png",
          link: "/collections"
        }
      ]
    }
  },
  {
    id: "artisan-spotlight-1",
    type: "ArtisanSpotlight",
    isHidden: false,
    order: 4,
    data: {
      artisanId: "a1",
      quote: "Every piece I weave carries the weight of a century-old legacy, an unspoken poem in silk and silver.",
      name: "Amina Begum",
      role: "Master Weaver, Varanasi",
      image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2128&auto=format&fit=crop"
    }
  },
  {
    id: "craftsmanship-1",
    type: "Craftsmanship",
    isHidden: false,
    order: 5,
    data: {
      title: "The Making of a Masterpiece",
      subtitle: "It takes over 300 hours of meticulous, unhurried focus to create a single garment.",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2128&auto=format&fit=crop"
    }
  },
  {
    id: "featured-products-1",
    type: "FeaturedProducts",
    isHidden: false,
    order: 6,
    data: {
      title: "Signature Pieces",
      productIds: ["p1", "p2", "p3"]
    }
  },
  {
    id: "newsletter-1",
    type: "CTA",
    isHidden: false,
    order: 7,
    data: {
      title: "Join The Inner Circle",
      subtitle: "Gain exclusive early access to limited edition weaves, private events, and untold stories from our artisans.",
      buttonText: "Subscribe"
    }
  }
];
