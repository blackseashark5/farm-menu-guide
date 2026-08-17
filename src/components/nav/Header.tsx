import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Globe, Heart, ShoppingCart, Truck, User } from "lucide-react";
import { toast } from "sonner";
import { SearchBar } from "./SearchBar";
import { NavigationBar } from "./NavigationBar";
import { ResponsiveMobileMenu } from "./ResponsiveMobileMenu";
import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";

const LANGUAGES = ["English", "हिंदी", "मराठी", "తెలుగు", "ಕನ್ನಡ"] as const;

export function Header() {
  const { count, openCart } = useCart();
  const { count: wishCount } = useWishlist();
  const [lang, setLang] = useState<string>(LANGUAGES[0]);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);


  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-brand-deep">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-4 px-4 py-1.5 text-[13px] text-brand-foreground sm:px-6">
          <Link
            to="/category/$slug"
            params={{ slug: "brands" }}
            className="hidden hover:underline sm:inline"
          >
            Sell on Kisaan Seva
          </Link>
          <span className="hidden h-4 w-px bg-white/30 sm:inline" />
          <a href="mailto:ranveer4us@gmail.com" className="hidden hover:underline md:inline">
            Bulk Order Inquiries
          </a>
          <span className="hidden h-4 w-px bg-white/30 md:inline" />
          <Link to="/" className="hidden hover:underline md:inline">
            Corporate Site
          </Link>
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
            <Link to="/" className="flex min-w-0 items-center gap-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-lg">
                🌿
              </span>
              <span className="truncate text-xl font-extrabold tracking-tight text-brand-foreground lg:text-2xl lg:text-brand-dark">
                Kisaan<span className="text-saffron lg:text-brand">Seva</span>
              </span>
            </Link>
          </div>

          <div className="hidden min-w-0 justify-center lg:flex">
            <div className="w-full max-w-xl">
              <SearchBar />
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-4 text-brand-foreground lg:text-heading">
            <div ref={langRef} className="relative hidden lg:block">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 rounded-md border border-brand/40 px-2.5 py-1.5 text-sm font-medium"
              >
                <Globe className="h-4 w-4 text-brand" aria-hidden />
                {lang}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {langOpen ? (
                <ul
                  role="listbox"
                  aria-label="Select language"
                  className="animate-mega-in absolute right-0 z-50 mt-1 w-36 overflow-hidden rounded-md border border-neutral-200 bg-white py-1 shadow-lg"
                >
                  {LANGUAGES.map((l) => (
                    <li key={l}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={lang === l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                          toast.success(`Language set to ${l}`);
                        }}
                        className={`block w-full px-3 py-2 text-left text-sm hover:bg-neutral-100 ${
                          lang === l ? "font-semibold text-brand-dark" : "text-heading"
                        }`}
                      >
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <Link to="/track" className="hidden items-center gap-2 text-sm xl:flex">
              <Truck className="h-5 w-5" aria-hidden /> Track Order
            </Link>
            <Link
              to="/wishlist"
              aria-label={`Wishlist, ${wishCount} items`}
              className="relative hidden items-center gap-2 text-sm md:flex"
            >
              <Heart className="h-5 w-5" aria-hidden /> Wishlist
              {wishCount > 0 ? (
                <span className="absolute -top-2 -left-2 grid h-5 min-w-5 place-items-center rounded-full bg-saffron px-1 text-[11px] font-bold text-saffron-foreground">
                  {wishCount}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              onClick={() =>
                toast("Login coming soon", {
                  description: "You can order right away with cash on delivery — no account needed.",
                })
              }
              className="hidden items-center gap-2 text-sm sm:flex"
            >
              <User className="h-5 w-5" aria-hidden /> Login
            </button>

            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${count} items`}
              className="relative flex items-center gap-2 text-sm"
            >
              <ShoppingCart className="h-5 w-5" aria-hidden />
              {count > 0 ? (
                <span className="absolute -top-2 -left-2 grid h-5 min-w-5 place-items-center rounded-full bg-saffron px-1 text-[11px] font-bold text-saffron-foreground">
                  {count}
                </span>
              ) : null}
              <span className="hidden sm:inline">Cart</span>
            </button>
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
