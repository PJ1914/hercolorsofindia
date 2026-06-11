import { MOCK_PRODUCTS } from "@/lib/mock-data";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function CollectionsPage() {
  const products = MOCK_PRODUCTS;

  return (
    <div className="container mx-auto px-4 py-24">
      <header className="mb-20 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Collections</h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light tracking-wide">
            Explore our curated selection of handcrafted luxury, featuring unique pieces from master artisans across India.
          </p>
        </ScrollReveal>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {products.map((product, index) => {
          // Create an asymmetrical layout by pushing odd items down
          const isOdd = index % 2 !== 0;
          
          return (
            <ScrollReveal 
              key={product.id} 
              direction="up" 
              delay={0.1 + (index * 0.1)}
              className={isOdd ? "md:mt-32" : ""}
            >
              <Link href={`/products/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted mb-8">
                  {product.galleryImages && product.galleryImages[0] ? (
                    <img
                      src={product.galleryImages[0]}
                      alt={product.name}
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-muted-foreground font-light tracking-widest uppercase">
                      No image
                    </div>
                  )}
                  {/* Subtle overlay for luxury feel */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-foreground tracking-wide group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-foreground/60 mb-4 font-light tracking-widest uppercase">{product.category}</p>
                  <p className="font-medium text-foreground">{product.priceDisplay}</p>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
