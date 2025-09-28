"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { formatCurrency } from "@/lib/currency";
import { Button } from "@/components/ui/button";

export function CartSummary() {
  const { state, helpers } = useCart();
  const subtotal = state.subtotal
    ? formatCurrency(state.subtotal.amount, state.subtotal.currencyCode)
    : formatCurrency(0, "USD");

  return (
    <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>
      <dl className="mt-4 space-y-3 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <dt>Subtotal</dt>
          <dd className="text-base font-medium text-slate-900">{subtotal}</dd>
        </div>
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
          <dt>Shipping</dt>
          <dd>Calculated at checkout</dd>
        </div>
      </dl>
      <div className="mt-6">
        <Button className="w-full" asChild>
          <Link href="/checkout">Proceed to Checkout ({helpers.lineCount} items)</Link>
        </Button>
        <p className="mt-3 text-xs text-slate-500">
          Financing available. Pay over time with Klarna, Affirm, or Shop Pay Installments.
        </p>
      </div>
    </aside>
  );
}
