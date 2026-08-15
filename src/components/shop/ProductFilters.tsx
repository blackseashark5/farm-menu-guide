export type SortKey = "popular" | "price-low" | "price-high" | "discount";

export type FilterState = {
  brand: string;
  sort: SortKey;
  maxPrice: number;
  onlyOffers: boolean;
};

export function ProductFilters({
  brands,
  value,
  onChange,
  priceCeiling,
  resultCount,
}: {
  brands: string[];
  value: FilterState;
  onChange: (next: FilterState) => void;
  priceCeiling: number;
  resultCount: number;
}) {
  return (
    <aside className="rounded-md border border-neutral-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold tracking-wide text-heading uppercase">Filters</h2>
        <button
          type="button"
          onClick={() =>
            onChange({ brand: "all", sort: "popular", maxPrice: priceCeiling, onlyOffers: false })
          }
          className="text-xs font-semibold text-brand-dark underline"
        >
          Reset
        </button>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{resultCount} products</p>

      <label className="mt-5 block text-sm">
        <span className="font-medium text-heading">Brand</span>
        <select
          value={value.brand}
          onChange={(e) => onChange({ ...value, brand: e.target.value })}
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
        >
          <option value="all">All brands</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block text-sm">
        <span className="font-medium text-heading">Sort by</span>
        <select
          value={value.sort}
          onChange={(e) => onChange({ ...value, sort: e.target.value as SortKey })}
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
        >
          <option value="popular">Popularity</option>
          <option value="price-low">Price: low to high</option>
          <option value="price-high">Price: high to low</option>
          <option value="discount">Biggest discount</option>
        </select>
      </label>

      <label className="mt-4 block text-sm">
        <span className="font-medium text-heading">
          Max price: ₹{value.maxPrice.toLocaleString("en-IN")}
        </span>
        <input
          type="range"
          min={0}
          max={priceCeiling}
          step={50}
          value={value.maxPrice}
          onChange={(e) => onChange({ ...value, maxPrice: Number(e.target.value) })}
          className="mt-2 w-full accent-brand"
        />
      </label>

      <label className="mt-4 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={value.onlyOffers}
          onChange={(e) => onChange({ ...value, onlyOffers: e.target.checked })}
          className="h-4 w-4 accent-brand"
        />
        <span className="font-medium text-heading">30%+ discount only</span>
      </label>
    </aside>
  );
}

export function applyFilters<
  T extends { brand: string; price: number; mrp: number; reviews: number },
>(items: T[], f: FilterState): T[] {
  const discount = (x: T) => (x.mrp - x.price) / x.mrp;
  const filtered = items.filter(
    (x) =>
      (f.brand === "all" || x.brand === f.brand) &&
      x.price <= f.maxPrice &&
      (!f.onlyOffers || discount(x) >= 0.3),
  );
  const sorted = [...filtered];
  if (f.sort === "price-low") sorted.sort((a, b) => a.price - b.price);
  if (f.sort === "price-high") sorted.sort((a, b) => b.price - a.price);
  if (f.sort === "discount") sorted.sort((a, b) => discount(b) - discount(a));
  if (f.sort === "popular") sorted.sort((a, b) => b.reviews - a.reviews);
  return sorted;
}
