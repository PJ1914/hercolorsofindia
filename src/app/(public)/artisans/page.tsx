import { MOCK_ARTISANS } from "@/lib/mock-data";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function ArtisansPage() {
  const artisans = MOCK_ARTISANS;

  return (
    <div className="container mx-auto px-4 py-24">
      <header className="mb-24 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">Meet the Masters</h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light tracking-wide leading-relaxed">
            The heart and soul of Her Colors of India. Discover the master weavers, dyers, and embroiderers whose hands bring our legacy to life.
          </p>
        </ScrollReveal>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {artisans.map((artisan, index) => (
          <ScrollReveal key={artisan.id} direction="up" delay={0.1 + (index * 0.1)}>
            <Link href={`/artisans/${artisan.slug}`} className="group flex flex-col items-center text-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 overflow-hidden rounded-full bg-muted">
                {artisan.gallery && artisan.gallery[0] ? (
                  <img
                    src={artisan.gallery[0]}
                    alt={artisan.name}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-muted-foreground font-light tracking-widest uppercase text-sm">
                    No image
                  </div>
                )}
              </div>
              <h3 className="font-serif text-3xl font-bold mb-3 text-foreground transition-colors group-hover:text-primary">{artisan.name}</h3>
              <p className="text-foreground/50 font-medium mb-4 uppercase tracking-[0.2em] text-xs">{artisan.craftSpecialty}</p>
              <p className="text-base text-foreground/70 line-clamp-3 max-w-md font-light leading-relaxed">{artisan.biography}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
