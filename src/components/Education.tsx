
"use client";

import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    period: "2021 — 2026",
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Independent University, Bangladesh (IUB)",
    Icon: GraduationCap,
  },
  {
    period: "2019 — 2021",
    degree: "A Levels",
    institution: "Lords – An English Medium School",
    details: "Pearson Edexcel",
    status: null,
    Icon: BookOpen,
  },
  {
    period: "2018 — 2019",
    degree: "O Levels",
    institution: "Academia",
    details: "Pearson Edexcel",
    status: null,
    Icon: School,
  },
];

export default function Education() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-[var(--border)] bg-[var(--background)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--rose-dark)]">
              My Education
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem]">
            Where it{" "}
            <span className="text-[var(--rose-dark)]">
              started.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">
            The academic journey that shaped my foundation in technology,
            problem-solving, and continuous learning.
          </p>
        </div>

        {/* Education timeline */}
        <div className="border-t border-[var(--border)]">
          {education.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.div
                key={item.degree}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: reducedMotion ? 0 : index * 0.12,
                }}
                className="group grid gap-5 border-b border-[var(--border)] py-9 sm:grid-cols-[210px_1fr] sm:gap-10 sm:py-12 lg:grid-cols-[280px_1fr]"
              >
                {/* Left: year and timeline marker */}
                <div className="flex items-start gap-4">
                  <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--rose)] ring-4 ring-[#F7E5E7] transition-transform duration-300 group-hover:scale-125" />

                  <span className="text-sm font-medium tracking-wide text-[var(--muted)] sm:text-base">
                    {item.period}
                  </span>
                </div>

                {/* Right: qualification details */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[#F7EDEF] text-[var(--rose-dark)] sm:flex">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold leading-snug text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--rose-dark)] sm:text-2xl">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-base font-medium text-[var(--muted)]">
                      {item.institution}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base">
                      {item.details}
                    </p>

        
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
