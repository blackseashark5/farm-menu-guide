import { Mic, Search } from "lucide-react";

export function SearchBar({ className = "" }: { className?: string }) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={`flex w-full items-center overflow-hidden rounded-md border border-neutral-300 bg-white ${className}`}
    >
      <Search className="mx-3 h-4 w-4 shrink-0 text-neutral-500" aria-hidden />
      <input
        type="search"
        aria-label="Search products"
        placeholder="Search products..."
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
  );
}
