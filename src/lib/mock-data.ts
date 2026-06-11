import { Product, Artisan, HomepageSection } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "midnight-indigo-saree",
    name: "Midnight Indigo Silk Saree",
    shortDescription: "Hand-dyed pure silk saree with intricate Zari borders.",
    description: "Woven under the starlit sky of Varanasi, this exquisite piece features deep indigo hues achieved through ancient natural dyeing techniques. The heavy Zari border is spun with pure silver thread, offering a subtle, sophisticated shimmer that commands attention at any evening gathering.",
    category: "Sarees",
    fabricType: "Pure Silk",
    artisanId: "a1",
    featured: true,
    displayOrder: 1,
    priceDisplay: "$1,250",
    galleryImages: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2187&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733959-b1523b038c9c?q=80&w=1974&auto=format&fit=crop"
    ],
    materials: ["100% Pure Mulberry Silk", "Silver Zari"],
    careInstructions: "Dry clean only. Store in a breathable cotton muslin bag.",
    seoTitle: "Midnight Indigo Silk Saree | Her Colors of India",
    seoDescription: "Hand-dyed pure silk saree with intricate Zari borders. A masterpiece of Varanasi weaving.",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "p2",
    slug: "saffron-sunset-lehenga",
    name: "Saffron Sunset Lehenga",
    shortDescription: "A breathtaking bridal lehenga featuring signature Gota Patti work.",
    description: "This lehenga captures the vibrant energy of a Rajasthan sunset. The deep saffron base is meticulously adorned with traditional Gota Patti embroidery. Each piece of gold ribbon is appliquéd by hand, taking our master artisans over 300 hours to complete.",
    category: "Lehengas",
    fabricType: "Raw Silk",
    artisanId: "a2",
    featured: true,
    displayOrder: 2,
    priceDisplay: "$3,400",
    galleryImages: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2183&auto=format&fit=crop"
    ],
    materials: ["Raw Silk", "Gold Gota Ribbon", "Cotton Lining"],
    careInstructions: "Professional dry clean only. Avoid spraying perfume directly on embroidery.",
    seoTitle: "",
    seoDescription: "",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "p3",
    slug: "ivory-heritage-kurta",
    name: "Ivory Heritage Kurta Set",
    shortDescription: "Minimalist Chikankari embroidery on gossamer cotton.",
    description: "Embodying the soul of slow luxury, this kurta set features tone-on-tone Chikankari shadow work from Lucknow. The feather-light cotton offers unparalleled breathability and comfort, making it the perfect choice for sophisticated daytime events.",
    category: "Kurta Sets",
    fabricType: "Mulmul Cotton",
    artisanId: "a1",
    featured: false,
    displayOrder: 3,
    priceDisplay: "$450",
    galleryImages: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1934&auto=format&fit=crop"
    ],
    materials: ["100% Fine Cotton", "Cotton Thread"],
    careInstructions: "Gentle hand wash in cold water. Dry in shade.",
    seoTitle: "",
    seoDescription: "",
    status: "published",
    createdAt: Date.now(),
    updatedAt: Date.now(),
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
        "/images/hero.png",
        "/images/hero-2.png",
        "/images/hero-3.png"
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
      title: "Woven With Purpose",
      content: "Her Colors of India is more than a luxury label. We are a tribute to the silent, powerful women artisans who have safeguarded India's textile legacy for centuries. By eliminating middlemen, we ensure our creators receive the respect and compensation their mastery demands. Every garment you wear is a story of empowerment, heritage, and unparalleled craftsmanship."
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
          name: "Bridal Lehengas",
          image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2183&auto=format&fit=crop",
          link: "/collections"
        },
        {
          name: "Heritage Sarees",
          image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2187&auto=format&fit=crop",
          link: "/collections"
        },
        {
          name: "Everyday Luxury",
          image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1934&auto=format&fit=crop",
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
