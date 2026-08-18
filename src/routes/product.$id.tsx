import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, ShieldCheck, Star, Truck } from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/home/Footer";
import { ProductCard } from "@/components/home/ProductCard";
import { getCategory, getProduct, products as allProducts } from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";

const SITE = "https://farm-menu-guide.lovable.app";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    const related = allProducts
      .filter((p) => p.id !== product.id && p.tags.some((t) => product.tags.includes(t)))
      .slice(0, 4);
    return { product, related };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — Kisaan Seva" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ₹${product.price} | Kisaan Seva`.slice(0, 60);
    const description = `Buy ${product.name} (${product.size}) by ${product.brand} at ₹${product.price}. Rated ${product.rating}/5 by ${product.reviews} farmers. Fast farm delivery.`.slice(
      0,
      158,
    );
    const url = `${SITE}/product/${params.id}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            brand: { "@type": "Brand", name: product.brand },
            description,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: product.rating,
              reviewCount: product.reviews,
            },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url,
            },
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product, related } = Route.useLoaderData();
  const { add, openCart } = useCart();
  const { has, toggle } = useWishlist();
  const saved = has(product.id);
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const parentTag = product.tags[0];
  const parent = parentTag ? getCategory(parentTag) : undefined;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-brand-dark">
            Home
          </Link>
          {parent ? (
            <>
              {" / "}
              <Link
                to="/category/$slug"
                params={{ slug: parent.slug }}
                className="hover:text-brand-dark"
              >
                {parent.name}
              </Link>
            </>
          ) : null}
          {" / "}
          <span className="text-heading">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative grid h-72 place-items-center rounded-lg border border-neutral-200 bg-neutral-50 text-[7rem] sm:h-96">
            <span aria-hidden>{product.emoji}</span>
            <span className="absolute top-0 left-0 rounded-br-lg bg-saffron px-3 py-1 text-xs font-bold text-saffron-foreground">
              {off}% OFF
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
              {product.brand}
            </p>
            <h1 className="mt-1 text-2xl font-bold text-heading sm:text-3xl">{product.name}</h1>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="flex items-center gap-1 rounded bg-brand-dark px-2 py-0.5 text-xs font-semibold text-brand-foreground">
                {product.rating} <Star className="h-3 w-3 fill-current" aria-hidden />
              </span>
              <span className="text-muted-foreground">{product.reviews} farmer reviews</span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-heading">₹{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">₹{product.mrp}</span>
              <span className="text-sm font-semibold text-brand-dark">
                Save ₹{product.mrp - product.price}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Inclusive of all taxes</p>

            <p className="mt-5 text-sm leading-relaxed text-neutral-700">
              {product.name} from {product.brand} is packed in a {product.size} pack for
              {" "}
              {parent ? parent.name.toLowerCase() : "farm"} use. It is sourced directly from the
              manufacturer, quality checked before dispatch, and trusted by {product.reviews}+
              farmers with an average rating of {product.rating} out of 5. Follow the label dosage
              for best results and store in a cool, dry place away from direct sunlight.
            </p>

            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded border border-neutral-200 p-3">
                <dt className="text-xs text-muted-foreground">Pack size</dt>
                <dd className="font-medium text-heading">{product.size}</dd>
              </div>
              <div className="rounded border border-neutral-200 p-3">
                <dt className="text-xs text-muted-foreground">Brand</dt>
                <dd className="font-medium text-heading">{product.brand}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  add(product);
                  toast.success(`${product.name} added to cart`);
                }}
                className="flex-1 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => {
                  add(product);
                  openCart();
                }}
                className="flex-1 rounded-md bg-saffron px-6 py-3 text-sm font-semibold text-saffron-foreground transition-opacity hover:opacity-90"
              >
                Buy Now
              </button>
              <button
                type="button"
                aria-pressed={saved}
                aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
                onClick={() => {
                  const added = toggle(product);
                  toast[added ? "success" : "message"](
                    added ? "Saved to wishlist" : "Removed from wishlist",
                  );
                }}
                className={`grid h-12 w-12 place-items-center rounded-md border border-neutral-300 ${
                  saved ? "text-destructive" : "text-neutral-500 hover:text-destructive"
                }`}
              >
                <Heart className={`h-5 w-5 ${saved ? "fill-current" : ""}`} />
              </button>
            </div>

            <ul className="mt-6 space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-brand-dark" aria-hidden /> Cash on delivery available
                across India
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-dark" aria-hidden /> 100% genuine,
                manufacturer-sealed products
              </li>
            </ul>
          </div>
        </div>

        {related.length ? (
          <section className="mt-12">
            <h2 className="mb-4 text-lg font-bold text-heading">Farmers also bought</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
