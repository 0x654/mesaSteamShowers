"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { helpers } = useCart();

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40 backdrop-blur">
      <Container className="flex items-center justify-between py-4 gap-6">
        <div className="flex items-center gap-6">
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center gap-3">
            <span className="text-lg font-semibold tracking-tight">Mesa Steam Showers</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            {siteConfig.navigation.primary.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex items-center gap-4 text-sm text-slate-500">
            {siteConfig.navigation.secondary.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-blue-600">
                {item.title}
              </Link>
            ))}
          </nav>
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
            <Link href="/quote">Request a Quote</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="relative">
            <Link href="/cart" aria-label="View cart">
              <ShoppingBagIcon className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {helpers.lineCount > 0 ? (
                <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-semibold text-white">
                  {helpers.lineCount}
                </span>
              ) : null}
            </Link>
          </Button>
        </div>
      </Container>
      {mobileOpen ? <MobileMenu onClose={() => setMobileOpen(false)} /> : null}
    </header>
  );
}

type MobileMenuProps = {
  onClose: () => void;
};

function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-black/40">
      <div className="ml-auto flex h-full w-[85%] max-w-sm flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200"
            aria-label="Close navigation"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-4">
            {siteConfig.navigation.primary.map((item) => (
              <Link key={item.href} href={item.href} className="block text-lg font-medium text-slate-900" onClick={onClose}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
            {siteConfig.navigation.secondary.map((item) => (
              <Link key={item.href} href={item.href} className="block text-base text-slate-600" onClick={onClose}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
        <div className="border-t border-slate-200 px-6 py-4">
          <Button className="w-full" asChild>
            <Link href="/quote" onClick={onClose}>
              Request a Quote
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
