import { navEntries } from "./megaMenu";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  size: string;
  emoji: string;
  badge?: string | undefined;
  /** category / subcategory slugs this product belongs to */
  tags: string[];
};

export const slugify = (label: string) =>
  label
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const p = (
  name: string,
  brand: string,
  price: number,
  mrp: number,
  rating: number,
  reviews: number,
  size: string,
  emoji: string,
  tags: string[],
  badge?: string,
): Product => ({
  id: slugify(name).slice(0, 60),
  name,
  brand,
  price,
  mrp,
  rating,
  reviews,
  size,
  emoji,
  tags,
  badge,
});

export const products: Product[] = [
  // ---------- Crop nutrition / growth ----------
  p("TAPAS VitaInject Plant Growth Regulator - Fruit & Flowering", "Tapas", 479, 700, 4.2, 1483, "10 ml", "💉", ["crop-nutrition", "tapas", "plant-growth-regulators", "flower-boosters", "yield-boosters", "offers"], "High Demand Limited Stock"),
  p("Tapas HumiQ – Humic Acid, Fulvic Acid & Potassium 100%", "Tapas", 479, 1299, 4.2, 256, "1 kg", "🧷", ["crop-nutrition", "tapas", "humic-acids", "fertilizers", "offers"]),
  p("Tapas VAM SP Highly Concentrated Biofertilizer", "Tapas", 399, 1100, 4.1, 193, "100 gm", "🌱", ["crop-nutrition", "tapas", "organic", "bio-organic-fertilizers", "growth-promoters"]),
  p("Katyayani Activated Humic Acid and Fulvic Acid 98%", "Katyayani Organics", 739, 1880, 4.3, 877, "500 gm", "🧪", ["crop-nutrition", "humic-acids", "organic", "katyayani-organics"]),
  p("Janatha Amino Pro – Marine Based Amino Acid Growth Promoter", "Janatha Agro Products", 770, 950, 4.4, 13, "1 ltr", "🧴", ["crop-nutrition", "growth-promoters", "plant-growth-promoters", "liquid-fertilizers"]),
  p("Biovita Liquid Biofertilizer (Seaweed Extract)", "PI Industries", 315, 350, 4.3, 1231, "500 ml", "🌿", ["crop-nutrition", "seaweed-extracts", "bio-stimulants-activators", "pi-industries"]),
  p("Multiplex General Liquid Micronutrient Mixture", "Multiplex", 425, 620, 4.4, 640, "1 ltr", "🥤", ["crop-nutrition", "micro-nutrients", "liquid-fertilizers", "multiplex"]),
  p("Geolife Nano Vita Plant Growth Enhancer", "Geolife", 545, 900, 4.5, 388, "250 gm", "✨", ["crop-nutrition", "growth-promoters", "plant-enhancers", "geolife"]),
  p("Hifield NPK 19:19:19 Water Soluble Fertilizer", "Hifield", 285, 420, 4.2, 512, "1 kg", "🧂", ["crop-nutrition", "fertilizers", "npk-fertilizers", "chemical-fertilizers", "hifield"]),
  p("Sea6 Energy AgroGain Bio Stimulant", "Sea6 Energy", 690, 980, 4.3, 176, "1 ltr", "🌊", ["crop-nutrition", "bio-stimulants-activators", "sea6-energy", "organic"]),
  p("Amruth Organic Panchagavya Growth Tonic", "Amruth Organic", 350, 500, 4.1, 221, "1 ltr", "🐄", ["crop-nutrition", "organic", "bio-organic-fertilizers", "amruth-organic"]),
  p("Multiplex pH Balancer Soil Conditioner", "Multiplex", 240, 340, 4.0, 98, "500 ml", "⚗️", ["crop-nutrition", "ph-balancers", "multiplex"]),
  p("Vanproz Fruit Special Fruit Enhancer", "Vanproz", 410, 640, 4.2, 143, "500 ml", "🍑", ["crop-nutrition", "fruit-enhancers", "plant-growth-regulators", "vanproz"]),

  // ---------- Crop protection ----------
  p("Coragen Insecticide – Chlorantraniliprole 18.5% SC", "FMC", 147, 220, 4.2, 853, "10 ml", "🧫", ["crop-protection", "insecticides", "fmc", "offers"]),
  p("Solomon Insecticide by Bayer (Beta-Cyfluthrin 8.49%)", "Bayer", 348, 450, 4.2, 435, "100 ml", "🧴", ["crop-protection", "insecticides", "bayer"]),
  p("Bayer Roundup Herbicide (Glyphosate 41% SL)", "Bayer", 490, 700, 4.2, 959, "1 ltr", "🥫", ["crop-protection", "herbicides", "bayer"]),
  p("Sumitomo Glycel Herbicide – Glyphosate 41% SL IPA Salt", "Sumitomo", 359, 494, 4.3, 866, "1 ltr", "🧪", ["crop-protection", "herbicides", "sumitomo"]),
  p("Katyayani Anti Virus Organic Viricide for Viral Disease", "Katyayani Organics", 413, 741, 4.2, 118, "250 ml", "🧬", ["crop-protection", "organic", "bio-viricides", "katyayani-organics"]),
  p("Syngenta Amistar Top Fungicide (Azoxystrobin + Difenoconazole)", "Syngenta", 640, 890, 4.4, 1044, "250 ml", "🍄", ["crop-protection", "fungicides", "syngenta"]),
  p("BASF Sercadis Fungicide for Powdery Mildew", "BASF", 1120, 1499, 4.5, 210, "200 ml", "🛡️", ["crop-protection", "fungicides", "basf"]),
  p("Dhanuka Targa Super Herbicide (Quizalofop Ethyl 5% EC)", "Dhanuka", 520, 720, 4.1, 344, "500 ml", "🌾", ["crop-protection", "herbicides", "dhanuka"]),
  p("Rallis Takumi Insecticide (Flubendiamide 20% WG)", "Rallis", 399, 560, 4.3, 289, "100 gm", "🐛", ["crop-protection", "insecticides", "rallis"]),
  p("UPL Saaf Fungicide (Carbendazim + Mancozeb)", "UPL", 185, 260, 4.4, 1580, "100 gm", "🍂", ["crop-protection", "fungicides", "upl", "offers"]),
  p("Barrix Catch Fruit Fly Trap Set", "Barrix", 299, 450, 4.2, 402, "Set of 5", "🪤", ["crop-protection", "organic", "traps-and-lure", "barrix"]),
  p("Amruth Neemodi 1500 PPM Neem Oil Bio Insecticide", "Amruth Organic", 359, 520, 4.4, 731, "1 ltr", "🌿", ["crop-protection", "organic", "bio-insecticides", "amruth-organic", "offers"], "Farmer Favourite"),
  p("T Stanes Nemat Bio Nematicide", "T Stanes", 445, 610, 4.2, 156, "1 ltr", "🪱", ["crop-protection", "organic", "bio-nematicides", "t-stanes"]),
  p("Adama Omite Miticide (Propargite 57% EC)", "Adama", 575, 780, 4.1, 122, "250 ml", "🕷️", ["crop-protection", "bio-miticides-acaricides", "adama"]),

  // ---------- Seeds ----------
  p("Saaho (TO-3251) Tomato Seeds | High Yield Hybrid", "Syngenta", 1099, 1617, 4.3, 350, "10 gm", "🍅", ["seeds", "vegetables-seeds", "tomato", "syngenta", "popular-products"]),
  p("Yashaswaini Hybrid Chilli Seeds for High Yield", "Namdhari", 899, 1350, 4.4, 612, "10 gm", "🌶️", ["seeds", "vegetables-seeds", "chilli", "namdhari"]),
  p("Seminis Brinjal Seeds Hybrid (Long Purple)", "Seminis", 640, 940, 4.2, 187, "10 gm", "🍆", ["seeds", "vegetables-seeds", "brinjal", "seminis"]),
  p("VNR Cucumber Seeds Hybrid Green Long", "VNR", 720, 1050, 4.3, 133, "25 gm", "🥒", ["seeds", "vegetables-seeds", "cucumber", "vnr"]),
  p("Nunhems Cauliflower Seeds Snow White Hybrid", "Nunhems", 1250, 1720, 4.5, 96, "10 gm", "🥬", ["seeds", "vegetables-seeds", "cauliflower", "nunhems"]),
  p("Mahyco Bt Cotton Seeds (High Boll Retention)", "Mahyco", 830, 1100, 4.1, 528, "450 gm", "🌼", ["seeds", "field-crops", "cotton", "mahyco"]),
  p("UPL Hybrid Paddy Seeds for Kharif Season", "UPL", 460, 640, 4.2, 274, "5 kg", "🌾", ["seeds", "field-crops", "paddy", "upl"]),
  p("Advanta Multi-Cut Forage Sorghum Seeds", "Advanta", 540, 760, 4.3, 118, "5 kg", "🐂", ["seeds", "forages", "forage-seeds", "advanta", "animal-husbandry"]),
  p("Sarpan Marigold Flower Seeds (Orange Double)", "Sarpan", 690, 980, 4.4, 205, "10 gm", "🌻", ["seeds", "flower-seeds", "sarpan"]),
  p("Known-You Exotic Broccoli Seeds", "Known-You", 980, 1400, 4.3, 74, "10 gm", "🥦", ["seeds", "exotics", "polyhouse", "known-you"]),
  p("Urja Urban Garden Vegetable Seed Kit (12 Varieties)", "Urja Seeds", 349, 599, 4.5, 941, "12 packs", "🪴", ["seeds", "urban-garden", "urja-seeds", "offers"], "Best for Terrace Garden"),
  p("Sakata Watermelon Seeds Sugar Baby Hybrid", "Sakata", 780, 1060, 4.2, 162, "50 gm", "🍉", ["seeds", "fruit-seeds", "sakata"]),
  p("Iris Hybrid Maize / Corn Seeds", "Iris Hybrid", 420, 590, 4.1, 143, "4 kg", "🌽", ["seeds", "field-crops", "maize-corn", "iris-hybrid"]),
  p("Mustard Hybrid Seeds High Oil Content", "Ashoka", 310, 470, 4.0, 88, "1 kg", "🟡", ["seeds", "field-crops", "mustard", "ashoka"]),

  // ---------- Sprayers & equipment ----------
  p("TAPAS PAHALWAAN 202 Double Motor Battery Sprayer", "Tapas", 3250, 6499, 4.2, 112, "12x8", "🎒", ["equipments", "sprayers", "implements", "tapas", "offers"]),
  p("NEPTUNE NF 02 Knapsack Hand Operated Garden Sprayer", "Snap Export", 1550, 1999, 4.3, 8, "16 ltr", "🧯", ["equipments", "sprayers", "implements", "snap-export-private-limited"]),
  p("LION CENTURY 12x10 Single Motor Battery Sprayer", "Keetnashak Dawakhana", 3100, 4200, 4.4, 46, "12x10", "🎒", ["equipments", "sprayers", "implements"]),
  p("PAD Corp Double Shark 12V x 14A Double Motor Sprayer", "Pad Corp", 4899, 9000, 4.6, 4, "12x14", "🧰", ["equipments", "sprayers", "implements"]),
  p("LION CENTURY 2-in-1 Battery Sprayer (12x10)", "Keetnashak Dawakhana", 3200, 4200, 4.3, 21, "12x10", "🎒", ["equipments", "sprayers", "implements"]),
  p("Tata Agrico Brush Cutter 4-Stroke 43CC", "Tata Agrico", 12499, 17999, 4.4, 63, "43 CC", "🪚", ["equipments", "brush-cutter", "implements", "tata-agrico"]),
  p("Mitva Power Weeder / Tiller 7 HP", "Mitva", 38999, 52000, 4.3, 27, "7 HP", "🚜", ["equipments", "weeder-tiller", "implements", "mitva"]),
  p("Sickle Innovations Fruit Harvester with Pole", "Sickle Innovations", 899, 1400, 4.2, 91, "8 ft", "🍈", ["equipments", "fruit-harvester-plucker", "agriculture-tools", "sickle-innovations-pvt-ltd"]),
  p("Mipatex Tarpaulin Sheet 200 GSM Waterproof", "Mipatex", 1290, 1899, 4.4, 318, "15x18 ft", "🟦", ["equipments", "tirpal-tarpaulin", "accessories", "mipatex"]),
  p("Mipatex Green Shade Net 75% UV Stabilized", "Mipatex", 1690, 2400, 4.5, 244, "3x50 m", "🕸️", ["equipments", "shade-net", "accessories", "mipatex"]),
  p("Niyo Farmtech Drip Irrigation Kit for 1 Acre", "Niyo Farmtech", 15999, 21000, 4.3, 42, "1 acre", "💧", ["equipments", "irrigation", "drip-kit", "niyo-farmtech-private-limited"]),
  p("Sprinkler Irrigation Kit with 20 Sprinklers", "Snap Export", 6499, 8900, 4.1, 36, "20 units", "⛲", ["equipments", "irrigation", "sprinkler", "snap-export-private-limited"]),
  p("Farmer Safety Spray Kit (Suit, Mask, Goggles)", "Tapas", 749, 1200, 4.2, 205, "Free size", "🥼", ["equipments", "safety-kit", "accessories", "tapas"]),
  p("Mulching Sheet 25 Micron Silver Black", "Mipatex", 2190, 2999, 4.4, 187, "400 m", "⬛", ["equipments", "mulch", "accessories", "mipatex"]),

  // ---------- Animal husbandry ----------
  p("Animal Pregnancy Test Kit for Cattle", "Prompt Equipments", 1499, 2200, 4.1, 58, "5 tests", "🐄", ["animal-husbandry", "cattle", "cattle-supplements", "offers"], "New Launch"),
  p("Meenakshi Agro Cattle Feed Pellets (High Protein)", "Meenakshi Agro", 1180, 1500, 4.3, 142, "50 kg", "🌽", ["animal-husbandry", "cattle", "cattle-feed", "meenakshi-agro"]),
  p("Ecowealth Single Bucket Milking Machine", "Ecowealth", 27999, 39999, 4.4, 33, "1 bucket", "🥛", ["animal-husbandry", "cattle", "milking-machine", "ecowealth"]),
  p("Godhan Silage Culture for Fodder Preservation", "Godhan", 420, 640, 4.2, 76, "500 gm", "🧫", ["animal-husbandry", "silage-culture", "others", "godhan"]),
  p("Shivam Pharma Poultry Growth Supplement", "Shivam Pharma", 640, 890, 4.1, 64, "1 kg", "🐔", ["animal-husbandry", "poultry", "poultry-supplements", "shivam-pharma"]),
  p("Calf Feeding Bottle with Nipple 2 Ltr", "Agrigators", 349, 520, 4.0, 41, "2 ltr", "🍼", ["animal-husbandry", "cattle", "calf-feeding-bottle"]),
];

export const brands = Array.from(new Set(products.map((x) => x.brand))).sort();

/** Category registry built from the navigation tree, so every menu link resolves. */
export type CategoryDef = { slug: string; name: string; parent?: string | undefined; description: string };

const registry = new Map<string, CategoryDef>();

const add = (name: string, parent?: string) => {
  const slug = slugify(name);
  if (!registry.has(slug)) {
    const pretty = name
      .toLowerCase()
      .replace(/\b\w/g, (m) => m.toUpperCase());
    registry.set(slug, {
      slug,
      name: pretty,
      parent,
      description: `Buy genuine ${pretty} online at Kisaan Seva — best prices, trusted brands and fast delivery to your farm.`,
    });
  }
};

for (const entry of navEntries) {
  add(entry.label);
  for (const section of entry.sections ?? []) {
    for (const item of section.items) add(item.label, slugify(entry.label));
  }
}
add("Offers");
add("Urban Gardening");

export const categories = Array.from(registry.values());

export const getCategory = (slug: string) => registry.get(slug);

export function productsForCategory(slug: string): Product[] {
  const direct = products.filter((x) => x.tags.includes(slug));
  if (direct.length) return direct;
  const def = registry.get(slug);
  if (def?.parent) return products.filter((x) => x.tags.includes(def.parent!));
  return products;
}

export const mainCategories = categories.filter((c) => !c.parent);

export function searchCatalog(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return { products: [] as Product[], categories: [] as CategoryDef[] };
  return {
    products: products
      .filter((x) => `${x.name} ${x.brand} ${x.tags.join(" ")}`.toLowerCase().includes(q))
      .slice(0, 30),
    categories: categories.filter((c) => c.name.toLowerCase().includes(q)).slice(0, 6),
  };
}
