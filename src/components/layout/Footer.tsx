import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-8">
                <span className="font-serif text-3xl font-bold tracking-tight">
                  Her Colors of India
                </span>
              </Link>
              <p className="text-background/70 font-light text-lg max-w-sm leading-relaxed mb-12">
                Empowering women artisans. Discover authentic, premium ethical fashion directly from the makers.
              </p>
            </div>
            
            <div className="flex space-x-8">
              <a href="https://www.instagram.com/hercolorsofindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-xs uppercase tracking-[0.2em] font-medium text-background/50 hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-xs uppercase tracking-[0.2em] font-medium text-background/50 hover:text-primary transition-colors">Pinterest</a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-background/40 mb-8">Explore</h3>
            <ul className="space-y-5">
              <li><Link href="/collections" className="font-light text-lg text-background/80 hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="/artisans" className="font-light text-lg text-background/80 hover:text-primary transition-colors">The Masters</Link></li>
              <li><Link href="/about" className="font-light text-lg text-background/80 hover:text-primary transition-colors">The Legacy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-background/40 mb-8">Client Services</h3>
            <ul className="space-y-5">
              <li><Link href="/contact" className="font-light text-lg text-background/80 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="font-light text-lg text-background/80 hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="font-light text-lg text-background/80 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-background/20 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-background/40 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Her Colors of India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0 text-xs text-background/40 tracking-widest uppercase">
             <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
