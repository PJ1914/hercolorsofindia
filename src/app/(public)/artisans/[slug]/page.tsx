import { MOCK_ARTISANS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artisan = MOCK_ARTISANS.find(a => a.slug === slug);
  
  if (!artisan) return { title: "Artisan Not Found" };

  return {
    title: `${artisan.name} | Master Artisan | Her Colors of India`,
    description: artisan.biography.substring(0, 160),
    openGraph: {
      images: artisan.gallery?.[0] ? [artisan.gallery[0]] : [],
    },
  };
}

export default async function ArtisanProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artisan = MOCK_ARTISANS.find(a => a.slug === slug);

  if (!artisan) {
    notFound();
  }

  // Generate JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artisan.name,
    description: artisan.biography,
    image: artisan.gallery?.[0] || "",
    jobTitle: artisan.craftSpecialty,
    homeLocation: {
      "@type": "Place",
      name: artisan.location
    }
  };

  return (
    <article className="min-h-screen bg-background pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <header className="relative w-full h-[70vh] bg-muted flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        {artisan.gallery && artisan.gallery[0] && (
           <img
            src={artisan.gallery[0]}
            alt={artisan.name}
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        )}
        <div className="relative z-20 container px-4 pb-16">
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-white/80 font-medium tracking-[0.3em] uppercase text-sm mb-4">{artisan.craftSpecialty}</p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 text-white">{artisan.name}</h1>
            <p className="text-xl md:text-3xl font-light opacity-90 text-white/80">{artisan.location}</p>
          </ScrollReveal>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <ScrollReveal direction="up" delay={0.1}>
          <Link href="/artisans" className="inline-flex items-center space-x-2 text-foreground/60 hover:text-primary mb-16 transition-colors uppercase tracking-widest text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Masters</span>
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Sidebar Stats */}
          <ScrollReveal direction="up" delay={0.2} className="md:col-span-4 space-y-12 border-l border-border pl-8 py-4">
            <div>
              <h3 className="text-xs font-medium text-foreground/50 uppercase tracking-widest mb-3">Experience</h3>
              <p className="font-serif text-3xl">{artisan.experience}</p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-foreground/50 uppercase tracking-widest mb-3">Location</h3>
              <p className="font-serif text-3xl">{artisan.location}</p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-foreground/50 uppercase tracking-widest mb-3">Specialty</h3>
              <p className="font-serif text-3xl text-primary">{artisan.craftSpecialty}</p>
            </div>
          </ScrollReveal>

          {/* Story Content */}
          <ScrollReveal direction="up" delay={0.3} className="md:col-span-8 prose prose-neutral prose-lg max-w-none">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-8">The Legacy</h2>
            <p className="whitespace-pre-wrap leading-relaxed text-foreground/80 font-light text-xl md:text-2xl">{artisan.story || artisan.biography}</p>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        {artisan.gallery && artisan.gallery.length > 1 && (
          <ScrollReveal direction="up" delay={0.4} className="mt-32">
            <h2 className="font-serif text-4xl font-bold text-center mb-16">Craft in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artisan.gallery.slice(1).map((img, idx) => (
                <div key={idx} className="relative aspect-[4/5] overflow-hidden bg-muted">
                   <img src={img} alt={`${artisan.name} working`} className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </article>
  );
}
