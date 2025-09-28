import Link from "next/link";
import { Container } from "./Container";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Design Concierge", href: "#design" },
  { label: "Support", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12 text-slate-400">
      <Container>
        <div className="grid gap-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Mesa Steam Showers</p>
            <p className="mt-2 max-w-md text-sm text-slate-300">
              Crafting architectural steam sanctuaries with bespoke design services, precision engineering, and white-glove installation.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Mesa Bath Group. All rights reserved.</p>
      </Container>
    </footer>
  );
}
