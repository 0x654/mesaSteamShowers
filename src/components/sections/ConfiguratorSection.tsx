import { configuratorSteps } from "@/data/configurator";
import { Container } from "@/components/layout/Container";

export function ConfiguratorSection() {
  return (
    <section
      id="design"
      className="relative overflow-hidden bg-slate-950 py-24"
      aria-labelledby="configurator-heading"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Mesa design studio</p>
            <h2 id="configurator-heading" className="text-3xl font-semibold text-white sm:text-4xl">
              Design in real time with our architectural specialists.
            </h2>
            <p className="text-base text-slate-300">
              From layout discovery to installation scheduling, the Mesa studio pairs interactive visualization with concierge expertise. Your dedicated specialist guides you through every selection.
            </p>
            <div className="rounded-3xl border border-cyan-300/40 bg-cyan-400/10 p-6 text-slate-100">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">What&apos;s included</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-100">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                  Personalized 3D renderings with live pricing updates
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                  Materials library featuring exclusive Mesa surface collaborations
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                  On-site measurement and technical coordination
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6">
            {configuratorSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100"
              >
                <div className="flex items-start justify-between">
                  <p className="text-5xl font-semibold text-cyan-400/80">{String(index + 1).padStart(2, "0")}</p>
                  <button className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 hover:text-cyan-100">
                    {step.action}
                  </button>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
