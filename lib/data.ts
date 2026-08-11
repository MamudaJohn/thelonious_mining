export type Service = {
  slug: string;
  depth: string;
  title: string;
  tags: string[];
  shortDesc: string;
};

export const SERVICES: Service[] = [
  {
    slug: "exploration-scouting",
    depth: "01 / SURFACE",
    title: "Exploration & Site Scouting",
    tags: ["Investors", "Landowners"],
    shortDesc:
      "Geological screening and yield modelling before a shovel goes in.",
  },
  {
    slug: "mining-storage",
    depth: "02 / OPERATIONS",
    title: "Active Mining & Mineral Storage",
    tags: ["Buyers", "Traders"],
    shortDesc:
      "Extraction and secure custody, with full chain-of-custody from pit to vault.",
  },
  {
    slug: "partner-site-scouting",
    depth: "03 / PARTNERS",
    title: "Site Scouting for Partner Companies",
    tags: ["Companies seeking concessions"],
    shortDesc: "We locate and prepare government-viable sites on your behalf.",
  },
  {
    slug: "market-analysis",
    depth: "04 / INTELLIGENCE",
    title: "Market Surveys & Investment Analysis",
    tags: ["Investors", "Boards"],
    shortDesc:
      "Know which deposit is worth mining before capital is committed.",
  },
  {
    slug: "operations-management",
    depth: "05 / FIELD OPS",
    title: "Mining Operations Management",
    tags: ["Operating companies"],
    shortDesc:
      "Crew, equipment, safety compliance and output reporting, end to end.",
  },
];

export type Mineral = {
  slug: string;
  name: string;
  color: string;
  status: "In production" | "Scouting";
  uses: string;
};

export const MINERALS: Mineral[] = [
  { slug: "gold", name: "Gold", color: "#C9A227", status: "In production", uses: "Reserve asset, jewellery, electronics" },
  { slug: "lithium", name: "Lithium", color: "#8A8F92", status: "In production", uses: "Battery-grade concentrate" },
  { slug: "titanium", name: "Titanium", color: "#6E7B85", status: "Scouting", uses: "Aerospace, pigment feedstock" },
  { slug: "aquamarine", name: "Aquamarine", color: "#5C9384", status: "In production", uses: "Gemstone grade, jewellery" },
  { slug: "tin", name: "Tin", color: "#9A9186", status: "In production", uses: "Solder, electronics alloys" },
  { slug: "copper", name: "Copper", color: "#B4552D", status: "In production", uses: "Wiring, construction, EVs" },
  { slug: "limestone", name: "Limestone", color: "#B7AF9C", status: "In production", uses: "Cement, construction aggregate" },
];

export const PROCESS_STEPS = [
  { title: "Scout", heading: "Terrain screening & scouting", desc: "Desk research plus field visits to identify land with credible mineral potential and clear legal standing." },
  { title: "Assay", heading: "Survey, sampling & valuation", desc: "Geological sampling and market-value analysis determine whether the deposit is commercially worth pursuing." },
  { title: "Extract", heading: "Licensed extraction", desc: "Mining begins under permit, with safety, environmental and labour compliance built into every phase." },
  { title: "Store", heading: "Secure storage & custody", desc: "Extracted material moves into insured, access-logged storage with a documented chain of custody." },
  { title: "Report", heading: "Reporting & advisory", desc: "You receive standing reports on output, market value shifts, and recommendations on next moves." },
];

export type Article = {
  slug: string;
  cat: string;
  title: string;
  sub: string;
};

export const FEATURED_ARTICLES: Article[] = [
  {
    slug: "mineral-worth-mining-q3",
    cat: "Investment Analysis",
    title: "Which mineral is worth mining this quarter?",
    sub: "Our latest survey weighs extraction cost against current demand across all seven minerals we track.",
  },
  {
    slug: "titanium-sand-survey",
    cat: "Field Report",
    title: "Inside a 40-hectare titanium sand survey",
    sub: "What our scouting team found, and why the site moved to feasibility in under six weeks.",
  },
];

export const MARKET_TICKER = [
  { name: "Gold", trend: "up" as const, pct: "+4.2%", demand: "High", signal: 86 },
  { name: "Lithium", trend: "down" as const, pct: "-2.1%", demand: "Volatile", signal: 58 },
  { name: "Copper", trend: "up" as const, pct: "+1.8%", demand: "High", signal: 74 },
];