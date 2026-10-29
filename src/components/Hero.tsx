
import Image from "next/image";
import Link from "next/link";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--background)]"
    >
      {/* Subtle Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--blush)]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[var(--rose)]/10 blur-3xl"
      />

      {/* Hero Container */}
      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-20">

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">

          {/* Intro Label - Increased Font Size */}
          <div className="mb-6 flex items-center gap-3">
            <p className="text-base font-semibold uppercase tracking-[0.22em] text-[var(--rose-dark)] sm:text-lg">
              Hello, I'm Tasfia
            </p>
          </div>

          {/* Main Heading - Reduced Font Size */}
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,2.8vw,3rem)] font-bold leading-[1.2] tracking-tight text-[var(--foreground)]">
            Designing with
            <br />

            <span className="text-[var(--rose-dark)]">
              purpose.
            </span>

            <br />

            Developing with
            <br />

            <span className="text-[var(--rose-dark)]">
              passion.
            </span>
          </h1>

          {/* Professional Designation - Increased Font Size */}
          <div className="mt-8 flex items-center gap-3">
            <span className="h-3 w-3 shrink-0 rounded-full bg-[var(--rose-dark)]" />

            <h2 className="text-2xl font-bold tracking-wide text-[var(--foreground)] sm:text-3xl">
              Full Stack Web Developer
            </h2>
          </div>

          {/* Professional Introduction */}
          <p className="mt-6 max-w-lg text-base leading-8 text-[var(--muted)]">
            I'm a Computer Science and Engineering student
            passionate about creating beautiful, functional,
            and user-friendly web applications. I enjoy
            transforming ideas into meaningful digital
            experiences through clean design, thoughtful
            development, and continuous learning.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Tasfia_Anam_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--rose-dark)] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--foreground)] hover:shadow-lg"
            >
              <Download size={17} />
              Download Resume
            </a>

            {/* View Projects */}
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--rose-dark)] px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--blush)]"
            >
              View My Projects
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="mt-11 flex flex-wrap items-center gap-4">

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Find me on
            </span>

            <span className="h-px w-8 bg-[var(--rose)]" />

            {/* GitHub */}
            <a
              href="https://github.com/tasfiaanam27"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/70 text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--rose-dark)] hover:bg-[var(--blush)]"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/70 text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--rose-dark)] hover:bg-[var(--blush)]"
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* Email */}
            <a
              href="mailto:tasfia.anam2002@gmail.com"
              aria-label="Send me an email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/70 text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--rose-dark)] hover:bg-[var(--blush)]"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT - PORTRAIT */}
        <div className="relative order-1 mx-auto flex w-full max-w-[540px] items-center justify-center lg:order-2">

          {/* Decorative Outline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-[78%] w-[78%] rounded-full border border-[var(--rose)]/40"
          />

          {/* Profile Picture */}
          <div className="relative aspect-square w-full">
            <Image
              src="/images/portfolio-picture.png"
              alt="Professional portrait of Tasfia Anam"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-contain"
            />
          </div>

          {/* Floating Decorative Label */}
          <div className="absolute bottom-4 right-0 rounded-2xl border border-[var(--border)] bg-[var(--background)]/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:bottom-8 sm:right-2">

            <p className="font-[family-name:var(--font-playfair)] text-base font-semibold italic text-[var(--foreground)] sm:text-lg">
              Code. Create. Grow.
            </p>

            <p className="mt-1 text-[11px] text-[var(--muted)] sm:text-xs">
              Always learning, always building.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative mx-auto hidden max-w-7xl items-center gap-3 px-12 pb-8 lg:flex">

        <ArrowDown
          size={16}
          className="text-[var(--rose-dark)]"
        />

        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
