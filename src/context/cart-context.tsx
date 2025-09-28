"use client";

import { createContext, useCallback, useContext, useMemo, useReducer } from "react";
import type { Cart, CartLineItem, Price } from "@/types/commerce";
import { formatCurrency } from "@/lib/currency";

type CartAction =
  | { type: "INITIALIZE"; payload: Cart }
  | { type: "ADD_ITEM"; payload: CartLineItem }
  | { type: "UPDATE_ITEM"; payload: { id: string; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "RESET" };

type CartState = {
  status: "idle" | "loading" | "ready";
  items: CartLineItem[];
  subtotal: Price | null;
};

const CartContext = createContext<{
  state: CartState;
  actions: {
    initialize: (cart: Cart) => void;
    addItem: (item: CartLineItem) => void;
    updateItem: (id: string, quantity: number) => void;
    removeItem: (id: string) => void;
    reset: () => void;
  };
  helpers: {
    lineCount: number;
    formattedSubtotal: string;
  };
} | null>(null);

const initialState: CartState = {
  status: "idle",
  items: [],
  subtotal: null,
};

function subtotalFromItems(items: CartLineItem[]): Price | null {
  if (!items.length) {
    return null;
  }

  const amount = items.reduce((acc, item) => acc + item.price.amount * item.quantity, 0);
  const currencyCode = items[0]?.price.currencyCode ?? "USD";
  return { amount, currencyCode };
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "INITIALIZE": {
      return {
        status: "ready",
        items: action.payload.lines,
        subtotal: action.payload.subtotal ?? subtotalFromItems(action.payload.lines),
      };
    }
    case "ADD_ITEM": {
      const existing = state.items.find((item) => item.id === action.payload.id);
      const items = existing
        ? state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          )
        : [...state.items, action.payload];

      return {
        status: "ready",
        items,
        subtotal: subtotalFromItems(items),
      };
    }
    case "UPDATE_ITEM": {
      const items = state.items
        .map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
        )
        .filter((item) => item.quantity > 0);

      return {
        status: "ready",
        items,
        subtotal: subtotalFromItems(items),
      };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter((item) => item.id !== action.payload.id);
      return {
        status: items.length ? "ready" : "idle",
        items,
        subtotal: subtotalFromItems(items),
      };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const initialize = useCallback((cart: Cart) => {
    dispatch({ type: "INITIALIZE", payload: cart });
  }, []);

  const addItem = useCallback((item: CartLineItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  }, []);

  const updateItem = useCallback((id: string, quantity: number) => {
    dispatch({ type: "UPDATE_ITEM", payload: { id, quantity } });
  }, []);

  const removeItem = useCallback((id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  const helpers = useMemo(() => {
    const lineCount = state.items.reduce((acc, item) => acc + item.quantity, 0);
    const formattedSubtotal = state.subtotal
      ? formatCurrency(state.subtotal.amount, state.subtotal.currencyCode)
      : formatCurrency(0, state.items[0]?.price.currencyCode ?? "USD");

    return { lineCount, formattedSubtotal };
  }, [state.items, state.subtotal]);

  const value = useMemo(
    () => ({
      state,
      actions: { initialize, addItem, updateItem, removeItem, reset },
      helpers,
    }),
    [state, initialize, addItem, updateItem, removeItem, reset, helpers],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
