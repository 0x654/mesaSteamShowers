import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/seo";

const staticContent: Record<string, { title: string; body: string[] }> = {
  installation: {
    title: "Professional Installation",
    body: [
      "Mesa partners with licensed installers across the United States to provide turnkey setup for steam showers and saunas.",
      "Our support team will coordinate site readiness, delivery timing, and installation checklists tailored to your project.",
      "Detailed installation manuals, plumbing/electrical requirements, and video walkthroughs will be delivered through the customer portal.",
    ],
  },
  financing: {
    title: "Flexible Financing",
    body: [
      "Choose from Affirm, Klarna, Shop Pay Installments, and commercial leasing options for trade partners.",
      "Instant approvals are supported on orders up to $25,000 with terms ranging from 6 to 36 months.",
      "Financing integrations will be powered by our Node.js commerce API at checkout.",
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    body: [
      "What electrical requirements do Mesa steam showers have? Most models require a dedicated 220V circuit.",
      "How quickly can I receive my order? In-stock products ship in 3-5 business days with delivery in 7-10 business days.",
      "Do you offer custom sizing? Yes, our design team can source bespoke configurations via special order.",
    ],
  },
  contact: {
    title: "Contact Mesa",
    body: [
      "Call 1-888-980-8889 Monday through Friday 9am to 6pm EST or email support@mesasteamshowers.com.",
      "Visit our showroom partners in select markets for hands-on demos and design consultations.",
    ],
  },
  about: {
    title: "About Mesa",
    body: [
      "Mesa Steam Showers has delivered spa-grade bathing experiences for over 15 years, serving homeowners, designers, and hospitality projects.",
      "We blend direct-to-consumer convenience with concierge support to ensure every renovation is seamless.",
    ],
  },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = staticContent[params.slug];
  if (!page) {
    return buildMetadata({ title: "Mesa Steam Showers" });
  }
  return buildMetadata({ title: `${page.title} | Mesa Steam Showers`, description: page.body[0] });
}

export default function StaticPage({ params }: { params: { slug: string } }) {
  const page = staticContent[params.slug] ?? notFound();

  return (
    <div className="py-16">
      <Container className="mx-auto max-w-3xl space-y-6">
        <SectionHeading eyebrow="Mesa">
          {page.title}
        </SectionHeading>
        {page.body.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-slate-600">
            {paragraph}
          </p>
        ))}
      </Container>
    </div>
  );
}
