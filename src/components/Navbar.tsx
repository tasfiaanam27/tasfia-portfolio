
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
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/95 shadow-sm backdrop-blur-xl"
          : "bg-[var(--background)]"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/#home"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight text-[var(--foreground)]"
        >
          Tasfia <span className="text-[var(--rose-dark)]">Anam.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${link.href}`}
              className="text-[13px] font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--rose-dark)]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-full bg-[var(--rose-dark)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--foreground)] lg:inline-flex"
        >
          Get in Touch
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-full border border-[var(--border)] p-2.5 text-[var(--foreground)] transition-colors hover:bg-[var(--blush)] xl:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--border)] bg-[var(--background)] px-5 pb-6 pt-3 shadow-lg xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={`/${link.href}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[var(--border)] py-3.5 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--rose-dark)]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex w-fit items-center gap-2 rounded-full bg-[var(--rose-dark)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--foreground)]"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
