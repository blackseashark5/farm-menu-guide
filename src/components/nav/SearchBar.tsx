import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Mic, Search } from "lucide-react";
import { searchCatalog } from "@/data/catalog";

export function SearchBar({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => searchCatalog(query), [query]);
  const hasResults = results.products.length > 0 || results.categories.length > 0;

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setOpen(false);
    navigate({ to: "/search", search: { q: query.trim() } });
  };

  return (
    <div ref={wrapRef} className="relative w-full">
      <form
        role="search"
        onSubmit={submit}
        className={`flex w-full items-center overflow-hidden rounded-md border border-neutral-300 bg-white ${className}`}
      >
        <Search className="mx-3 h-4 w-4 shrink-0 text-neutral-500" aria-hidden />
        <input
          type="search"
          aria-label="Search products"
          placeholder="Search products, brands, categories..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-neutral-800 outline-none placeholder:text-neutral-500"
        />
        <button
          type="button"
          aria-label="Search by voice"
          className="grid h-10 w-11 shrink-0 place-items-center bg-saffron text-saffron-foreground transition-opacity hover:opacity-90"
        >
          <Mic className="h-4 w-4" aria-hidden />
        </button>
      </form>

      {open && query.trim() ? (
        <div className="animate-mega-in absolute top-full left-0 z-[70] mt-1 w-full overflow-hidden rounded-md border border-neutral-200 bg-white shadow-xl">
          {hasResults ? (
            <div className="mega-scroll max-h-[70vh] overflow-y-auto">
              {results.categories.length ? (
                <div className="border-b border-neutral-200 p-2">
                  <p className="px-2 pb-1 text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
                    Categories
                  </p>
                  <ul>
                    {results.categories.map((c) => (
                      <li key={c.slug}>
                        <Link
                          to="/category/$slug"
                          params={{ slug: c.slug }}
                          onClick={() => setOpen(false)}
                          className="block rounded px-2 py-1.5 text-sm text-heading hover:bg-brand/5"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <ul className="p-2">
                {results.products.slice(0, 6).map((prod) => (
                  <li key={prod.id}>
                    <Link
                      to="/search"
                      search={{ q: prod.name }}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded px-2 py-2 hover:bg-brand/5"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-neutral-50 text-xl" aria-hidden>
                        {prod.emoji}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm text-heading">{prod.name}</span>
                        <span className="block text-xs text-muted-foreground">{prod.brand}</span>
                      </span>
                      <span className="text-sm font-semibold text-heading">₹{prod.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  navigate({ to: "/search", search: { q: query.trim() } });
                }}
                className="w-full border-t border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm font-semibold text-brand-dark"
              >
                View all {results.products.length} results for “{query.trim()}”
              </button>
            </div>
          ) : (
            <p className="px-4 py-4 text-sm text-muted-foreground">
              No matches for “{query.trim()}”. Try “seeds”, “sprayer” or a brand name.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
