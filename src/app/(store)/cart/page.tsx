"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CartLineItemRow } from "@/components/cart/cart-line-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { useCart } from "@/context/cart-context";

export default function CartPage() {
  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeading eyebrow="Your Cart" align="center">
          Review Your Selections
        </SectionHeading>
        <CartContents />
      </Container>
    </div>
  );
}

function CartContents() {
  const { state } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <p className="text-lg font-semibold text-slate-900">Your cart is currently empty.</p>
        <p className="max-w-md text-sm text-slate-600">
          Explore our collections of steam showers, saunas, and hydrotherapy tubs to build your dream home spa.
        </p>
        <Link href="/products" className="text-sm font-semibold text-blue-600 underline-offset-4 hover:underline">
          Shop All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <div className="space-y-4">
        {state.items.map((item) => (
          <CartLineItemRow key={item.id} item={item} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
}
