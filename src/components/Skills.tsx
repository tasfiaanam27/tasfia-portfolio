
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiTensorflow,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  Icon: IconType;
  color: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

const skills: Skill[] = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26", x: 10, y: 17, delay: 0.1, duration: 4.2 },
  { name: "CSS3", Icon: SiCss, color: "#1572B6", x: 29, y: 9, delay: 0.2, duration: 5.0 },
  { name: "JavaScript", Icon: SiJavascript, color: "#E5BE16", x: 52, y: 13, delay: 0.3, duration: 4.7 },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", x: 76, y: 9, delay: 0.4, duration: 5.2 },
  { name: "React", Icon: SiReact, color: "#149ECA", x: 91, y: 25, delay: 0.5, duration: 4.5 },
  { name: "Next.js", Icon: SiNextdotjs, color: "#222222", x: 14, y: 43, delay: 0.6, duration: 5.4 },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4", x: 34, y: 34, delay: 0.7, duration: 4.4 },
  { name: "Python", Icon: SiPython, color: "#3776AB", x: 78, y: 42, delay: 0.8, duration: 5.1 },
  { name: "Django", Icon: SiDjango, color: "#176B47", x: 94, y: 57, delay: 0.9, duration: 4.6 },
  { name: "MySQL", Icon: SiMysql, color: "#00758F", x: 9, y: 72, delay: 1.0, duration: 5.3 },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", x: 32, y: 67, delay: 1.1, duration: 4.8 },
  { name: "Git", Icon: SiGit, color: "#F05032", x: 55, y: 82, delay: 1.2, duration: 5.0 },
  { name: "GitHub", Icon: SiGithub, color: "#333333", x: 76, y: 75, delay: 1.3, duration: 4.3 },
  { name: "Figma", Icon: SiFigma, color: "#A259FF", x: 91, y: 88, delay: 1.4, duration: 5.4 },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00", x: 13, y: 94, delay: 1.5, duration: 4.9 },
  { name: "C++", Icon: FaCode, color: "#00599C", x: 49, y: 55, delay: 1.6, duration: 5.2 },
];

function SkillBubble({
  skill,
  reducedMotion,
}: {
  skill: Skill;
  reducedMotion: boolean | null;
}) {
  const { Icon } = skill;

  return (
    <motion.div
      className="absolute z-10"
      style={{
        left: `${skill.x}%`,
        top: `${skill.y}%`,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={reducedMotion ? false : { opacity: 0, scale: 0, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: "spring",
        stiffness: 170,
        damping: 14,
        delay: reducedMotion ? 0 : skill.delay,
      }}
    >
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -9, 0] }}
        transition={{
          duration: skill.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: skill.delay,
        }}
      >
        <motion.div
          tabIndex={0}
          role="img"
          aria-label={skill.name}
          whileHover={reducedMotion ? undefined : { scale: 1.3 }}
          whileFocus={reducedMotion ? undefined : { scale: 1.2 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          className="group relative flex h-14 w-14 cursor-default flex-col items-center justify-center rounded-full border border-[#EADFDA] bg-white/95 shadow-[0_8px_25px_rgba(166,109,119,0.12)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--rose-dark)] sm:h-16 sm:w-16 lg:h-[76px] lg:w-[76px]"
        >
          <Icon
            size={28}
            color={skill.color}
            className="transition-transform duration-300 sm:text-[32px]"
          />

          <span className="pointer-events-none absolute -bottom-8 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#40322F] px-3 py-1 text-[11px] font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            {skill.name}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
         
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            My Creative{" "}
            <span className="text-[var(--rose-dark)]">Toolkit.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            A collection of technologies and tools I use to transform ideas
            into meaningful digital experiences.
          </p>
        </div>

        <div className="relative mx-auto mt-12 h-[440px] w-full max-w-5xl sm:h-[530px] lg:h-[620px]">
          {/* Soft background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7E5E7]/50 blur-3xl"
          />

          {/* Decorative orbital rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#E8CDD1]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#EADFDA]"
          />

          {/* Small center circle */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-[#DDB6BD] bg-[#F5DDE1] text-center shadow-[0_12px_35px_rgba(166,109,119,0.15)] sm:h-28 sm:w-28"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--rose-dark)]">
              My Tech
            </span>
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[var(--foreground)]">
              Stack
            </span>
          </motion.div>

          {skills.map((skill) => (
            <SkillBubble
              key={skill.name}
              skill={skill}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        <p className="text-center text-xs tracking-wide text-[var(--muted)]">
          Hover over a technology to explore my toolkit.
        </p>
      </div>
    </section>
  );
}
