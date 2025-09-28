import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

const footerLinks = [
  {
    title: "Customer Care",
    links: [
      { title: "Contact", href: "/pages/contact" },
      { title: "Shipping & Delivery", href: "/pages/shipping" },
      { title: "Returns", href: "/pages/returns" },
      { title: "Warranty", href: "/pages/warranty" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/pages/about" },
      { title: "Reviews", href: "/pages/reviews" },
      { title: "Financing", href: "/pages/financing" },
      { title: "Installation", href: "/pages/installation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Guides", href: "/pages/guides" },
      { title: "FAQs", href: "/pages/faq" },
      { title: "Blog", href: "/blog" },
      { title: "Trade Program", href: "/pages/trade" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-10 py-12 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="text-xl font-semibold text-slate-900">
            Mesa Steam Showers
          </Link>
          <p className="text-sm text-slate-600">{siteConfig.description}</p>
          <div className="space-y-1 text-sm text-slate-600">
            <p>
              Phone: <a href={`tel:${siteConfig.contact.phone}`} className="font-medium text-slate-900">{siteConfig.contact.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-slate-900">{siteConfig.contact.email}</a>
            </p>
            <p>Hours: {siteConfig.contact.hours}</p>
          </div>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-600">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="border-t border-slate-200 py-6 text-sm text-slate-500">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Mesa Steam Showers. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/pages/privacy" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/pages/terms" className="hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
