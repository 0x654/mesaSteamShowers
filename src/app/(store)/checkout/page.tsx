import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Checkout | Mesa Steam Showers",
  description: "Secure checkout experience for Mesa Steam Showers customers.",
});

const steps = [
  {
    title: "Customer Information",
    description: "Contact details and delivery scheduling preferences.",
  },
  {
    title: "Shipping",
    description: "Freight delivery options with white-glove and inside placement upgrades.",
  },
  {
    title: "Payment",
    description: "Credit card, ACH, and financing partners including Affirm and Klarna.",
  },
];

export default function CheckoutPage() {
  return (
    <div className="py-16">
      <Container className="space-y-12">
        <SectionHeading eyebrow="Checkout" align="center">
          Finalize Your Order
        </SectionHeading>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-lg font-semibold text-slate-900">Secure Payment</h2>
            <ol className="space-y-4 text-sm text-slate-600">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <p className="font-semibold text-slate-900">
                    Step {index + 1}: {step.title}
                  </p>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <p className="text-sm text-slate-500">
              The checkout experience will connect to our custom Node.js commerce API for real-time inventory, shipping rates,
              taxes, and payment integrations.
            </p>
          </div>
          <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Need Assistance?</p>
            <p>Call <a href="tel:18889808889" className="text-blue-600">1-888-980-8889</a> or email support@mesasteamshowers.com.</p>
            <p>Our concierge team can complete the order over the phone or coordinate financing approvals.</p>
          </aside>
        </div>
      </Container>
    </div>
  );
}
