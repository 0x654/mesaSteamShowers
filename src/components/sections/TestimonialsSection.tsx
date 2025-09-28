import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/layout/Container";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-slate-950 py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Trusted by visionaries</p>
          <h2 id="testimonials-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Designers, homeowners, and wellness experts choose Mesa.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-slate-100"
            >
              <blockquote className="text-sm leading-6 text-slate-200">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{testimonial.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
