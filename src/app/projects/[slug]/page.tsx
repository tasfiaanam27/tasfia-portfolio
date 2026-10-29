
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import {
  getProjectBySlug,
  projects,
} from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project
      ? `${project.title} | Tasfia Anam`
      : "Project Not Found",
    description: project?.description,
  };
}

export default async function ProjectDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[var(--background)] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Back navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--rose-dark)] transition-colors hover:text-[var(--foreground)]"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

        {/* Project title */}
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--rose-dark)]">
            Featured Project
          </p>

          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-[var(--muted)]">
            {project.subtitle}
          </p>
        </div>

        {/* Screenshot */}
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[26px] border border-[var(--border)] bg-[#F7EDEF] shadow-[0_15px_45px_rgba(166,109,119,0.08)]">
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top"
          />
        </div>

        {/* Live and GitHub links */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--rose-dark)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--rose)]"
          >
            Live Project
            <ExternalLink size={17} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--rose)]"
          >
            <FaGithub size={18} />
            GitHub Repository
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Description */}
        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Project Overview
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            {project.description}
          </p>
        </section>

        {/* Technology stack */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Technology Stack
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#EADFDA] bg-[#F7EDEF] px-4 py-2 text-sm font-medium text-[var(--foreground)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <CheckCircle2
              size={23}
              className="text-[var(--rose-dark)]"
            />
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
              Development Challenges
            </h2>
          </div>

          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[var(--border)] bg-white px-5 py-4 text-sm leading-7 text-[var(--muted)] sm:text-base"
              >
                {challenge}
              </div>
            ))}
          </div>
        </section>

        {/* Future plans */}
        <section className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb
              size={23}
              className="text-[var(--rose-dark)]"
            />
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
              Future Improvements
            </h2>
          </div>

          <div className="space-y-4">
            {project.improvements.map((improvement, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[var(--border)] bg-white px-5 py-4 text-sm leading-7 text-[var(--muted)] sm:text-base"
              >
                {improvement}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 border-t border-[var(--border)] pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--rose-dark)] hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={17} />
            Explore More Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
