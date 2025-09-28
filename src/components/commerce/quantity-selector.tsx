"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

type QuantitySelectorProps = {
  quantity: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export function QuantitySelector({ quantity, onChange, min = 1, max = 10 }: QuantitySelectorProps) {
  const increment = () => onChange(Math.min(quantity + 1, max));
  const decrement = () => onChange(Math.max(quantity - 1, min));

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white">
      <button
        type="button"
        className="h-10 w-10 rounded-l-full border-r border-slate-200 text-slate-600 hover:bg-slate-100"
        onClick={decrement}
        aria-label="Decrease quantity"
      >
        <MinusIcon className="mx-auto h-4 w-4" />
      </button>
      <span className="w-12 text-center text-sm font-medium text-slate-900">{quantity}</span>
      <button
        type="button"
        className="h-10 w-10 rounded-r-full border-l border-slate-200 text-slate-600 hover:bg-slate-100"
        onClick={increment}
        aria-label="Increase quantity"
      >
        <PlusIcon className="mx-auto h-4 w-4" />
      </button>
    </div>
  );
}
