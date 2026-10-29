
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-[var(--border)] bg-[var(--background)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--rose-dark)]">
              Featured Work
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem]">
            Projects I&apos;ve{" "}
            <span className="text-[var(--rose-dark)]">
              Built.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">
            A selection of projects showcasing my creativity,
            technical skills, and development journey.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 30 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : index * 0.12,
              }}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[0_8px_30px_rgba(166,109,119,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(166,109,119,0.14)]"
            >

              {/* 1. Project image */}
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.title} details`}
                className="relative block aspect-[16/10] overflow-hidden bg-[#F7EDEF]"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6">

                {/* 2. Project name */}
                <h3 className="mb-6 font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--foreground)]">
                  {project.title}
                </h3>

                {/* 3. View Details button */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-auto flex items-center justify-center gap-2 rounded-full bg-[var(--rose-dark)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--rose)] hover:shadow-md"
                >
                  View Details
                  <ArrowUpRight size={17} />
                </Link>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

