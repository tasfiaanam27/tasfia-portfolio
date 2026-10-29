export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <section
        id="home"
        className="flex min-h-[70vh] flex-col justify-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-dark">
          Welcome to my portfolio
        </p>

        <h1 className="font-serif text-5xl font-bold sm:text-7xl">
          Hi, I'm <span className="text-rose-dark">Tasfia.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Full Stack Web Developer passionate about creating
          meaningful digital experiences.
        </p>
      </section>

      {[
        "about",
        "skills",
        "education",
        "experience",
        "projects",
        "contact",
      ].map((section) => (
        <section
          key={section}
          id={section}
          className="flex min-h-[35vh] items-center border-t border-soft-border"
        >
          <h2 className="font-serif text-4xl capitalize">
            {section}
          </h2>
        </section>
      ))}
    </div>
  );
}
