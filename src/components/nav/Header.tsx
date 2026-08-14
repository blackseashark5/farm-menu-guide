import { ChevronDown, Globe, Heart, ShoppingCart, Truck, User } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { NavigationBar } from "./NavigationBar";
import { ResponsiveMobileMenu } from "./ResponsiveMobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-brand-deep">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-4 px-4 py-1.5 text-[13px] text-brand-foreground sm:px-6">
          <a href="#sell" className="hidden hover:underline sm:inline">
            Sell on Kisaan Seva
          </a>
          <span className="hidden h-4 w-px bg-white/30 sm:inline" />
          <a href="#bulk" className="hidden hover:underline md:inline">
            Bulk Order Inquiries
          </a>
          <span className="hidden h-4 w-px bg-white/30 md:inline" />
          <a href="#corporate" className="hidden hover:underline md:inline">
            Corporate Site
          </a>
          <a
            href="tel:18003000000"
            className="rounded bg-saffron px-3 py-1 font-semibold text-saffron-foreground"
          >
            Missed Call To Order: 1800-3000-2434
          </a>
        </div>
      </div>

      <div className="border-b border-neutral-200 bg-brand-deep lg:bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:gap-8">
          <div className="flex min-w-0 items-center gap-2">
            <ResponsiveMobileMenu />
            <a href="#top" className="flex min-w-0 items-center gap-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-lg">
                🌿
              </span>
              <span className="truncate text-xl font-extrabold tracking-tight text-brand-foreground lg:text-2xl lg:text-brand-dark">
                Kisaan<span className="text-saffron lg:text-brand">Seva</span>
              </span>
            </a>
          </div>

          <div className="hidden min-w-0 justify-center lg:flex">
            <div className="w-full max-w-xl">
              <SearchBar />
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-4 text-brand-foreground lg:text-heading">
            <button
              type="button"
              className="hidden items-center gap-2 rounded-md border border-brand/40 px-2.5 py-1.5 text-sm font-medium lg:flex"
            >
              <Globe className="h-4 w-4 text-brand" aria-hidden />
              English
              <ChevronDown className="h-3.5 w-3.5" aria-hidden />
            </button>
            <a href="#track" className="hidden items-center gap-2 text-sm xl:flex">
              <Truck className="h-5 w-5" aria-hidden /> Track Order
            </a>
            <a href="#wishlist" className="hidden items-center gap-2 text-sm md:flex">
              <Heart className="h-5 w-5" aria-hidden /> Wishlist
            </a>
            <a href="#login" className="hidden items-center gap-2 text-sm sm:flex">
              <User className="h-5 w-5" aria-hidden /> Login
            </a>
            <a href="#cart" className="flex items-center gap-2 text-sm">
              <ShoppingCart className="h-5 w-5" aria-hidden />
              <span className="hidden sm:inline">Cart</span>
            </a>
          </div>
        </div>
        <div className="px-4 pb-3 lg:hidden">
          <SearchBar />
        </div>
      </div>

      <NavigationBar />
    </header>
  );
}
