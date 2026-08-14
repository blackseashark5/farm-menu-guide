import { createFileRoute } from "@tanstack/react-router";
import heroBanner from "@/assets/hero-banner.jpg";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/home/Footer";
import { ProductCard } from "@/components/home/ProductCard";
import { SectionHeader } from "@/components/home/SectionHeader";
import {
  bestSelling,
  categories,
  crops,
  pests,
  promoBanners,
  sprayers,
  topPicks,
  trending,
} from "@/data/home";

const title = "Kisaan Seva — Seeds, Crop Protection & Farm Equipment Online";
const description =
  "Shop genuine seeds, crop protection, crop nutrition, sprayers and animal husbandry products from trusted agri brands on Kisaan Seva.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Circle({ emoji, tint }: { emoji: string; tint?: string }) {
  return (
    <span
      className={`grid h-20 w-20 place-items-center rounded-full text-3xl sm:h-24 sm:w-24 sm:text-4xl ${tint ?? "bg-neutral-100"}`}
      aria-hidden
    >
      {emoji}
    </span>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-white font-display">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative">
          <img
            src={heroBanner}
            alt="Farmer spraying a healthy green crop field"
            width={1920}
            height={768}
            className="h-[220px] w-full object-cover sm:h-[320px] lg:h-[420px]"
          />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-[1400px] items-center justify-end px-6">
              <div className="max-w-md text-right">
                <h1 className="text-2xl leading-tight font-extrabold text-heading sm:text-4xl lg:text-5xl">
                  Stop 200+ pests naturally.
                </h1>
                <p className="mt-2 text-lg font-bold text-brand-dark sm:text-2xl">
                  Spray Neemodi today!
                </p>
                <a
                  href="#best-selling"
                  className="mt-4 inline-block rounded-full bg-brand-dark px-6 py-2.5 text-sm font-semibold text-brand-foreground sm:text-base"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="mx-auto max-w-[1400px] px-6 py-12">
          <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <h2 className="min-w-0 text-center text-xl font-bold text-heading sm:text-2xl">
              Categories
            </h2>
            <a href="#all" className="shrink-0 text-sm font-medium text-heading underline">
              View All
            </a>
          </div>
          <div className="h-px w-full bg-neutral-200" />
          <ul className="mt-8 grid grid-cols-3 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
            {categories.map((cat) => (
              <li key={cat.name} className="flex flex-col items-center gap-3 text-center">
                <a href="#all" className="transition-transform hover:scale-105">
                  <Circle emoji={cat.emoji} tint={cat.tint} />
                </a>
                <span className="px-2 text-sm text-heading">{cat.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Top 10 picks */}
        <section id="top-picks" className="bg-brand/5 py-12">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl" aria-hidden>
                🏆
              </span>
              <div>
                <h2 className="text-xl font-extrabold text-brand-deep sm:text-3xl">
                  Top 10 Picks by Farmers
                </h2>
                <p className="text-sm text-muted-foreground">Find the best picks from the fields</p>
              </div>
            </div>
            <ul className="mega-scroll mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
              {topPicks.map((pick) => (
                <li
                  key={pick.rank}
                  className="w-56 shrink-0 snap-start rounded-md border border-neutral-200 bg-white p-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-sm font-bold text-brand-foreground">
                      {pick.rank}
                    </span>
                    <span className="min-w-0 flex-1 rounded bg-brand/10 px-2 py-1 text-[11px] font-semibold text-brand-dark">
                      {pick.tag}
                    </span>
                  </div>
                  <div className="my-4 grid h-32 place-items-center text-5xl" aria-hidden>
                    {pick.emoji}
                  </div>
                  <p className="line-clamp-2 text-sm font-medium text-heading">{pick.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Shop by crop */}
        <section id="crops" className="mx-auto max-w-[1400px] px-6 py-12">
          <SectionHeader
            title="Shop By Crop"
            emoji="🌾"
            subtitle="Get solutions customized for your crops."
          />
          <ul className="mega-scroll flex gap-6 overflow-x-auto pb-3">
            {crops.map((crop) => (
              <li key={crop.name} className="flex w-28 shrink-0 flex-col items-center gap-3">
                <a
                  href="#all"
                  className="rounded-full border border-neutral-200 p-1 transition-transform hover:scale-105"
                >
                  <Circle emoji={crop.emoji} />
                </a>
                <span className="text-center text-sm text-heading">{crop.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Shop by pest */}
        <section id="pests" className="mx-auto max-w-[1400px] px-6 pb-12">
          <SectionHeader
            title="Shop by Pest & Disease"
            emoji="🐞"
            subtitle="Find solutions for your crop problems."
          />
          <ul className="mega-scroll flex gap-6 overflow-x-auto pb-3">
            {pests.map((pest) => (
              <li key={pest.name} className="flex w-32 shrink-0 flex-col items-center gap-3">
                <a href="#all" className="transition-transform hover:scale-105">
                  <Circle emoji={pest.emoji} tint="bg-green-100" />
                </a>
                <span className="text-center text-sm text-heading">{pest.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Best selling */}
        <section id="best-selling" className="bg-neutral-100 py-12">
          <div className="mx-auto max-w-[1400px] px-6">
            <SectionHeader title="Best Selling" subtitle="Best prices available today." />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {bestSelling.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Promo banners */}
        <section className="bg-brand/5 py-12">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-6 md:grid-cols-3">
            {promoBanners.map((banner) => (
              <a
                key={banner.title}
                href="#all"
                className={`relative flex min-h-[180px] items-center gap-4 overflow-hidden rounded-md bg-gradient-to-br ${banner.tone} p-6 text-brand-foreground shadow-md`}
              >
                <span className="absolute top-2 right-2 rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-bold">
                  Ad
                </span>
                <span className="text-5xl" aria-hidden>
                  {banner.emoji}
                </span>
                <span className="text-lg leading-snug font-bold">{banner.title}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Sprayers */}
        <section id="sprayers" className="mx-auto max-w-[1400px] px-6 py-12">
          <SectionHeader title="Sprayers" subtitle="Reliable Sprayers Built for Indian Farms" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {sprayers.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </section>

        {/* Trending */}
        <section id="trending" className="bg-neutral-100 py-12">
          <div className="mx-auto max-w-[1400px] px-6">
            <SectionHeader
              title="Trending Products"
              emoji="🔥"
              subtitle="Farmer favorites this week."
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {trending.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
