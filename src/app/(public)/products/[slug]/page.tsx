import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { InquiryForm } from "@/components/features/inquiries/InquiryForm";
import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find(p => p.slug === slug);
  
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.seoTitle || `${product.name} | Her Colors of India`,
    description: product.seoDescription || product.shortDescription,
    openGraph: {
      images: product.galleryImages?.[0] ? [product.galleryImages[0]] : [],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Generate JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.galleryImages,
    category: product.category,
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: product.priceDisplay.replace(/[^0-9.]/g, '') || "0", 
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ScrollReveal direction="up" delay={0.1} className="mb-12">
        <Link href="/collections" className="inline-flex items-center space-x-2 text-foreground/60 hover:text-primary transition-colors text-sm uppercase tracking-widest">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Collections</span>
        </Link>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Gallery */}
        <ScrollReveal direction="up" delay={0.2} className="space-y-6">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
             {product.galleryImages && product.galleryImages[0] ? (
                <img
                  src={product.galleryImages[0]}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-muted-foreground font-light tracking-widest uppercase">
                  No images available
                </div>
              )}
          </div>
          {/* If there are multiple images, display secondary below */}
          {product.galleryImages && product.galleryImages.length > 1 && (
            <div className="grid grid-cols-2 gap-6">
              {product.galleryImages.slice(1).map((img, idx) => (
                <div key={idx} className="relative aspect-[3/4] w-full bg-muted overflow-hidden">
                   <img src={img} alt={`${product.name} detail`} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>

        {/* Right: Details */}
        <ScrollReveal direction="up" delay={0.3} className="flex flex-col pt-4 lg:pt-10">
          <div className="mb-6">
            <span className="text-xs font-medium text-foreground/50 uppercase tracking-[0.2em]">{product.category}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">{product.name}</h1>
          <p className="text-2xl font-light mb-12 text-foreground/80">{product.priceDisplay}</p>
          
          <div className="prose prose-neutral mb-12 max-w-none">
            <p className="text-foreground/70 leading-relaxed font-light text-lg whitespace-pre-wrap">{product.description}</p>
          </div>

          <div className="mb-16 space-y-6 text-sm text-foreground/80 border-t border-b border-border py-8">
            {product.fabricType && (
              <div className="flex justify-between items-center">
                <span className="uppercase tracking-widest font-medium text-xs">Fabric</span>
                <span className="font-light">{product.fabricType}</span>
              </div>
            )}
            {product.materials && product.materials.length > 0 && (
              <div className="flex justify-between items-center">
                <span className="uppercase tracking-widest font-medium text-xs">Materials</span>
                <span className="font-light">{product.materials.join(", ")}</span>
              </div>
            )}
            {product.careInstructions && (
              <div className="flex justify-between items-center">
                <span className="uppercase tracking-widest font-medium text-xs">Care</span>
                <span className="font-light text-right max-w-[60%]">{product.careInstructions}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-6 mt-auto">
            {/* Inquiry Form Component */}
            <div className="bg-muted/40 p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Inquire About This Piece</h3>
              <p className="text-sm text-foreground/60 mb-8 font-light leading-relaxed">Due to the handcrafted nature of our pieces, sizing and availability may vary. Submit an inquiry and our client advisor will assist you directly.</p>
              <InquiryForm productId={product.id} productName={product.name} />
            </div>
            
            {product.artisanId && (
              <Link 
                href={`/artisans/${product.artisanId}`} 
                className="w-full border border-border py-5 font-medium tracking-widest uppercase text-xs text-center hover:bg-foreground hover:text-background transition-colors flex items-center justify-center space-x-3 mt-4"
              >
                <span>Discover the Artisan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
