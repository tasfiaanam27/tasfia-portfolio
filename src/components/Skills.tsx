
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { IconType } from "react-icons";
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
  SiCplusplus,
} from "react-icons/si";

type Skill = {
  name: string;
  Icon: IconType;
  color: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

const skills: Skill[] = [
  {
    name: "HTML5",
    Icon: SiHtml5,
    color: "#E34F26",
    x: 8,
    y: 17,
    size: 60,
    delay: 0.15,
    duration: 4.5,
  },
  {
    name: "CSS3",
    Icon: SiCss,
    color: "#1572B6",
    x: 28,
    y: 12,
    size: 56,
    delay: 0.25,
    duration: 5.1,
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#E5BE16",
    x: 52,
    y: 16,
    size: 62,
    delay: 0.35,
    duration: 4.7,
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
    x: 76,
    y: 12,
    size: 58,
    delay: 0.45,
    duration: 5.3,
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#149ECA",
    x: 93,
    y: 27,
    size: 64,
    delay: 0.55,
    duration: 4.6,
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#222222",
    x: 13,
    y: 43,
    size: 64,
    delay: 0.65,
    duration: 5.4,
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#06B6D4",
    x: 33,
    y: 35,
    size: 58,
    delay: 0.75,
    duration: 4.8,
  },
  {
    name: "Python",
    Icon: SiPython,
    color: "#3776AB",
    x: 79,
    y: 42,
    size: 64,
    delay: 0.85,
    duration: 5.2,
  },
  {
    name: "Django",
    Icon: SiDjango,
    color: "#176B47",
    x: 94,
    y: 61,
    size: 60,
    delay: 0.95,
    duration: 4.5,
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "#00758F",
    x: 8,
    y: 72,
    size: 60,
    delay: 1.05,
    duration: 5.0,
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "#47A248",
    x: 30,
    y: 68,
    size: 62,
    delay: 1.15,
    duration: 4.9,
  },
  {
    name: "Git",
    Icon: SiGit,
    color: "#F05032",
    x: 54,
    y: 86,
    size: 60,
    delay: 1.25,
    duration: 5.5,
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    color: "#333333",
    x: 78,
    y: 77,
    size: 64,
    delay: 1.35,
    duration: 4.6,
  },
  {
    name: "Figma",
    Icon: SiFigma,
    color: "#A259FF",
    x: 93,
    y: 88,
    size: 56,
    delay: 1.45,
    duration: 5.2,
  },
  {
    name: "TensorFlow",
    Icon: SiTensorflow,
    color: "#FF6F00",
    x: 16,
    y: 91,
    size: 60,
    delay: 1.55,
    duration: 4.7,
  },
  {
    name: "C++",
    Icon: SiCplusplus,
    color: "#00599C",
    x: 46,
    y: 66,
    size: 56,
    delay: 1.65,
    duration: 5.3,
  },
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
      className="absolute z-10 hover:z-50 focus-within:z-50"
      style={{
        left: `${skill.x}%`,
        top: `${skill.y}%`,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              scale: 0.2,
              y: 30,
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 12,
        delay: reducedMotion ? 0 : skill.delay,
      }}
    >
      {/* Continuous floating animation */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -8, 0, 5, 0],
                x: [0, 3, 0, -3, 0],
              }
        }
        transition={{
          duration: skill.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: skill.delay,
        }}
      >
        {/* Individual technology bubble */}
        <motion.div
          tabIndex={0}
          role="img"
          aria-label={skill.name}
          whileHover={
            reducedMotion
              ? undefined
              : {
                  scale: 1.3,
                }
          }
          whileFocus={
            reducedMotion
              ? undefined
              : {
                  scale: 1.2,
                }
          }
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 17,
          }}
          style={{
            width: skill.size,
            height: skill.size,
          }}
          className="group relative flex cursor-default items-center justify-center rounded-full border border-[#EADFDA] bg-white/95 shadow-[0_8px_25px_rgba(166,109,119,0.12)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--rose-dark)]"
        >
          <Icon
            size={skill.size * 0.43}
            color={skill.color}
          />

          {/* Technology name tooltip */}
          <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--foreground)] px-3 py-1 text-[11px] font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
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
      className="relative scroll-mt-24 overflow-hidden bg-[var(--background)] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--rose-dark)] sm:text-sm">
              Skills and Tools
            </span>
        

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            My Everyday{" "}
            <span className="text-[var(--rose-dark)]">
              Toolkit.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            A collection of technologies and tools I use to transform ideas
            into meaningful digital experiences.
          </p>
        </div>

        {/* Desktop floating technology universe */}
        <div className="relative mx-auto mt-8 hidden h-[420px] w-full max-w-5xl md:block lg:h-[480px]">

          {/* Soft pink background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7E5E7]/40 blur-3xl"
          />

          {/* Small central circle */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.4,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 14,
            }}
            className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-[#DDB6BD] bg-[#F5DDE1] text-center shadow-[0_12px_35px_rgba(166,109,119,0.15)] sm:h-24 sm:w-24"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--rose-dark)]">
              My Tech
            </span>

            <span className="font-[family-name:var(--font-playfair)] text-base font-bold text-[var(--foreground)]">
              Stack
            </span>
          </motion.div>

          {/* Floating technology bubbles */}
          {skills.map((skill) => (
            <SkillBubble
              key={skill.name}
              skill={skill}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Mobile skills grid */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:hidden">
          {skills.map((skill, index) => {
            const Icon = skill.Icon;

            return (
              <motion.div
                key={skill.name}
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                        scale: 0.75,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 15,
                  delay: reducedMotion ? 0 : index * 0.05,
                }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-2 py-5 shadow-sm"
              >
                <Icon
                  size={30}
                  color={skill.color}
                />

                <span className="text-center text-[11px] font-medium text-[var(--foreground)]">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-4 hidden text-center text-xs tracking-wide text-[var(--muted)] md:block">
          Hover over a technology to explore my toolkit.
        </p>

      </div>
    </section>
  );
}


