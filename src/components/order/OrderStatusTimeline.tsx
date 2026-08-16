export const ORDER_STEPS = ["placed", "packed", "shipped", "delivered"] as const;

const LABELS: Record<string, string> = {
  placed: "Order placed",
  packed: "Packed",
  shipped: "Out for delivery",
  delivered: "Delivered",
};

export function OrderStatusTimeline({ status }: { status: string }) {
  const current = Math.max(0, ORDER_STEPS.indexOf(status as (typeof ORDER_STEPS)[number]));
  return (
    <ol className="flex items-center gap-1" aria-label={`Order status: ${LABELS[status] ?? status}`}>
      {ORDER_STEPS.map((step, i) => {
        const done = i <= current;
        return (
          <li key={step} className="flex flex-1 flex-col items-center gap-1 text-center">
            <div className="flex w-full items-center">
              <span className={`h-0.5 flex-1 ${i === 0 ? "bg-transparent" : done ? "bg-brand" : "bg-neutral-200"}`} />
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                  done ? "bg-brand text-brand-foreground" : "bg-neutral-200 text-neutral-500"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`h-0.5 flex-1 ${
                  i === ORDER_STEPS.length - 1 ? "bg-transparent" : i < current ? "bg-brand" : "bg-neutral-200"
                }`}
              />
            </div>
            <span className={`text-[11px] ${done ? "font-semibold text-heading" : "text-muted-foreground"}`}>
              {LABELS[step]}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
