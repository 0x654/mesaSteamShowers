import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SparklesIcon, ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/commerce/product-grid";
import { mockCollections } from "@/lib/mock-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mesa Steam Showers | Luxury Steam Showers, Saunas & Walk-In Tubs",
  description:
    "Shop Mesa's curated collection of steam showers, saunas, and hydrotherapy tubs. Financing, white-glove delivery, and installation support included.",
});

export default function StorefrontHomePage() {
  const heroCollection = mockCollections[0];
  const featuredProducts = heroCollection.products.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden bg-slate-900">
        <Image
          src={heroCollection.heroImage?.src ?? "https://images.unsplash.com/photo-1600566753751-8f43f8c25b7a?auto=format&fit=crop&w=1600&q=80"}
          alt={heroCollection.heroImage?.altText ?? "Steam shower"}
          fill
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <Container className="relative z-10 flex flex-col gap-10 py-24 text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
              <SparklesIcon className="h-4 w-4" /> Fall Savings Event
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Elevate Your Home Spa with Mesa Steam Showers
            </h1>
            <p className="text-lg text-slate-100">
              Discover hydrotherapy steam showers engineered for relaxation, recovery, and everyday luxury. Seamless delivery,
              expert support, and financing options tailored for remodeling projects of any size.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/collections/steam-showers">
                  Shop Steam Showers
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
                <Link href="/pages/consultation">Schedule a Design Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-2">
            {[
              { title: "White-glove freight delivery", description: "Nationwide curbside delivery within 7–10 business days." },
              { title: "Certified installation network", description: "Professional installers available in 40+ states." },
              { title: "Spa-level technology", description: "Aromatherapy, chromatherapy, and Bluetooth audio included." },
              { title: "Dedicated concierge", description: "US-based support before, during, and after your purchase." },
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-sm text-slate-100/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-12">
          <SectionHeading eyebrow="Featured" align="center">
            Best-selling Steam Showers
          </SectionHeading>
          <ProductGrid products={featuredProducts} />
          <div className="flex justify-center">
            <Button asChild variant="ghost">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="relative h-full min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury bathroom"
                fill
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80" />
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-2xl font-semibold">Custom Bathroom Packages</h3>
                <p className="mt-2 max-w-lg text-sm text-slate-100">
                  Bundle your steam shower with matching tubs, vanities, and saunas for a cohesive spa-inspired renovation.
                  Our team designs tailored packages with preferred pricing for contractors and homeowners.
                </p>
                <Button asChild size="sm" className="mt-4">
                  <Link href="/pages/custom-packages">Explore Packages</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
            <SectionHeading eyebrow="Why Mesa" className="!items-start">
              A Better Direct-to-Consumer Experience
            </SectionHeading>
            <ul className="space-y-4 text-sm text-slate-600">
              {[
                {
                  title: "Transparent Pricing",
                  description: "No hidden marketplace fees—invest every dollar into craftsmanship and support.",
                  icon: ShieldCheckIcon,
                },
                {
                  title: "Pro Installation Guidance",
                  description: "Step-by-step resources and a vetted installer marketplace simplify every project.",
                  icon: SparklesIcon,
                },
                {
                  title: "Logistics Handled",
                  description: "From freight tracking to delivery scheduling, we coordinate every milestone.",
                  icon: TruckIcon,
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="secondary">
              <Link href="/pages/why-mesa">Learn About the Mesa Advantage</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeading eyebrow="Reviews" align="center">
            Trusted by Homeowners, Designers &amp; Builders
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "The Mesa 800L transformed our master bathroom. The aromatherapy and rainfall shower feel just like a five-star spa.",
                name: "Danielle R.",
                location: "Austin, TX",
              },
              {
                quote:
                  "Shipping was fast and customer service handled every detail with our contractor. Highly recommend for remodels.",
                name: "Marcus L.",
                location: "Chicago, IL",
              },
              {
                quote:
                  "As a designer, the Mesa catalog offers modern lines clients love, plus reliable lead times for project schedules.",
                name: "Renee P.",
                location: "New York, NY",
              },
            ].map((testimonial) => (
              <figure key={testimonial.name} className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6">
                <blockquote className="text-sm text-slate-600">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                  {testimonial.name}
                  <span className="block text-xs font-normal text-slate-500">{testimonial.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
