
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

const email = "tasfia.anam2002@gmail.com";

export default function Contact() {
  const reducedMotion = useReducedMotion();
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[var(--border)] bg-[var(--background)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--rose-dark)]">
              Get in Touch
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem]">
            Let&apos;s work{" "}
            <span className="text-[var(--rose-dark)]">
              together.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">
            Have a project, opportunity, or question? I&apos;d love
            to hear from you. Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact details */}
          <motion.div
            initial={
              reducedMotion ? false : { opacity: 0, x: -25 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-7"
          >
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--foreground)]">
                Contact Information
              </h3>
        
            </div>

            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[#F7EDEF] text-[var(--rose-dark)] transition-colors group-hover:bg-[var(--blush)]">
                <Mail size={23} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--rose-dark)]">
                  Email Address
                </p>
                <p className="mt-1 break-all text-sm font-medium text-[var(--foreground)] sm:text-base">
                  {email}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="ml-auto text-[var(--rose-dark)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>


            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[#F7EDEF] text-[var(--rose-dark)]">
                <MapPin size={23} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--rose-dark)]">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--foreground)] sm:text-base">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={
              reducedMotion ? false : { opacity: 0, x: 25 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_15px_45px_rgba(166,109,119,0.06)] sm:p-9"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[var(--foreground)]">
              Send me a message
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Fill in the details below to get in touch.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[#A99A96] focus:border-[var(--rose)]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(event) =>
                    setSenderEmail(event.target.value)
                  }
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[#A99A96] focus:border-[var(--rose)]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[#A99A96] focus:border-[var(--rose)]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--rose-dark)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--rose)] hover:shadow-lg"
              >
                Send Message
                <Send size={17} />
              </button>
            
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
