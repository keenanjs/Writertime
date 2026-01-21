import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work / Writing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto border-x border-border/40 bg-background shadow-2xl shadow-black/5">
      <header className="px-8 md:px-12 py-6 md:py-8 border-b border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
          <Link href="/">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight cursor-pointer hover:text-primary transition-colors relative">
              Keenan Sands
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              <span className="block text-sm font-mono font-normal text-muted-foreground mt-2 uppercase tracking-widest letter-spacing-wider">
                Writer
              </span>
            </h1>
          </Link>
          
          <nav className="flex flex-wrap gap-x-8 gap-y-2 items-center">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "text-sm font-mono uppercase tracking-wider cursor-pointer border-b-2 transition-all duration-300",
                    location === item.href
                      ? "border-primary text-primary font-bold"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-accent"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 p-8 md:p-12 relative">
        {children}
      </main>

      <footer className="p-8 border-t border-border/40 text-center text-sm text-muted-foreground font-mono">
        <p>&copy; {new Date().getFullYear()} Keenan Sands. All rights reserved.</p>
      </footer>
    </div>
  );
}
