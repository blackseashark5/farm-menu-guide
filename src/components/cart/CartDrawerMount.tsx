import { Suspense, lazy } from "react";
import { useCart } from "@/lib/cart";

const CartDrawer = lazy(() =>
  import("./CartDrawer").then((m) => ({ default: m.CartDrawer })),
);

/** Loads the cart drawer bundle only once the shopper opens the cart. */
export function CartDrawerMount() {
  const { isOpen } = useCart();
  if (!isOpen) return null;
  return (
    <Suspense fallback={null}>
      <CartDrawer />
    </Suspense>
  );
}
