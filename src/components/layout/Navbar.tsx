"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Collections", href: "/collections" },
    { name: "Artisans", href: "/artisans" },
    { name: "The Legacy", href: "/about" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground/80 hover:text-foreground transition-colors p-2 -ml-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Desktop Left Nav */}
          <div className="hidden md:flex flex-1 items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-foreground relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-foreground after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform",
                  pathname === link.href ? "text-foreground after:scale-x-100" : "text-foreground/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center justify-center">
            <span className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Her Colors of India
            </span>
          </Link>

          {/* Desktop Right Nav */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-8">
            <Link href="/contact" className="text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-foreground text-foreground/50">
              Client Services
            </Link>
            <button className="text-foreground/80 hover:text-foreground transition-colors relative">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-white">0</span>
            </button>
          </div>

          {/* Mobile Right */}
          <div className="md:hidden flex items-center">
             <button className="text-foreground/80 hover:text-foreground transition-colors relative p-2 -mr-2">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col">
          <div className="flex justify-between items-center p-6 h-24 border-b border-border/20">
            <span className="font-serif text-xl font-bold text-foreground">H.C.I</span>
            <button
              className="text-foreground hover:text-primary transition-colors p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center space-y-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-4xl text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
                href="/contact"
                className="font-serif text-4xl text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
            >
              Client Services
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
