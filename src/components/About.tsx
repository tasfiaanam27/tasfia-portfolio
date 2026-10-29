
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-t border-[var(--border)] bg-[var(--background)] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-[var(--blush)]/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--rose-dark)] sm:text-sm">
              Get to know me
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem]">
            A little more{" "}
            <span className="text-[var(--rose-dark)]">
              about me.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            A developer driven by curiosity, creativity, and a
            passion for building meaningful digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          {/* LEFT SIDE - About Introduction */}
          <div>
            <h3 className="mb-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
              The person behind the code.
            </h3>

            <div className="space-y-4 text-[15px] leading-7 text-[var(--muted)] sm:text-base">

              <p>
                My programming journey began during my{" "}
                <span>
                  Computer Science and Engineering
                </span>{" "}
                studies at Independent University, Bangladesh.
                What started with learning the fundamentals
                grew into a passion for building applications
                and solving problems through technology.
              </p>

              <p>
                I&apos;m currently focused on{" "}
                <span className="font-semibold text-[var(--foreground)]">
                  Full Stack Web Development
                </span>
                , creating engaging and practical web
                applications. I&apos;m also interested in{" "}
                <span>
                  Deep Learning
                </span>
                , particularly computer vision and image
                classification.
              </p>

              <p>
                When I'm not coding, I'm exploring new technologies, interested in contributing to open source, I also enjoy cooking and travelling. I value creativity, continuous learning, and opportunities to grow through new experiences and challenges.
              </p>

            </div>

            {/* Closing Accent */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--rose-dark)]" />

              <span className="font-[family-name:var(--font-playfair)] text-base font-medium text-[var(--rose-dark)]">
                Always learning. Always growing.
              </span>
            </div>
          </div>

          {/* RIGHT SIDE - Profile */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[var(--border)] bg-[#F7EDEF] px-6 py-12 text-center sm:px-10 sm:py-14">

            {/* Subtle Decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--blush)]/60 blur-3xl"
            />

            {/* Circular Initials */}
            <div className="relative mb-7 flex h-36 w-36 items-center justify-center rounded-full border-[4px] border-[var(--rose)] bg-gradient-to-br from-[#F5DDE1] to-[#E9C9D1] shadow-[0_16px_35px_rgba(166,109,119,0.15)] sm:h-40 sm:w-40">
              <span className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[var(--rose-dark)] sm:text-6xl">
                TA
              </span>
            </div>

            {/* Name */}
            <h3 className="relative font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--foreground)]">
              Tasfia Anam
            </h3>

            {/* Designation */}
            <p className="relative mt-3 text-base font-medium text-[var(--muted)]">
              Full Stack Web Developer
            </p>

            {/* Location */}
            <div className="relative mt-4 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
              <MapPin
                size={17}
                className="text-[var(--rose-dark)]"
              />
              <span>Dhaka, Bangladesh</span>
            </div>

          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-14 h-px w-full bg-[var(--border)]" />

      </div>
    </section>
  );
}


