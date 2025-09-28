import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-cyan-500/20 via-slate-900 to-slate-950 py-20" aria-labelledby="cta-heading">
      <Container>
        <div className="rounded-3xl border border-cyan-300/50 bg-slate-950/80 px-8 py-12 text-center text-slate-100 shadow-lg shadow-cyan-500/20">
          <h2 id="cta-heading" className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to design your steam sanctuary?
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Schedule a private consultation with Mesa&apos;s design concierge team. We&apos;ll create a personalized plan that harmonizes architecture, technology, and wellness.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#design"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Reserve your consultation
            </Link>
            <Link
              href="#faq"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Speak with support
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
