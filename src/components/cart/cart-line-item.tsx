"use client";

import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import type { CartLineItem } from "@/types/commerce";
import { formatCurrency } from "@/lib/currency";
import { QuantitySelector } from "@/components/commerce/quantity-selector";
import { useCart } from "@/context/cart-context";

export function CartLineItemRow({ item }: { item: CartLineItem }) {
  const { actions } = useCart();

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
      {item.image ? (
        <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-slate-100">
          <Image src={item.image.src} alt={item.image.altText ?? item.title} fill className="object-cover" sizes="96px" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            {item.variantTitle ? <p className="text-sm text-slate-500">{item.variantTitle}</p> : null}
          </div>
          <p className="text-base font-semibold text-slate-900">
            {formatCurrency(item.price.amount * item.quantity, item.price.currencyCode)}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <QuantitySelector
            quantity={item.quantity}
            onChange={(qty) => actions.updateItem(item.id, qty)}
            max={12}
          />
          <button
            type="button"
            onClick={() => actions.removeItem(item.id)}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-red-500"
          >
            <TrashIcon className="h-5 w-5" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
