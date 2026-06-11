import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="font-serif text-8xl md:text-[12rem] font-bold text-foreground/10 tracking-tighter mb-4">
          404
        </h1>
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-foreground/60 max-w-md mx-auto mb-12 font-light leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center space-x-3 bg-foreground text-background px-10 py-5 rounded-sm font-medium tracking-widest uppercase text-xs hover:bg-primary hover:text-white transition-all duration-300"
        >
          <span>Return Home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </main>

      <Footer />
    </div>
  );
}
