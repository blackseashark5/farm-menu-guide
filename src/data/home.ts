import { products, type Product } from "./catalog";

export type { Product };

const byId = (id: string) => products.find((p) => p.id === id);

export type Category = { name: string; emoji: string; tint: string; slug: string };

export const categories: Category[] = [
  { name: "Offers", emoji: "🏷️", tint: "bg-lime-200", slug: "offers" },
  { name: "Urban Gardening", emoji: "🪴", tint: "bg-sky-200", slug: "urban-garden" },
  { name: "Sprayers", emoji: "🎒", tint: "bg-amber-200", slug: "sprayers" },
  { name: "Insecticides", emoji: "🧪", tint: "bg-cyan-200", slug: "insecticides" },
  { name: "Herbicides", emoji: "🧴", tint: "bg-orange-200", slug: "herbicides" },
  { name: "Nutrients", emoji: "🌾", tint: "bg-pink-200", slug: "crop-nutrition" },
  { name: "Fungicides", emoji: "🍄", tint: "bg-sky-300", slug: "fungicides" },
  { name: "Vegetable & Fruit Seeds", emoji: "🥦", tint: "bg-yellow-200", slug: "vegetables-seeds" },
  { name: "Growth Promoters", emoji: "🌱", tint: "bg-purple-200", slug: "growth-promoters" },
  { name: "Farm Machinery", emoji: "🚜", tint: "bg-green-200", slug: "implements" },
  { name: "Flower Seeds", emoji: "🌻", tint: "bg-rose-200", slug: "flower-seeds" },
  { name: "Animal Husbandry", emoji: "🐄", tint: "bg-orange-300", slug: "animal-husbandry" },
];

export type TopPick = { rank: number; tag: string; product: Product };

export const topPicks: TopPick[] = (
  [
    ["More Branching", "tapas-vitainject-plant-growth-regulator-fruit-and-flowering"],
    ["Stronger Roots", "tapas-humiq-humic-acid-fulvic-acid-and-potassium-100"],
    ["Pest Control", "coragen-insecticide-chlorantraniliprole-18-5-sc"],
    ["Growth Booster", "biovita-liquid-biofertilizer-seaweed-extract"],
    ["High Yield", "yashaswaini-hybrid-chilli-seeds-for-high-yield"],
    ["Weed Control", "sumitomo-glycel-herbicide-glyphosate-41-sl-ipa-salt"],
    ["Viral Defense", "katyayani-anti-virus-organic-viricide-for-viral-disease"],
  ] as const
)
  .map(([tag, id]) => ({ tag: tag as string, product: byId(id) }))
  .filter((x): x is { tag: string; product: Product } => Boolean(x.product))
  .map((x, i) => ({ rank: i + 1, tag: x.tag, product: x.product }));



export const crops = [
  { name: "Green Chilli", emoji: "🌶️", slug: "chilli" },
  { name: "Tomato", emoji: "🍅", slug: "tomato" },
  { name: "Brinjal", emoji: "🍆", slug: "brinjal" },
  { name: "Cotton", emoji: "🌼", slug: "cotton" },
  { name: "Beans", emoji: "🫘", slug: "vegetables-seeds" },
  { name: "Paddy", emoji: "🌾", slug: "paddy" },
  { name: "Bitter gourd", emoji: "🥒", slug: "cucumber" },
  { name: "Okra", emoji: "🌿", slug: "vegetables-seeds" },
];

export const pests = [
  { name: "Leaf Miner", emoji: "🍃", slug: "insecticides" },
  { name: "Aphids", emoji: "🐛", slug: "insecticides" },
  { name: "Whiteflies", emoji: "🦟", slug: "bio-insecticides" },
  { name: "Two spotted mites", emoji: "🕷️", slug: "bio-miticides-acaricides" },
  { name: "Thrips", emoji: "🐜", slug: "insecticides" },
  { name: "Powdery mildew & blight", emoji: "🍄", slug: "fungicides" },
  { name: "Weeds & grasses", emoji: "🌾", slug: "herbicides" },
];

const pick = (...ids: string[]) => ids.map(byId).filter((p): p is Product => Boolean(p));

export const bestSelling: Product[] = pick(
  "tapas-vitainject-plant-growth-regulator-fruit-and-flowering",
  "tapas-humiq-humic-acid-fulvic-acid-and-potassium-100",
  "tapas-vam-sp-highly-concentrated-biofertilizer",
  "saaho-to-3251-tomato-seeds-high-yield-hybrid",
  "katyayani-activated-humic-acid-and-fulvic-acid-98",
);

export const trending: Product[] = pick(
  "janatha-amino-pro-marine-based-amino-acid-growth-promoter",
  "coragen-insecticide-chlorantraniliprole-18-5-sc",
  "biovita-liquid-biofertilizer-seaweed-extract",
  "bayer-roundup-herbicide-glyphosate-41-sl",
  "solomon-insecticide-by-bayer-beta-cyfluthrin-8-49",
  "katyayani-anti-virus-organic-viricide-for-viral-disease",
  "sumitomo-glycel-herbicide-glyphosate-41-sl-ipa-salt",
  "amruth-neemodi-1500-ppm-neem-oil-bio-insecticide",
  "syngenta-amistar-top-fungicide-azoxystrobin-difenoconazole",
  "upl-saaf-fungicide-carbendazim-mancozeb",
);

export const sprayers: Product[] = products
  .filter((p) => p.tags.includes("sprayers"))
  .slice(0, 5);

export const promoBanners = [
  {
    title: "Conduct cattle pregnancy tests easily with animal pregnancy test kits!",
    emoji: "🐄",
    tone: "from-slate-700 to-slate-900",
    slug: "animal-husbandry",
  },
  {
    title: "Seeds that ensure a strong plant and rapid early growth!",
    emoji: "🌾",
    tone: "from-amber-400 to-orange-500",
    slug: "seeds",
  },
  {
    title: "Highly efficient range of crop protection solutions!",
    emoji: "🛡️",
    tone: "from-sky-500 to-blue-700",
    slug: "crop-protection",
  },
];
