import { faqs } from "@/data/faqs";
import { Container } from "@/components/layout/Container";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="bg-slate-950 py-24"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Support &amp; service</p>
          <h2 id="faq-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Answers to the questions we hear most from clients.
          </h2>
        </div>
        <dl className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <dt className="text-lg font-semibold text-white">{faq.question}</dt>
              <dd className="mt-2 text-sm text-slate-300">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
