export type Category = { name: string; emoji: string; tint: string };

export const categories: Category[] = [
  { name: "Offers", emoji: "🏷️", tint: "bg-lime-200" },
  { name: "Urban Gardening", emoji: "🪴", tint: "bg-sky-200" },
  { name: "Sprayers", emoji: "🎒", tint: "bg-amber-200" },
  { name: "Insecticides", emoji: "🧪", tint: "bg-cyan-200" },
  { name: "Herbicides", emoji: "🧴", tint: "bg-orange-200" },
  { name: "Nutrients", emoji: "🌾", tint: "bg-pink-200" },
  { name: "Fungicides", emoji: "🍄", tint: "bg-sky-300" },
  { name: "Vegetable & Fruit Seeds", emoji: "🥦", tint: "bg-yellow-200" },
  { name: "Growth Promoters", emoji: "🌱", tint: "bg-purple-200" },
  { name: "Farm Machinery", emoji: "🚜", tint: "bg-green-200" },
  { name: "Flower Seeds", emoji: "🌻", tint: "bg-rose-200" },
  { name: "Animal Husbandry", emoji: "🐄", tint: "bg-orange-300" },
];

export type TopPick = { rank: number; tag: string; name: string; emoji: string };

export const topPicks: TopPick[] = [
  { rank: 1, tag: "More Branching", name: "TAPAS VitaInject Plant Growth Regulator", emoji: "💉" },
  { rank: 2, tag: "Stronger Roots", name: "Tapas HumiQ – Humic Acid, Fulvic Acid", emoji: "🧷" },
  { rank: 3, tag: "Pest Control", name: "Coragen Insecticide – Chlorantraniliprole", emoji: "🧴" },
  { rank: 4, tag: "Growth Booster", name: "Biovita Liquid Biofertilizer (Seaweed)", emoji: "🌿" },
  { rank: 5, tag: "High Yield", name: "Yashaswaini Chilli Seeds for High Yield", emoji: "🌶️" },
  { rank: 6, tag: "Weed Control", name: "Sumitomo Glycel Herbicide – Glyphosate", emoji: "🧪" },
  { rank: 7, tag: "Viral Defense", name: "Solomon Insecticide by Bayer", emoji: "🧫" },
];

export const crops = [
  { name: "Green Chilli", emoji: "🌶️" },
  { name: "Tomato", emoji: "🍅" },
  { name: "Brinjal", emoji: "🍆" },
  { name: "Cotton", emoji: "🌼" },
  { name: "Beans", emoji: "🫘" },
  { name: "Paddy", emoji: "🌾" },
  { name: "Bitter gourd", emoji: "🥒" },
  { name: "Okra", emoji: "🌿" },
];

export const pests = [
  { name: "Leaf Miner", emoji: "🍃" },
  { name: "Aphids", emoji: "🐛" },
  { name: "Whiteflies", emoji: "🦟" },
  { name: "Two spotted mites", emoji: "🕷️" },
  { name: "Thrips", emoji: "🐜" },
  { name: "Bangamia mites, White mites, Broad mites", emoji: "🪲" },
  { name: "Leaf hoppers (Plant hoppers)", emoji: "🦗" },
];

export type Product = {
  name: string;
  brand: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  size: string;
  emoji: string;
  badge?: string;
};

export const bestSelling: Product[] = [
  { name: "TAPAS VitaInject Plant Growth Regulator - Fruit & Flowering", brand: "Tapas", price: 479, mrp: 700, rating: 4.2, reviews: 1483, size: "10 ml", emoji: "💉", badge: "High Demand Limited Stock" },
  { name: "Tapas HumiQ – Humic Acid, Fulvic Acid & Potassium -100%", brand: "Tapas", price: 479, mrp: 1299, rating: 4.2, reviews: 256, size: "1 kg", emoji: "🧷" },
  { name: "Tapas VAM SP Highly Concentrated Biofertilizer", brand: "Tapas", price: 399, mrp: 1100, rating: 4.1, reviews: 193, size: "100 gm", emoji: "🌱" },
  { name: "Saaho (TO-3251) Tomato Seeds | High Yield Hybrid", brand: "Syngenta", price: 1099, mrp: 1617, rating: 4.3, reviews: 350, size: "10 gm", emoji: "🍅" },
  { name: "Katyayani Activated Humic Acid and Fulvic Acid 98%", brand: "Katyayani Krishi Seva Kendra", price: 739, mrp: 1880, rating: 4.3, reviews: 877, size: "500 gm", emoji: "🧪" },
];

export const trending: Product[] = [
  ...bestSelling.slice(0, 3),
  { name: "Janatha Amino Pro – Marine Based Amino Acid Growth", brand: "Janatha Agro Products", price: 770, mrp: 950, rating: 4.4, reviews: 13, size: "1 ltr", emoji: "🧴" },
  { name: "Coragen Insecticide – Chlorantraniliprole 18.5% SC", brand: "FMC", price: 147, mrp: 220, rating: 4.2, reviews: 853, size: "10 ml", emoji: "🧫" },
  { name: "Biovita Liquid Biofertilizer (Seaweed Extract)", brand: "PI Industries", price: 315, mrp: 350, rating: 4.3, reviews: 1231, size: "500 ml", emoji: "🌿" },
  { name: "Bayer Roundup Herbicide (Glyphosate 41% SL)", brand: "Bayer", price: 490, mrp: 700, rating: 4.2, reviews: 959, size: "1 ltr", emoji: "🥫" },
  { name: "Solomon Insecticide by Bayer (Beta-Cyfluthrin 8.49%)", brand: "Bayer", price: 348, mrp: 450, rating: 4.2, reviews: 435, size: "100 ml", emoji: "🧴" },
  { name: "Katyayani Anti Virus Organic Viricide for Viral Disease", brand: "Katyayani Krishi Seva Kendra", price: 413, mrp: 741, rating: 4.2, reviews: 118, size: "250 ml", emoji: "🧬" },
  { name: "Sumitomo Glycel Herbicide – Glyphosate 41% SL IPA Salt", brand: "Sumitomo", price: 359, mrp: 494, rating: 4.3, reviews: 866, size: "1 ltr", emoji: "🧪" },
];

export const sprayers: Product[] = [
  { name: "TAPAS PAHALWAAN 202-DOUBLE MOTOR BATTERY Sprayer", brand: "Tapas", price: 3250, mrp: 6499, rating: 4.2, reviews: 112, size: "12x8", emoji: "🎒" },
  { name: "NEPTUNE NF 02 KNAPSACK HAND OPERATED GARDEN Sprayer", brand: "Snap Export Private Limited", price: 1550, mrp: 1999, rating: 4.3, reviews: 8, size: "16 ltr", emoji: "🧯" },
  { name: "LION CENTURY 12x10 SINGLE MOTOR Sprayers", brand: "Keetnashak Dawakhana", price: 3100, mrp: 4200, rating: 4.4, reviews: 46, size: "12x10", emoji: "🎒" },
  { name: "PAD Corp Double Shark 12 Volts X 14 Ampere Double", brand: "Pad Corp Padgilwar PVT. LTD", price: 4899, mrp: 9000, rating: 4.6, reviews: 4, size: "12x14", emoji: "🧰" },
  { name: "LION CENTURY 2-in-1 Battery (12x10) Sprayers", brand: "Keetnashak Dawakhana", price: 3200, mrp: 4200, rating: 4.3, reviews: 21, size: "12x10", emoji: "🎒" },
];

export const promoBanners = [
  { title: "Conduct cattle pregnancy tests easily with animal pregnancy test kits!", emoji: "🐄", tone: "from-slate-700 to-slate-900" },
  { title: "Seeds that ensure a strong plant and rapid early growth!", emoji: "🌾", tone: "from-amber-400 to-orange-500" },
  { title: "Highly efficient range of crop protection solutions!", emoji: "🛡️", tone: "from-sky-500 to-blue-700" },
];
