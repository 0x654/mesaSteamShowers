import { experiencePillars } from "@/data/experience";
import { Container } from "@/components/layout/Container";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24"
      aria-labelledby="experience-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">The Mesa experience</p>
          <h2 id="experience-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Designed with artisans, engineers, and wellness experts to create a sanctuary like no other.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Every Mesa installation is guided by the pillars below—ensuring the journey from consultation to daily ritual feels effortless.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {experiencePillars.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-100"
            >
              <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm text-slate-300">{pillar.description}</p>
              <ul className="space-y-3 text-sm text-slate-200">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
