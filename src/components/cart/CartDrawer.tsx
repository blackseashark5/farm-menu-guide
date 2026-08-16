import { useState } from "react";
import { CheckCircle2, Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { useCart } from "@/lib/cart";
import { OrderStatusTimeline } from "@/components/order/OrderStatusTimeline";
import { createOrder, type OrderSummary } from "@/lib/orders.functions";

type Step = "cart" | "details" | "done";

const DELIVERY_FREE_ABOVE = 999;

export function CartDrawer() {
  const { lines, isOpen, closeCart, setQty, remove, subtotal, savings, count, clear } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [form, setForm] = useState({ name: "", phone: "", pincode: "", address: "" });
  const [order, setOrder] = useState<OrderSummary | null>(null);
  const submitOrder = useServerFn(createOrder);

  const mutation = useMutation({
    mutationFn: (payload: Parameters<typeof createOrder>[0] extends never ? never : {
      name: string;
      phone: string;
      pincode: string;
      address: string;
      lines: typeof lines;
    }) => submitOrder({ data: payload }),
    onSuccess: (result) => {
      setOrder(result);
      clear();
      setStep("done");
    },
  });

  if (!isOpen) return null;

  const delivery = subtotal === 0 || subtotal >= DELIVERY_FREE_ABOVE ? 0 : 79;
  const total = subtotal + delivery;

  const close = () => {
    closeCart();
    if (step === "done") {
      setStep("cart");
      setOrder(null);
      mutation.reset();
    }
  };

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ ...form, lines });
  };


  return (
    <div className="fixed inset-0 z-[60] flex justify-end" role="dialog" aria-label="Shopping cart">
      <button
        type="button"
        aria-label="Close cart"
        onClick={close}
        className="flex-1 bg-black/40"
      />
      <aside className="animate-mega-in flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <header className="flex items-center justify-between gap-3 bg-brand-deep px-4 py-3 text-brand-foreground">
          <h2 className="flex items-center gap-2 text-base font-bold">
            <ShoppingCart className="h-5 w-5" aria-hidden />
            {step === "details" ? "Checkout" : step === "done" ? "Order placed" : `Your Cart (${count})`}
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={close}
            className="grid h-9 w-9 place-items-center rounded-md hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {step === "done" ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <CheckCircle2 className="h-14 w-14 text-brand" aria-hidden />
            <h3 className="text-lg font-bold text-heading">Thank you, {form.name || "farmer"}!</h3>
            <p className="text-sm text-muted-foreground">
              Order <span className="font-semibold text-heading">{orderId}</span> is confirmed. We
              will call you on {form.phone || "your number"} before dispatch.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-4 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              Continue shopping
            </button>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="text-5xl" aria-hidden>
              🛒
            </span>
            <p className="text-sm text-muted-foreground">
              Your cart is empty. Add seeds, crop protection or equipment to get started.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              Start shopping
            </button>
          </div>
        ) : step === "cart" ? (
          <>
            <ul className="mega-scroll flex-1 divide-y divide-neutral-200 overflow-y-auto">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-3 p-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded bg-neutral-50 text-3xl" aria-hidden>
                    {line.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-medium text-heading">{line.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {line.brand} · {line.size}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="flex items-center rounded border border-neutral-300">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${line.name}`}
                          onClick={() => setQty(line.id, line.qty - 1)}
                          className="grid h-8 w-8 place-items-center text-heading"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{line.qty}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${line.name}`}
                          onClick={() => setQty(line.id, line.qty + 1)}
                          className="grid h-8 w-8 place-items-center text-heading"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-heading">
                        ₹{line.price * line.qty}
                      </span>
                      <button
                        type="button"
                        aria-label={`Remove ${line.name} from cart`}
                        onClick={() => remove(line.id)}
                        className="text-neutral-400 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <footer className="border-t border-neutral-200 p-4">
              <dl className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd className="font-semibold text-heading">₹{subtotal}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Delivery</dt>
                  <dd className="font-semibold text-brand-dark">
                    {delivery === 0 ? "FREE" : `₹${delivery}`}
                  </dd>
                </div>
                <div className="flex justify-between text-brand-dark">
                  <dt>You save</dt>
                  <dd className="font-semibold">₹{savings}</dd>
                </div>
                <div className="flex justify-between border-t border-neutral-200 pt-2 text-base">
                  <dt className="font-bold text-heading">Total</dt>
                  <dd className="font-bold text-heading">₹{total}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => setStep("details")}
                className="mt-4 w-full rounded-md bg-saffron py-3 text-sm font-bold text-saffron-foreground"
              >
                Proceed to checkout
              </button>
            </footer>
          </>
        ) : (
          <form onSubmit={placeOrder} className="mega-scroll flex flex-1 flex-col gap-3 overflow-y-auto p-4">
            <p className="text-sm text-muted-foreground">
              {count} item(s) · Pay ₹{total} by cash on delivery.
            </p>
            {[
              { key: "name", label: "Full name", type: "text", placeholder: "Ranveer Singh" },
              { key: "phone", label: "Mobile number", type: "tel", placeholder: "98765 43210" },
              { key: "pincode", label: "PIN code", type: "text", placeholder: "560001" },
            ].map((f) => (
              <label key={f.key} className="block text-sm">
                <span className="font-medium text-heading">{f.label}</span>
                <input
                  required
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-brand"
                />
              </label>
            ))}
            <label className="block text-sm">
              <span className="font-medium text-heading">Delivery address</span>
              <textarea
                required
                rows={3}
                placeholder="Village, taluk, district, state"
                value={form.address}
                onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </label>
            <div className="mt-auto flex gap-2 pt-4">
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="flex-1 rounded-md border border-neutral-300 py-3 text-sm font-semibold text-heading"
              >
                Back to cart
              </button>
              <button
                type="submit"
                className="flex-1 rounded-md bg-brand py-3 text-sm font-bold text-brand-foreground"
              >
                Place order
              </button>
            </div>
          </form>
        )}
      </aside>
    </div>
  );
}
