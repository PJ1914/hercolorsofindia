"use client";

import { HomepageSection } from "@/types";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function HeroSection({ data }: { data: Record<string, any> }) {
  const mediaUrls = data.mediaUrls || [data.mediaUrl];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (mediaUrls.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaUrls.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [mediaUrls.length]);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row bg-background">
      {/* Text Content (Left) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1 pt-16 lg:pt-0 z-10 bg-background">
        <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
          <ScrollReveal delay={0.2} direction="up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-foreground leading-[1.1]">
              {data.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up">
            <p className="text-lg md:text-xl mb-12 font-light tracking-wide text-foreground/70 leading-relaxed">
              {data.subtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6} direction="up">
            <Link 
              href={data.ctaLink || "/collections"} 
              className="inline-flex items-center space-x-3 bg-foreground text-background px-10 py-5 rounded-sm font-medium tracking-widest uppercase text-xs hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span>{data.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Image Content (Right Carousel) */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative order-1 lg:order-2 overflow-hidden bg-muted">
        {mediaUrls.map((url: string, index: number) => (
          <div 
            key={url}
            className={cn(
              "absolute inset-0 bg-cover bg-[center_top] bg-no-repeat transition-all duration-1000 ease-in-out",
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            )}
            style={{ backgroundImage: `url('${url}')` }}
          />
        ))}
      </div>
    </section>
  );
}

function StorySection({ data }: { data: Record<string, any> }) {
  return (
    <section className="py-32 bg-background container mx-auto px-4 text-center">
      <ScrollReveal direction="up" delay={0.2} className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-10 text-foreground">{data.title}</h2>
        <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light">
          {data.content}
        </p>
      </ScrollReveal>
    </section>
  );
}

function FeaturedCategoriesSection({ data }: { data: Record<string, any> }) {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center">{data.title}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.categories?.map((cat: any, idx: number) => (
            <ScrollReveal key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
              <Link href={cat.link} className="group block relative aspect-[4/5] overflow-hidden">
                <img src={cat.image} alt={cat.name} className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="font-serif text-3xl font-bold mb-2">{cat.name}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-80 group-hover:opacity-100 transition-opacity">Explore</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtisanSpotlightSection({ data }: { data: Record<string, any> }) {
  return (
    <section className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden">
              <img src={data.image} alt={data.name} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.4} className="flex flex-col justify-center">
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6">Artisan Spotlight</span>
            <blockquote className="font-serif text-4xl md:text-5xl leading-tight mb-10 italic text-background/90">
              "{data.quote}"
            </blockquote>
            <div>
              <p className="text-xl font-bold mb-1">{data.name}</p>
              <p className="text-background/60 text-sm tracking-widest uppercase">{data.role}</p>
            </div>
            <div className="mt-12">
              <Link href={`/artisans/${data.artisanId}`} className="border-b border-primary text-primary pb-1 font-medium tracking-widest uppercase text-sm hover:text-white transition-colors">
                Discover Her Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function CraftsmanshipSection({ data }: { data: Record<string, any> }) {
  return (
    <section className="py-32 container mx-auto px-4 text-center">
       <ScrollReveal direction="up" delay={0.1}>
          <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">The Process</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">{data.title}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-light mb-16">{data.subtitle}</p>
       </ScrollReveal>
       <ScrollReveal direction="up" delay={0.3}>
          <div className="relative w-full aspect-[21/9] overflow-hidden">
             <img src={data.image} alt="Craftsmanship" className="object-cover w-full h-full" />
          </div>
       </ScrollReveal>
    </section>
  );
}

function FeaturedProductsSection({ data }: { data: Record<string, any> }) {
  const featuredProducts = MOCK_PRODUCTS.filter(p => data.productIds?.includes(p.id));

  if (!featuredProducts.length) return null;

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-4xl md:text-5xl">{data.title}</h2>
            <Link href="/collections" className="hidden md:block border-b border-foreground pb-1 text-sm tracking-widest uppercase font-medium hover:text-primary transition-colors">
              View All
            </Link>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <ScrollReveal key={product.id} direction="up" delay={0.2 + (idx * 0.1)}>
               <Link href={`/products/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted mb-6">
                  {product.galleryImages?.[0] && (
                    <img src={product.galleryImages[0]} alt={product.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  )}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-foreground/60 font-light">{product.priceDisplay}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ data }: { data: Record<string, any> }) {
  return (
    <section className="py-32 bg-primary/5 border-t border-border">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" delay={0.2} className="max-w-2xl mx-auto text-center">
          <Mail className="w-10 h-10 mx-auto mb-8 text-primary opacity-80" />
          <h2 className="font-serif text-4xl md:text-5xl mb-6">{data.title}</h2>
          <p className="text-lg text-foreground/70 mb-10 font-light leading-relaxed">{data.subtitle}</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="/api/subscribe">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-4 border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-sm"
              required 
            />
            <button type="submit" className="bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary transition-colors rounded-sm">
              {data.buttonText}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}


export function HomepageRenderer({ sections }: { sections: HomepageSection[] }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  // Sort sections by order
  const orderedSections = [...sections]
    .sort((a, b) => a.order - b.order)
    .filter(s => !s.isHidden);

  return (
    <div className="flex flex-col w-full">
      {orderedSections.map((section) => {
        switch (section.type) {
          case "Hero":
            return <HeroSection key={section.id} data={section.data} />;
          case "Story":
            return <StorySection key={section.id} data={section.data} />;
          case "FeaturedCategories":
            return <FeaturedCategoriesSection key={section.id} data={section.data} />;
          case "ArtisanSpotlight":
            return <ArtisanSpotlightSection key={section.id} data={section.data} />;
          case "Craftsmanship":
            return <CraftsmanshipSection key={section.id} data={section.data} />;
          case "FeaturedProducts":
            return <FeaturedProductsSection key={section.id} data={section.data} />;
          case "CTA":
            return <CTASection key={section.id} data={section.data} />;
          default:
            return <div key={section.id} className="hidden" />;
        }
      })}
    </div>
  );
}
