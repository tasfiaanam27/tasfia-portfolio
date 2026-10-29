
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Skills />

      <Education />


      <Contact />

      <Footer />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {[
          "projects",  
        ].map((section) => (
          <section
            key={section}
            id={section}
            className="flex min-h-[35vh] items-center border-t border-[var(--border)]"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold capitalize text-[var(--foreground)]">
              {section}
            </h2>
          </section>
        ))}
      </div>
    </>
  );
}
