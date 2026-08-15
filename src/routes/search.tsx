import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/home/Footer";
import { ProductCard } from "@/components/home/ProductCard";
import { applyFilters, ProductFilters, type FilterState } from "@/components/shop/ProductFilters";
import { searchCatalog } from "@/data/catalog";

const SITE = "https://farm-menu-guide.lovable.app";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Search Agri Products — Kisaan Seva" },
      {
        name: "description",
        content:
          "Search seeds, crop protection, crop nutrition, sprayers and animal husbandry products across trusted agri brands on Kisaan Seva.",
      },
      { property: "og:title", content: "Search Agri Products — Kisaan Seva" },
      {
        property: "og:description",
        content: "Find the right agri input by product, brand or category on Kisaan Seva.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/search` },
      { name: "robots", content: "noindex,follow" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/search` }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const results = useMemo(() => searchCatalog(q), [q]);
  const priceCeiling = useMemo(
    () => Math.max(...results.products.map((p) => p.price), 1000),
    [results],
  );
  const [filters, setFilters] = useState<FilterState>({
    brand: "all",
    sort: "popular",
    maxPrice: 50000,
    onlyOffers: false,
  });
  const brandOptions = useMemo(
    () => Array.from(new Set(results.products.map((p) => p.brand))).sort(),
    [results],
  );
  const visible = useMemo(() => applyFilters(results.products, filters), [results, filters]);

  return (
    <div className="min-h-screen bg-white font-display">
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-extrabold text-heading sm:text-3xl">
          {q ? `Results for “${q}”` : "Search products"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {q ? `${results.products.length} products found` : "Use the search bar above to begin."}
        </p>

        {results.categories.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {results.categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="block rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-semibold text-heading hover:border-brand"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <ProductFilters
            brands={brandOptions}
            value={filters}
            onChange={setFilters}
            priceCeiling={Math.max(priceCeiling, 50000)}
            resultCount={visible.length}
          />
          {visible.length ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {visible.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <p className="rounded-md border border-neutral-200 p-8 text-center text-sm text-muted-foreground">
              Nothing found. Try a brand like “Bayer” or a category like “sprayers”.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
