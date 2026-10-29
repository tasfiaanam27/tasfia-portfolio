
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-soft-border bg-background/95 shadow-sm backdrop-blur-xl"
          : "bg-background"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
   
        <Link
          href="/#home"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 font-serif text-2xl font-bold tracking-tight"
        >
          Tasfia <span className="text-rose">Anam.</span>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${link.href}`}
              className="text-[13px] font-medium text-foreground/75 transition-colors duration-200 hover:text-rose-dark"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-dark lg:inline-flex"
        >
          My Resume
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-full border border-soft-border p-2.5 text-foreground transition-colors hover:bg-blush xl:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile and Tablet Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-soft-border bg-background px-5 pb-6 pt-3 shadow-lg xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={`/${link.href}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-soft-border/70 py-3.5 text-sm font-medium text-foreground/80 transition-colors hover:text-rose-dark"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white hover:bg-rose-dark"
            >
              My Resume
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
