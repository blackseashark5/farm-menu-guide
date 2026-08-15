import { Heart, Star } from "lucide-react";
import type { Product } from "@/data/catalog";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  return (
    <article className="relative flex flex-col overflow-hidden rounded-md border border-neutral-200 bg-white transition-shadow hover:shadow-lg">
      <span className="absolute top-0 left-0 z-10 rounded-br-md bg-saffron px-2 py-1 text-[11px] font-bold text-saffron-foreground">
        {off}% OFF
      </span>
      <button
        type="button"
        aria-label={`Add ${product.name} to wishlist`}
        className="absolute top-2 right-2 z-10 grid h-8 w-8 place-items-center rounded-full text-neutral-400 hover:text-destructive"
      >
        <Heart className="h-4 w-4" />
      </button>
      <div className="relative grid h-40 place-items-center bg-neutral-50 text-5xl">
        <span aria-hidden>{product.emoji}</span>
        <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded bg-brand-dark px-1.5 py-0.5 text-[11px] font-semibold text-brand-foreground">
          {product.rating} <Star className="h-3 w-3 fill-current" aria-hidden /> | {product.reviews}
        </span>
      </div>
      {product.badge ? (
        <p className="bg-destructive px-2 py-1 text-[11px] font-semibold text-destructive-foreground">
          {product.badge} ✨
        </p>
      ) : null}
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-sm font-medium text-heading">{product.name}</h3>
        <p className="text-xs text-muted-foreground uppercase">{product.brand}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-base font-bold text-heading">₹{product.price}</span>
          <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
        </div>
        <p className="text-xs font-medium text-brand-dark">Save ₹ {product.mrp - product.price}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Size</span>
          <span className="flex-1 rounded border border-neutral-300 px-2 py-1 text-xs">
            {product.size}
          </span>
        </div>
        <button
          type="button"
          onClick={() => add(product)}
          className="mt-3 w-full rounded-md bg-brand py-2 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
