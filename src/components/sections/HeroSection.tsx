import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 pb-24 pt-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-xs font-medium tracking-wider text-cyan-200">
              Introducing Mesa 2024 Collection
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Steam sanctuaries designed for everyday restoration.
            </h1>
            <p className="max-w-xl text-base text-slate-200 sm:text-lg">
              Mesa Steam Showers blends architectural craftsmanship with intelligent wellness technology. Discover modular suites, bespoke finishes, and concierge installation crafted around your ritual.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#showers"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore the collection
              </Link>
              <Link
                href="#design"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Launch design studio
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-sm uppercase tracking-wide text-slate-400">Installations delivered</dt>
                <dd className="mt-1 text-2xl font-semibold">12,800+</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wide text-slate-400">Average lead time</dt>
                <dd className="mt-1 text-2xl font-semibold">4 weeks</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-wide text-slate-400">Designer satisfaction</dt>
                <dd className="mt-1 text-2xl font-semibold">98%</dd>
              </div>
            </dl>
          </div>
          <div className="relative hidden h-full min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/20 lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-500/20" />
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="Mesa steam shower with glass enclosure"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
