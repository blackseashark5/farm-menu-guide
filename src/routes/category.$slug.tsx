import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/home/Footer";
import { ProductCard } from "@/components/home/ProductCard";
import {
  applyFilters,
  ProductFilters,
  type FilterState,
} from "@/components/shop/ProductFilters";
import { categories, getCategory, productsForCategory } from "@/data/catalog";

const SITE = "https://farm-menu-guide.lovable.app";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, products: productsForCategory(params.slug) };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found — Kisaan Seva" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.name} — Buy Online | Kisaan Seva`;
    const description = loaderData.category.description.slice(0, 158);
    const url = `${SITE}/category/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: loaderData.category.name,
            description,
            url,
          }),
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, products } = Route.useLoaderData();
  const priceCeiling = useMemo(
    () => Math.max(...products.map((p) => p.price), 1000),
    [products],
  );
  const [filters, setFilters] = useState<FilterState>({
    brand: "all",
    sort: "popular",
    maxPrice: priceCeiling,
    onlyOffers: false,
  });

  const brandOptions = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products],
  );
  const visible = useMemo(() => applyFilters(products, filters), [products, filters]);
  const siblings = categories.filter((c) => c.parent === (category.parent ?? category.slug));

  return (
    <div className="min-h-screen bg-white font-display">
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {category.parent ? (
            <>
              {" / "}
              <Link
                to="/category/$slug"
                params={{ slug: category.parent }}
                className="hover:underline"
              >
                {getCategory(category.parent)?.name ?? category.parent}
              </Link>
            </>
          ) : null}
          {" / "}
          <span className="text-heading">{category.name}</span>
        </nav>

        <h1 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">{category.name}</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{category.description}</p>

        {siblings.length ? (
          <ul className="mega-scroll mt-5 flex gap-2 overflow-x-auto pb-2">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: s.slug }}
                  className={`block shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold whitespace-nowrap ${
                    s.slug === category.slug
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-neutral-300 text-heading hover:border-brand"
                  }`}
                >
                  {s.name}
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
            priceCeiling={priceCeiling}
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
              No products match these filters. Try widening the price range.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
