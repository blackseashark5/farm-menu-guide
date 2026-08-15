export type MegaMenuItem = { label: string; href: string };
export type MegaMenuSection = { title: string; items: MegaMenuItem[] };

export const catHref = (slug: string) => `/category/${slug}`;
const c = catHref;

export const brandSections: MegaMenuSection[] = [
  {
    title: "SEEDS",
    items: [
      { label: "SYNGENTA", href: c("syngenta") },
      { label: "NAMDHARI", href: c("namdhari") },
      { label: "SEMINIS", href: c("seminis") },
      { label: "EAST WEST", href: c("east-west") },
      { label: "INDO AMERICAN HYBRID SEEDS", href: c("indo-american-hybrid-seeds") },
      { label: "VNR", href: c("vnr") },
      { label: "NUNHEMS", href: c("nunhems") },
      { label: "SARPAN", href: c("sarpan") },
      { label: "UPL", href: c("upl") },
      { label: "MAHYCO", href: c("mahyco") },
      { label: "KNOWN-YOU", href: c("known-you") },
      { label: "URJA SEEDS", href: c("urja-seeds") },
      { label: "ASHOKA", href: c("ashoka") },
      { label: "ADVANTA", href: c("advanta") },
      { label: "IRIS HYBRID", href: c("iris-hybrid") },
      { label: "SAGAR BIOTECH", href: c("sagar-biotech") },
      { label: "VOKKAL SEEDS PRIVATE LIMITED", href: c("vokkal-seeds-private-limited") },
      { label: "BEJO SHEETAL", href: c("bejo-sheetal") },
      { label: "FARMSON BIOTECH", href: c("farmson-biotech") },
      { label: "FITO", href: c("fito") },
      { label: "SAKATA", href: c("sakata") },
      { label: "HYVEG", href: c("hyveg") },
      { label: "INDO US BIOTECH LIMITED", href: c("indo-us-biotech-limited") },
    ],
  },
  {
    title: "CROP PROTECTION",
    items: [
      { label: "BAYER", href: c("bayer") },
      { label: "SYNGENTA", href: c("syngenta") },
      { label: "BASF", href: c("basf") },
      { label: "FMC", href: c("fmc") },
      { label: "RALLIS", href: c("rallis") },
      { label: "TAPAS", href: c("tapas") },
      { label: "DHANUKA", href: c("dhanuka") },
      { label: "CRYSTAL CROP PROTECTION", href: c("crystal-crop-protection") },
      { label: "UPL", href: c("upl") },
      { label: "CORTEVA", href: c("corteva") },
      { label: "INDOFIL", href: c("indofil") },
      { label: "SUMITOMO", href: c("sumitomo") },
      { label: "PI INDUSTRIES", href: c("pi-industries") },
      { label: "ADAMA", href: c("adama") },
      { label: "BARRIX", href: c("barrix") },
      { label: "IFFCO", href: c("iffco") },
      { label: "AIMCO", href: c("aimco") },
      { label: "BACF", href: c("bacf") },
      { label: "UAL", href: c("ual") },
      { label: "KAY BEE", href: c("kay-bee") },
      { label: "KAN BIOSYS", href: c("kan-biosys") },
      { label: "ESSENTIAL BIOSCIENCES", href: c("essential-biosciences") },
    ],
  },
  {
    title: "CROP NUTRITION",
    items: [
      { label: "MULTIPLEX", href: c("multiplex") },
      { label: "HIFIELD", href: c("hifield") },
      { label: "SEA6 ENERGY", href: c("sea6-energy") },
      { label: "HUMATE INDIA", href: c("humate-india") },
      { label: "MICROBI AGROTECH", href: c("microbi-agrotech") },
      { label: "GEOLIFE", href: c("geolife") },
      { label: "TAPAS", href: c("tapas") },
      { label: "OTLA", href: c("otla") },
      { label: "VEDGNA", href: c("vedgna") },
      { label: "AMRUTH ORGANIC", href: c("amruth-organic") },
      { label: "SHAMROCK", href: c("shamrock") },
      { label: "ANAND AGRO CARE", href: c("anand-agro-care") },
      { label: "VANPROZ", href: c("vanproz") },
      { label: "AGRIPLEX", href: c("agriplex") },
      { label: "T STANES", href: c("t-stanes") },
      { label: "RALLIS", href: c("rallis") },
      { label: "BIOPRIME", href: c("bioprime") },
      { label: "INFINITE BIOTECH", href: c("infinite-biotech") },
      { label: "BHUMI AGRO INDUSTRIES", href: c("bhumi-agro-industries") },
      { label: "Jaipur Bio Fertilizers", href: c("jaipur-bio-fertilizers") },
      { label: "AIMCO", href: c("aimco") },
    ],
  },
  {
    title: "IMPLEMENTS",
    items: [
      { label: "SNAP EXPORT PRIVATE LIMITED", href: c("snap-export-private-limited") },
      { label: "NIYO FARMTECH PRIVATE LIMITED", href: c("niyo-farmtech-private-limited") },
      { label: "TAPAS", href: c("tapas") },
      { label: "MITVA", href: c("mitva") },
      { label: "MIPATEX", href: c("mipatex") },
      { label: "SICKLE INNOVATIONS PVT LTD", href: c("sickle-innovations-pvt-ltd") },
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
      { label: "Janatha Agro Products", href: c("janatha-agro-products") },
      { label: "NAMDHARI", href: c("namdhari") },
      { label: "GEOLIFE", href: c("geolife") },
      { label: "BASF", href: c("basf") },
      { label: "TAPAS", href: c("tapas") },
      { label: "VNR", href: c("vnr") },
      { label: "VANPROZ", href: c("vanproz") },
      { label: "SARPAN", href: c("sarpan") },
      { label: "UAL", href: c("ual") },
      { label: "KAN BIOSYS", href: c("kan-biosys") },
      { label: "KATYAYANI ORGANICS", href: c("katyayani-organics") },
    ],
  },
];

export const seedSections: MegaMenuSection[] = [
  {
    title: "HORTICULTURE CROPS",
    items: [
      { label: "VEGETABLES SEEDS", href: c("vegetables-seeds") },
      { label: "FRUIT SEEDS", href: c("fruit-seeds") },
      { label: "FLOWER SEEDS", href: c("flower-seeds") },
    ],
  },
  {
    title: "FIELD CROPS",
    items: [
      { label: "FORAGES", href: c("forages") },
      { label: "MAIZE/CORN", href: c("maize-corn") },
      { label: "PADDY", href: c("paddy") },
      { label: "MUSTARD", href: c("mustard") },
      { label: "JOWAR", href: c("jowar") },
      { label: "COTTON", href: c("cotton") },
    ],
  },
  {
    title: "SPECIAL CATEGORY",
    items: [
      { label: "POLYHOUSE", href: c("polyhouse") },
      { label: "EXOTICS", href: c("exotics") },
      { label: "FORESTRY", href: c("forestry") },
      { label: "URBAN GARDEN", href: c("urban-garden") },
      { label: "SAPLINGS", href: c("saplings") },
    ],
  },
  {
    title: "POPULAR PRODUCTS",
    items: [
      { label: "TOMATO", href: c("tomato") },
      { label: "CHILLI", href: c("chilli") },
      { label: "BRINJAL", href: c("brinjal") },
      { label: "CUCUMBER", href: c("cucumber") },
      { label: "CAULIFLOWER", href: c("cauliflower") },
    ],
  },
];

export const nutritionSections: MegaMenuSection[] = [
  {
    title: "FERTILIZERS",
    items: [
      { label: "CHEMICAL FERTILIZERS", href: c("chemical-fertilizers") },
      { label: "BIO/ORGANIC FERTILIZERS", href: c("bio-organic-fertilizers") },
      { label: "MICRO NUTRIENTS", href: c("micro-nutrients") },
      { label: "HUMIC ACIDS", href: c("humic-acids") },
      { label: "pH BALANCERS", href: c("ph-balancers") },
    ],
  },
  {
    title: "GROWTH PROMOTERS",
    items: [
      { label: "PLANT GROWTH PROMOTERS", href: c("plant-growth-promoters") },
      { label: "PLANT ENHANCERS", href: c("plant-enhancers") },
      { label: "BIO STIMULANTS/ACTIVATORS", href: c("bio-stimulants-activators") },
    ],
  },
  {
    title: "PLANT GROWTH REGULATORS",
    items: [
      { label: "YIELD BOOSTERS", href: c("yield-boosters") },
      { label: "FRUIT ENHANCERS", href: c("fruit-enhancers") },
      { label: "FLOWER BOOSTERS", href: c("flower-boosters") },
    ],
  },
  {
    title: "POPULAR",
    items: [
      { label: "NPK FERTILIZERS", href: c("npk-fertilizers") },
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
      { label: "SPRAYERS", href: c("sprayers") },
      { label: "BRUSH CUTTER", href: c("brush-cutter") },
      { label: "WEEDER/TILLER", href: c("weeder-tiller") },
      { label: "CHAFF CUTTER AND PARTS", href: c("chaff-cutter-and-parts") },
      { label: "SOLAR DRYER", href: c("solar-dryer") },
      { label: "RICE MILL", href: c("rice-mill") },
      { label: "EARTH AUGERS", href: c("earth-augers") },
      { label: "POWER REAPER", href: c("power-reaper") },
      { label: "CHAIN SAW", href: c("chain-saw") },
      { label: "SUGARCANE MACHINE", href: c("sugarcane-machine") },
    ],
  },
  {
    title: "AGRICULTURE TOOLS",
    items: [
      { label: "NURSERY INPUTS", href: c("nursery-inputs") },
      { label: "FRUIT HARVESTER/ PLUCKER", href: c("fruit-harvester-plucker") },
      { label: "GARDEN TOOLS", href: c("garden-tools") },
      { label: "SEEDER/ TRANSPLANTER", href: c("seeder-transplanter") },
    ],
  },
  {
    title: "ACCESSORIES",
    items: [
      { label: "TIRPAL/ TARPAULIN", href: c("tirpal-tarpaulin") },
      { label: "MULCH", href: c("mulch") },
      { label: "SHADE NET", href: c("shade-net") },
      { label: "TRAPS AND LURE", href: c("traps-and-lure") },
      { label: "SAFETY KIT", href: c("safety-kit") },
      { label: "TORCH/ LANTERN", href: c("torch-lantern") },
      { label: "CROP COVER", href: c("crop-cover") },
    ],
  },
  {
    title: "IRRIGATION",
    items: [
      { label: "PIPE", href: c("pipe") },
      { label: "WATER PUMP", href: c("water-pump") },
      { label: "SPRINKLER", href: c("sprinkler") },
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
      { label: "MILKING MACHINE", href: c("milking-machine") },
      { label: "MILKING MACHINE ACCESSORIES", href: c("milking-machine-accessories") },
      { label: "CALF FEEDING BOTTLE", href: c("calf-feeding-bottle") },
    ],
  },
  {
    title: "POULTRY",
    items: [
      { label: "POULTRY SUPPLEMENTS", href: c("poultry-supplements") },
      { label: "POULTRY EQUIPMENT", href: c("poultry-equipment") },
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
      { label: "MEENAKSHI AGRO", href: c("meenakshi-agro") },
      { label: "ECOWEALTH", href: c("ecowealth") },
      { label: "GODHAN", href: c("godhan") },
      { label: "PROMPT EQUIPMENTS PRIVATE LIMITED", href: c("prompt-equipments-private-limited") },
      { label: "AGRIGATORS ENTERPRISES PRIVATE LIMITED", href: c("agrigators-enterprises-private-limited") },
      { label: "SHIVAM PHARMA", href: c("shivam-pharma") },
    ],
  },
];

export const organicSections: MegaMenuSection[] = [
  {
    title: "BIO/ORGANIC PESTICIDES",
    items: [
      { label: "BIO INSECTICIDES", href: c("bio-insecticides") },
      { label: "BIO FUNGICIDES", href: c("bio-fungicides") },
      { label: "BIO VIRICIDES", href: c("bio-viricides") },
      { label: "BIO NEMATICIDES", href: c("bio-nematicides") },
      { label: "BIO MITICIDES/ACARICIDES", href: c("bio-miticides-acaricides") },
    ],
  },
  {
    title: "CROP NUTRITION",
    items: [
      { label: "BIO/ORGANIC FERTILIZERS", href: c("bio-organic-fertilizers") },
      { label: "BIO STIMULANTS/ACTIVATORS", href: c("bio-stimulants-activators") },
    ],
  },
];

export type NavEntry = {
  label: string;
  href: string;
  sections?: MegaMenuSection[];
};

export const navEntries: NavEntry[] = [
  { label: "BRANDS", href: "/category/brands", sections: brandSections },
  { label: "SEEDS", href: "/category/seeds", sections: seedSections },
  { label: "CROP PROTECTION", href: "/category/crop-protection", sections: brandSections.slice(1, 2) },
  { label: "CROP NUTRITION", href: "/category/crop-nutrition", sections: nutritionSections },
  { label: "EQUIPMENTS", href: "/category/equipments", sections: equipmentSections },
  { label: "ANIMAL HUSBANDRY", href: "/category/animal-husbandry", sections: husbandrySections },
  { label: "ORGANIC", href: "/category/organic", sections: organicSections },
  { label: "TAPAS", href: c("tapas") },
  { label: "SERVICES", href: "/category/services" },
  { label: "VEDIKA", href: "/category/vedika" },
  { label: "BLOGS", href: "/category/blogs" },
];
