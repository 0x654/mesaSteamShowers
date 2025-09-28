import { featureHighlights } from "@/data/features";
import { Container } from "@/components/layout/Container";
import { IconSparkles, IconCpu, IconShieldCheck } from "@tabler/icons-react";

const iconMap = {
  sparkles: IconSparkles,
  cpu: IconCpu,
  "shield-check": IconShieldCheck,
} as const;

export function FeatureHighlights() {
  return (
    <section className="bg-slate-950 py-24" aria-labelledby="feature-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Signature advantages</p>
            <h2 id="feature-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Engineered to elevate every detail of the steam ritual.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Each Mesa steam shower is built on a modular platform that lets you tailor the experience around your needs—from architectural customization to predictive maintenance powered by Mesa OS.
            </p>
          </div>
          <div className="grid gap-6">
            {featureHighlights.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <article
                  key={feature.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100"
                >
                  <div className="rounded-full border border-cyan-300/40 bg-cyan-400/10 p-3 text-cyan-200">
                    {Icon ? <Icon size={24} stroke={1.5} /> : null}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
