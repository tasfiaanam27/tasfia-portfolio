
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#F7EDEF]">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-6 sm:px-8 sm:pt-14 lg:px-12">
        {/* Main footer */}
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/#home"
              className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-[var(--foreground)]"
            >
              Tasfia{" "}
              <span className="text-[var(--rose-dark)]">
                Anam.
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">
              Building meaningful digital experiences,
              one line of code at a time.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/tasfiaanam27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5CCD0] bg-white text-[var(--rose-dark)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--rose)] hover:bg-[var(--blush)]"
              >
                <FaGithub size={18} />
              </a>

              {/* Replace this URL with your LinkedIn profile */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5CCD0] bg-white text-[var(--rose-dark)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--rose)] hover:bg-[var(--blush)]"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="mailto:tasfia.anam2002@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5CCD0] bg-white text-[var(--rose-dark)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--rose)] hover:bg-[var(--blush)]"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--rose-dark)]">
              Quick Links
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-5 grid grid-cols-2 gap-x-9 gap-y-4"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--rose-dark)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-10 border-t border-[#E5CCD0] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-[var(--muted)] sm:text-left">
              © {new Date().getFullYear()} Tasfia Anam.
              All rights reserved.
            </p>

            {/* Back to top */}
            <Link
              href="/#home"
              className="group flex items-center gap-2 text-xs font-medium text-[var(--rose-dark)] transition-colors hover:text-[var(--foreground)]"
            >
              Back to top
              <ArrowUp
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
