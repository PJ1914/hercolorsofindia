"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Image as ImageIcon, 
  MessageSquare, 
  Settings,
  LogOut
} from "lucide-react";

const adminNav = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Homepage CMS", href: "/admin/homepage", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Artisans", href: "/admin/artisans", icon: Users },
  { name: "Media Library", href: "/admin/media", icon: ImageIcon },
  { name: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Simple layout for login page
  if (pathname === "/admin/login") {
    return <main className="min-h-screen bg-muted flex items-center justify-center">{children}</main>;
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card flex flex-col hidden md:flex sticky top-0 h-screen">
        <div className="p-6 border-b">
          <Link href="/admin/dashboard" className="font-serif text-2xl font-bold text-primary">
            Admin
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {adminNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md transition-colors font-medium text-sm",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t">
          <button className="flex items-center space-x-3 px-3 py-2 w-full text-left text-destructive hover:bg-destructive/10 rounded-md transition-colors text-sm font-medium">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
