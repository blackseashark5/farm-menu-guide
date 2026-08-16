import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/home/Footer";
import { OrderStatusTimeline } from "@/components/order/OrderStatusTimeline";
import { getOrderStatus, type OrderSummary } from "@/lib/orders.functions";

const SITE = "https://farm-menu-guide.lovable.app";
const title = "Track Your Order — Kisaan Seva";
const description =
  "Check the live status of your Kisaan Seva order with your order number and registered mobile number.";

export const Route = createFileRoute("/track")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/track` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/track` }],
  }),
  component: TrackPage,
});

function TrackPage() {
  const lookup = useServerFn(getOrderStatus);
  const [form, setForm] = useState({ orderNumber: "", phone: "" });
  const [order, setOrder] = useState<OrderSummary | null>(null);
  const [notFound, setNotFound] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: { orderNumber: string; phone: string }) => lookup({ data }),
    onSuccess: (result) => {
      setOrder(result);
      setNotFound(!result);
    },
  });

  return (
    <div className="min-h-screen bg-white font-display">
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-2xl font-extrabold text-heading sm:text-3xl">Track your order</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the order number from your confirmation along with the mobile number you used.
        </p>

        <form
          className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
          onSubmit={(e) => {
            e.preventDefault();
            setOrder(null);
            setNotFound(false);
            mutation.mutate(form);
          }}
        >
          <label className="text-sm">
            <span className="font-medium text-heading">Order number</span>
            <input
              required
              value={form.orderNumber}
              onChange={(e) => setForm((p) => ({ ...p, orderNumber: e.target.value }))}
              placeholder="KS123456789"
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-brand"
            />
          </label>
          <label className="text-sm">
            <span className="font-medium text-heading">Mobile number</span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              placeholder="98765 43210"
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-brand"
            />
          </label>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="self-end rounded-md bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground disabled:opacity-60"
          >
            {mutation.isPending ? "Checking…" : "Track"}
          </button>
        </form>

        {mutation.isError ? (
          <p className="mt-4 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
            Please check the order number and mobile number and try again.
          </p>
        ) : null}
        {notFound ? (
          <p className="mt-4 rounded-md bg-neutral-100 px-3 py-2 text-sm text-muted-foreground">
            No order found for those details.
          </p>
        ) : null}

        {order ? (
          <section className="mt-8 rounded-md border border-neutral-200 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-bold text-heading">Order {order.orderNumber}</h2>
              <span className="text-sm text-muted-foreground">
                Placed on {new Date(order.createdAt).toLocaleDateString("en-IN")}
              </span>
            </div>
            <div className="mt-6">
              <OrderStatusTimeline status={order.status} />
            </div>
            <ul className="mt-6 divide-y divide-neutral-200 text-sm">
              {order.items.map((item, i) => (
                <li key={`${item.name}-${i}`} className="flex justify-between gap-3 py-2">
                  <span className="text-heading">
                    {item.name} <span className="text-muted-foreground">× {item.qty}</span>
                  </span>
                  <span className="font-semibold text-heading">₹{item.price * item.qty}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex justify-between border-t border-neutral-200 pt-3 text-base font-bold text-heading">
              <span>Total (cash on delivery)</span>
              <span>₹{order.total}</span>
            </p>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
