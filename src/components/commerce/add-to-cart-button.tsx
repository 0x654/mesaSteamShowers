"use client";

import { useTransition, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import type { CartLineItem } from "@/types/commerce";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "./quantity-selector";

export function AddToCartButton({ lineItem }: { lineItem: CartLineItem }) {
  const { actions } = useCart();
  const [quantity, setQuantity] = useState(lineItem.quantity);
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = () => {
    startTransition(() => {
      actions.addItem({ ...lineItem, quantity });
    });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <QuantitySelector quantity={quantity} onChange={setQuantity} />
      <Button onClick={handleAddToCart} disabled={isPending} className="sm:min-w-[200px]">
        <ShoppingCartIcon className="h-5 w-5" />
        {isPending ? "Adding..." : "Add to Cart"}
      </Button>
    </div>
  );
}
