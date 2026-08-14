export type MegaMenuItem = { label: string; href: string };
export type MegaMenuSection = { title: string; items: MegaMenuItem[] };

const c = (slug: string) => `https://www.bighaat.com/collections/${slug}`;

export const brandSections: MegaMenuSection[] = [
  {
    title: "SEEDS",
    items: [
      { label: "SYNGENTA", href: c("syngenta-seeds") },
      { label: "NAMDHARI", href: c("namdhari-seeds") },
      { label: "SEMINIS", href: c("seminis") },
      { label: "EAST WEST", href: c("east-west") },
      { label: "INDO AMERICAN HYBRID SEEDS", href: c("indo-american-products") },
      { label: "VNR", href: c("vnr") },
      { label: "NUNHEMS", href: c("nunhems") },
      { label: "SARPAN", href: c("sarpan-seeds") },
      { label: "UPL", href: c("upl-seeds") },
      { label: "MAHYCO", href: c("mahyco") },
      { label: "KNOWN-YOU", href: c("known-you") },
      { label: "URJA SEEDS", href: c("urja-seeds") },
      { label: "ASHOKA", href: c("ashoka-seeds-1") },
      { label: "ADVANTA", href: c("advanta-forage-seeds") },
      { label: "IRIS HYBRID", href: c("iris-hybrid-seeds") },
      { label: "SAGAR BIOTECH", href: c("sagar-bio-tech-private-limited-all-products") },
      { label: "VOKKAL SEEDS PRIVATE LIMITED", href: c("all-products-vokkal-seeds-private-limited") },
      { label: "BEJO SHEETAL", href: c("bejo-sheetal") },
      { label: "FARMSON BIOTECH", href: c("farmson-biotech-products") },
      { label: "FITO", href: c("semilas-fito") },
      { label: "SAKATA", href: c("sakata") },
      { label: "HYVEG", href: c("hyveg-products") },
      { label: "INDO US BIOTECH LIMITED", href: c("best-variety-hybrid-vegetable-seeds-of-indo-us-agriseeds") },
    ],
  },
  {
    title: "CROP PROTECTION",
    items: [
      { label: "BAYER", href: c("bayer") },
      { label: "SYNGENTA", href: c("syngenta-chemicals") },
      { label: "BASF", href: c("all-products-basf") },
      { label: "FMC", href: c("fmc") },
      { label: "RALLIS", href: c("rallis-crop-protection") },
      { label: "TAPAS", href: c("tapas-crop-protection") },
      { label: "DHANUKA", href: c("dhanuka") },
      { label: "CRYSTAL CROP PROTECTION", href: c("crystal-crop-protection") },
      { label: "UPL", href: c("upl-crop-protection") },
      { label: "CORTEVA", href: c("dow") },
      { label: "INDOFIL", href: c("indofil") },
      { label: "SUMITOMO", href: c("sumitomo") },
      { label: "PI INDUSTRIES", href: c("pi-industries") },
      { label: "ADAMA", href: c("adama") },
      { label: "BARRIX", href: c("barrix") },
      { label: "IFFCO", href: c("iffco-crop-protection") },
      { label: "AIMCO", href: c("aimco-pesticides-ltd-all-products") },
      { label: "BACF", href: c("bacf-crop-protection") },
      { label: "UAL", href: c("ual") },
      { label: "KAY BEE", href: c("kaybee-products") },
      { label: "KAN BIOSYS", href: c("kan-biosys-1") },
      { label: "ESSENTIAL BIOSCIENCES", href: c("essential-biosciences-all-products") },
    ],
  },
  {
    title: "CROP NUTRITION",
    items: [
      { label: "MULTIPLEX", href: c("multiplex-plant-nutrition") },
      { label: "HIFIELD", href: c("hifield-crop-nutrition") },
      { label: "SEA6 ENERGY", href: c("sea6-energy-crop-nutrition") },
      { label: "HUMATE INDIA", href: c("humate-india-crop-nutrition") },
      { label: "MICROBI AGROTECH", href: c("microbi-agrotech") },
      { label: "GEOLIFE", href: c("geolife") },
      { label: "TAPAS", href: c("tapas-crop-nutrition") },
      { label: "OTLA", href: c("otlas-crop-nutrition") },
      { label: "VEDGNA", href: c("vedagna-crop-nutrition") },
      { label: "AMRUTH ORGANIC", href: c("amruth-bio-fertilizer") },
      { label: "SHAMROCK", href: c("shamrock") },
      { label: "ANAND AGRO CARE", href: c("anand-agro-care-crop-nutrition") },
      { label: "VANPROZ", href: c("vanproz") },
      { label: "AGRIPLEX", href: c("agriplex-nutrients") },
      { label: "T STANES", href: c("t-stanes-crop-nutrition") },
      { label: "RALLIS", href: c("rallis-crop-nutrition-1") },
      { label: "BIOPRIME", href: c("brand-bioprime") },
      { label: "INFINITE BIOTECH", href: c("infinite-biotech-1") },
      { label: "BHUMI AGRO INDUSTRIES", href: c("bhumi-agro-industries-all-products") },
      { label: "Jaipur Bio Fertilizers", href: c("jaipur-bio-fertilizers-all-products") },
      { label: "AIMCO", href: c("aimco-pesticides-ltd-all-products") },
    ],
  },
  {
    title: "IMPLEMENTS",
    items: [
      { label: "SNAP EXPORT PRIVATE LIMITED", href: c("snap-export") },
      { label: "NIYO FARMTECH PRIVATE LIMITED", href: c("niyo-innovative-solutions") },
      { label: "TAPAS", href: c("tapas-implements-and-accessories") },
      { label: "MITVA", href: c("mitva") },
      { label: "MIPATEX", href: c("mipa-collections") },
      { label: "SICKLE INNOVATIONS PVT LTD", href: c("sickle-innovations") },
      { label: "TATA AGRICO", href: c("tata-agrico") },
      { label: "Modish Tractoraurkisan Pvt Ltd", href: c("modish-tractoraurkisan-pvt-ltd") },
    ],
  },
  {
    title: "MOST POPULAR",
    items: [
      { label: "SYNGENTA", href: c("syngenta") },
      { label: "BAYER", href: c("bayer") },
      { label: "Excel Industries", href: c("excel-industries") },
      { label: "Janatha Agro Products", href: c("janatha-fish-meal-and-oil-products") },
      { label: "NAMDHARI", href: c("namdhari-seeds") },
      { label: "GEOLIFE", href: c("geolife") },
      { label: "BASF", href: c("all-products-basf") },
      { label: "TAPAS", href: c("tapas-products") },
      { label: "VNR", href: c("vnr") },
      { label: "VANPROZ", href: c("vanproz") },
      { label: "SARPAN", href: c("sarpan-seeds") },
      { label: "UAL", href: c("ual") },
      { label: "KAN BIOSYS", href: c("kan-biosys-1") },
      { label: "KATYAYANI ORGANICS", href: c("katyayani-organics-all-products") },
    ],
  },
];

export const seedSections: MegaMenuSection[] = [
  {
    title: "HORTICULTURE CROPS",
    items: [
      { label: "VEGETABLES SEEDS", href: c("vegetables") },
      { label: "FRUIT SEEDS", href: c("fruits") },
      { label: "FLOWER SEEDS", href: c("flower-seeds-online") },
    ],
  },
  {
    title: "FIELD CROPS",
    items: [
      { label: "FORAGES", href: c("forage-seeds") },
      { label: "MAIZE/CORN", href: c("corn-seeds") },
      { label: "PADDY", href: c("paddy-seeds") },
      { label: "MUSTARD", href: c("mustard-seeds") },
      { label: "JOWAR", href: c("jowar-seeds") },
      { label: "COTTON", href: c("buy-cotton-seeds-online") },
    ],
  },
  {
    title: "SPECIAL CATEGORY",
    items: [
      { label: "POLYHOUSE", href: c("polyhouse-seeds") },
      { label: "EXOTICS", href: c("exotic-seeds") },
      { label: "FORESTRY", href: c("pioneer-agro") },
      { label: "URBAN GARDEN", href: c("home-garden") },
      { label: "SAPLINGS", href: c("saplings") },
    ],
  },
  {
    title: "POPULAR PRODUCTS",
    items: [
      { label: "TOMATO", href: c("best-quality-tomato-seeds") },
      { label: "CHILLI", href: c("chilli") },
      { label: "BRINJAL", href: c("brinjalseeds") },
      { label: "CUCUMBER", href: c("best-variety-of-cucumber-seeds") },
      { label: "CAULIFLOWER", href: c("cauliflower_seeds") },
    ],
  },
];

export const nutritionSections: MegaMenuSection[] = [
  {
    title: "FERTILIZERS",
    items: [
      { label: "CHEMICAL FERTILIZERS", href: c("fertilizers") },
      { label: "BIO/ORGANIC FERTILIZERS", href: c("bio-fertilizers") },
      { label: "MICRO NUTRIENTS", href: c("micronutrients") },
      { label: "HUMIC ACIDS", href: c("humic-acid-collection") },
      { label: "pH BALANCERS", href: c("ph-balancer") },
    ],
  },
  {
    title: "GROWTH PROMOTERS",
    items: [
      { label: "PLANT GROWTH PROMOTERS", href: c("growth-promoter") },
      { label: "PLANT ENHANCERS", href: c("growth-enhancer-fruit-enhancer") },
      { label: "BIO STIMULANTS/ACTIVATORS", href: c("bio-stimulant-1") },
    ],
  },
  {
    title: "PLANT GROWTH REGULATORS",
    items: [
      { label: "YIELD BOOSTERS", href: c("yield-booster-flower-booster") },
      { label: "FRUIT ENHANCERS", href: c("fruit-enhancer") },
      { label: "FLOWER BOOSTERS", href: c("flower-booster") },
    ],
  },
  {
    title: "POPULAR",
    items: [
      { label: "NPK FERTILIZERS", href: c("npk") },
      { label: "LIQUID FERTILIZERS", href: c("liquid-fertilizers") },
      { label: "SEAWEED EXTRACTS", href: c("seaweed-extracts") },
      { label: "FERTILIZER ENHANCERS", href: c("fertilizer-enhancers") },
    ],
  },
];

export const equipmentSections: MegaMenuSection[] = [
  {
    title: "IMPLEMENTS",
    items: [
      { label: "SPRAYERS", href: c("best-quality-sprayers") },
      { label: "BRUSH CUTTER", href: c("brush-cutter") },
      { label: "WEEDER/TILLER", href: c("tillers") },
      { label: "CHAFF CUTTER AND PARTS", href: c("best-quality-chaff-cutter") },
      { label: "SOLAR DRYER", href: c("best-quality-solar-dryers") },
      { label: "RICE MILL", href: c("rice-mill") },
      { label: "EARTH AUGERS", href: c("earth-auger") },
      { label: "POWER REAPER", href: c("reaper") },
      { label: "CHAIN SAW", href: c("chain-saw") },
      { label: "SUGARCANE MACHINE", href: c("sugarcane-machine") },
    ],
  },
  {
    title: "AGRICULTURE TOOLS",
    items: [
      { label: "NURSERY INPUTS", href: c("best-quality-nursery-inputs-online") },
      { label: "FRUIT HARVESTER/ PLUCKER", href: c("harvesters") },
      { label: "GARDEN TOOLS", href: c("hand-tools") },
      { label: "SEEDER/ TRANSPLANTER", href: c("seeders-transplanters") },
    ],
  },
  {
    title: "ACCESSORIES",
    items: [
      { label: "TIRPAL/ TARPAULIN", href: c("best-quality-tarpaulins") },
      { label: "MULCH", href: c("mulching-sheet") },
      { label: "SHADE NET", href: c("best-quality-shade-nets") },
      { label: "TRAPS AND LURE", href: c("trap-and-lures") },
      { label: "SAFETY KIT", href: c("farmer-safety-kit") },
      { label: "TORCH/ LANTERN", href: c("torch") },
      { label: "CROP COVER", href: c("crop-cover") },
    ],
  },
  {
    title: "IRRIGATION",
    items: [
      { label: "PIPE", href: c("best-quality-irrigation-kits") },
      { label: "WATER PUMP", href: c("water-pressure-pumps") },
      { label: "SPRINKLER", href: c("sprinkler-kit") },
      { label: "DRIP KIT", href: c("drip-kit") },
    ],
  },
];

export const husbandrySections: MegaMenuSection[] = [
  {
    title: "CATTLE",
    items: [
      { label: "CATTLE FEED", href: c("cattle-feed") },
      { label: "CATTLE SUPPLEMENTS", href: c("cattle-supplements") },
      { label: "MILKING MACHINE", href: c("milking-machine-for-cow-and-bufflow") },
      { label: "MILKING MACHINE ACCESSORIES", href: c("milking-machine-accessories") },
      { label: "CALF FEEDING BOTTLE", href: c("calf-feeding-bottle") },
    ],
  },
  {
    title: "POULTRY",
    items: [
      { label: "POULTRY SUPPLEMENTS", href: c("poultry-supplements") },
      { label: "POULTRY EQUIPMENT", href: c("best-quality-poultry-products") },
    ],
  },
  {
    title: "OTHERS",
    items: [
      { label: "FORAGE SEEDS", href: c("forage-seeds") },
      { label: "SILAGE CULTURE", href: c("silage-culture") },
    ],
  },
  {
    title: "POPULAR BRANDS",
    items: [
      { label: "MEENAKSHI AGRO", href: c("meenakshi-agro-farms") },
      { label: "ECOWEALTH", href: c("ecowealth-dairy-implements") },
      { label: "GODHAN", href: c("brand-godhan") },
      { label: "PROMPT EQUIPMENTS PRIVATE LIMITED", href: c("prompt-equipments-private-limited") },
      { label: "AGRIGATORS ENTERPRISES PRIVATE LIMITED", href: c("agrigators-enterprises-private-limited") },
      { label: "SHIVAM PHARMA", href: c("shivam-pharma-all-products") },
    ],
  },
];

export const organicSections: MegaMenuSection[] = [
  {
    title: "BIO/ORGANIC PESTICIDES",
    items: [
      { label: "BIO INSECTICIDES", href: c("organic-or-bio-insecticides") },
      { label: "BIO FUNGICIDES", href: c("bio-fungicides") },
      { label: "BIO VIRICIDES", href: c("best-quality-bio-viricides") },
      { label: "BIO NEMATICIDES", href: c("best-quality-bio-nematicides") },
      { label: "BIO MITICIDES/ACARICIDES", href: c("bio-acaricide-miticide") },
    ],
  },
  {
    title: "CROP NUTRITION",
    items: [
      { label: "BIO/ORGANIC FERTILIZERS", href: c("bio-fertilizers") },
      { label: "BIO STIMULANTS/ACTIVATORS", href: c("bio-stimulant-1") },
    ],
  },
];

export type NavEntry = {
  label: string;
  href: string;
  sections?: MegaMenuSection[];
};

export const navEntries: NavEntry[] = [
  { label: "BRANDS", href: "#brands", sections: brandSections },
  { label: "SEEDS", href: "#seeds", sections: seedSections },
  { label: "CROP PROTECTION", href: "#crop-protection", sections: brandSections.slice(1, 2) },
  { label: "CROP NUTRITION", href: "#crop-nutrition", sections: nutritionSections },
  { label: "EQUIPMENTS", href: "#equipments", sections: equipmentSections },
  { label: "ANIMAL HUSBANDRY", href: "#animal-husbandry", sections: husbandrySections },
  { label: "ORGANIC", href: "#organic", sections: organicSections },
  { label: "TAPAS", href: "https://www.bighaat.com/collections/tapas-products" },
  { label: "SERVICES", href: "#services" },
  { label: "VEDIKA", href: "#vedika" },
  { label: "BLOGS", href: "#blogs" },
];
