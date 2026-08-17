import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/home/Footer";
import { useWishlist } from "@/lib/wishlist";
import { useCart } from "@/lib/cart";

const SITE = "https://farm-menu-guide.lovable.app";
const title = "My Wishlist — Kisaan Seva";
const description =
  "Saved seeds, crop protection, nutrition and farm equipment on Kisaan Seva. Move items to your cart whenever you are ready to order.";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/wishlist` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/wishlist` }],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { items, remove, clear } = useWishlist();
  const { add } = useCart();

  return (
    <div className="min-h-dvh bg-neutral-50">
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="text-heading">Wishlist</span>
        </nav>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-extrabold text-heading">
            My Wishlist{" "}
            <span className="text-sm font-medium text-muted-foreground">({items.length} items)</span>
          </h1>
          {items.length > 0 ? (
            <button
              type="button"
              onClick={() => {
                clear();
                toast.success("Wishlist cleared");
              }}
              className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-heading hover:bg-neutral-100"
            >
              Clear wishlist
            </button>
          ) : null}
        </div>

        {items.length === 0 ? (
          <div className="mt-10 grid place-items-center gap-3 rounded-md border border-neutral-200 bg-white py-16 text-center">
            <Heart className="h-10 w-10 text-neutral-300" aria-hidden />
            <p className="text-sm text-muted-foreground">
              Nothing saved yet. Tap the heart on any product to keep it here.
            </p>
            <Link
              to="/"
              className="mt-1 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => (
              <li
                key={product.id}
                className="flex gap-3 rounded-md border border-neutral-200 bg-white p-4"
              >
                <span
                  className="grid h-20 w-20 shrink-0 place-items-center rounded bg-neutral-50 text-4xl"
                  aria-hidden
                >
                  {product.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="line-clamp-2 text-sm font-medium text-heading">{product.name}</h2>
                  <p className="text-xs text-muted-foreground uppercase">
                    {product.brand} · {product.size}
                  </p>
                  <p className="mt-1 text-sm font-bold text-heading">
                    ₹{product.price}{" "}
                    <span className="text-xs font-normal text-muted-foreground line-through">
                      ₹{product.mrp}
                    </span>
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => add(product)}
                      className="flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground"
                    >
                      <ShoppingCart className="h-3.5 w-3.5" aria-hidden /> Move to cart
                    </button>
                    <button
                      type="button"
                      aria-label={`Remove ${product.name} from wishlist`}
                      onClick={() => {
                        remove(product.id);
                        toast("Removed from wishlist");
                      }}
                      className="grid h-8 w-8 place-items-center rounded-md border border-neutral-300 text-neutral-500 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
