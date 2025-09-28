import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote | Mesa Steam Showers",
  description: "Get personalized pricing and design guidance for your steam shower or sauna project.",
});

const questions = [
  "Which products are you interested in?",
  "What is your project timeline?",
  "Do you need installation services?",
  "Will you require financing?",
];

export default function QuotePage() {
  return (
    <div className="py-16">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6">
          <SectionHeading eyebrow="Quote">
            Start Your Project Consultation
          </SectionHeading>
          <p className="text-base text-slate-600">
            Share a few project details and a Mesa concierge will send a tailored quote with freight delivery, installation,
            and financing options. Expect a same-day response Monday through Friday.
          </p>
          <ul className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            {questions.map((question) => (
              <li key={question}>• {question}</li>
            ))}
          </ul>
          <p className="text-sm text-slate-500">
            This form will connect to the backend API to create leads in our CRM and trigger follow-up automations.
          </p>
        </div>
        <form className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              First Name
              <input
                type="text"
                name="firstName"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Jane"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Last Name
              <input
                type="text"
                name="lastName"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Doe"
              />
            </label>
          </div>
          <label className="text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Phone
            <input
              type="tel"
              name="phone"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="(555) 123-4567"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Project Details
            <textarea
              name="details"
              rows={5}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="Tell us about your renovation goals, room dimensions, and installation needs."
            />
          </label>
          <Button type="submit" className="w-full">
            Submit Quote Request
          </Button>
          <p className="text-xs text-slate-500">
            Submissions will be sent to our backend API and routed to the Mesa concierge team for follow-up.
          </p>
        </form>
      </Container>
    </div>
  );
}
