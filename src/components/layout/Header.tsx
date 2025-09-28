import Link from "next/link";
import { navItems } from "@/data/navigation";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="#" className="text-lg font-semibold tracking-wide text-white">
            Mesa Steam Showers
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#design"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Book a design consult
          </Link>
        </div>
      </Container>
    </header>
  );
}
