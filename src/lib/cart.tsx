import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/data/catalog";

export type CartLine = {
  id: string;
  name: string;
  brand: string;
  price: number;
  mrp: number;
  size: string;
  emoji: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  savings: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (product: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "kisaan-seva-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore quota errors */
    }
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((n, l) => n + l.qty * l.price, 0);
    const savings = lines.reduce((n, l) => n + l.qty * (l.mrp - l.price), 0);
    return {
      lines,
      count,
      subtotal,
      savings,
      isOpen,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      add: (product, qty = 1) => {
        setLines((prev) => {
          const found = prev.find((l) => l.id === product.id);
          if (found) {
            return prev.map((l) => (l.id === product.id ? { ...l, qty: l.qty + qty } : l));
          }
          return [
            ...prev,
            {
              id: product.id,
              name: product.name,
              brand: product.brand,
              price: product.price,
              mrp: product.mrp,
              size: product.size,
              emoji: product.emoji,
              qty,
            },
          ];
        });
        setOpen(true);
      },
      setQty: (id, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.id !== id)
            : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
        ),
      remove: (id) => setLines((prev) => prev.filter((l) => l.id !== id)),
      clear: () => setLines([]),
    };
  }, [lines, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
