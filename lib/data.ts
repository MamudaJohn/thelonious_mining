export type Service = {
  slug: string;
  depth: string;
  title: string;
  tags: string[];
  shortdesc: string;
  lede: string;
  capability: { title: string; paragraph: string }[];
  audience: { title: string; paragraph: string }[];
  faq: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "exploration-scouting",
    depth: "01 / SURFACE",
    title: "Exploration & Site Scouting",
    tags: ["Investors", "Landowners"],
    shortdesc:
      "Geological screening and yield modelling before a shovel goes in.",
    lede: "Exploration is where every project either earns its next step or gets ruled out cheaply. We screen terrain, sample it, and model its commercial yield so your decision to proceed is based on evidence, not hope.",
    capability: [
      { title: "Desk research & terrain mapping", paragraph: "Geological survey data, historical records and satellite terrain analysis narrow the search before a single field visit." },
      { title: "Field sampling", paragraph: "Physical soil and rock sampling at candidate sites, sent to independent labs for assay." },
      { title: "Yield modelling", paragraph: "Sample results are modelled against extraction cost to estimate realistic commercial viability, not just presence of mineral." },
      { title: "Legal & title check", paragraph: "We verify land title and any existing claims before recommending a site move to feasibility." },
    ],
    audience: [
      { title: "Investors", paragraph: "You have capital and want an independent read on whether a piece of land is worth pursuing before you commit." },
      { title: "Landowners", paragraph: "You hold land you suspect has mineral value and want a professional assessment before approaching buyers or partners." },
      { title: "Early-stage funds", paragraph: "You're building a portfolio of prospects and need consistent, comparable screening across multiple sites." },
    ],
    faq: [
      { q: "How long does a screening take?", a: "Desk research and an initial field visit typically take two to four weeks, depending on site accessibility. Full sampling and lab turnaround can extend this to six to eight weeks." },
      { q: "What if the site turns out not to be viable?", a: "You still receive the full report — a negative result is a result. It's far cheaper to learn this before licensing and equipment costs than after." },
    ],
  },
  {
    slug: "mining-storage",
    depth: "02 / OPERATIONS",
    title: "Active Mining & Mineral Storage",
    tags: ["Buyers", "Traders"],
    shortdesc:
      "Extraction and secure custody, with full chain-of-custody from pit to vault.",
    lede: "We mine under license and move material into insured, access-logged storage — with independent assay verification before anything is recorded as yours.",
    capability: [
      { title: "Licensed extraction", paragraph: "Mining under permit, following the safety and environmental terms of the site's specific license." },
      { title: "On-site processing", paragraph: "Initial cleaning, sorting and grading of gold, lithium, titanium, aquamarine, tin, copper and limestone as it's extracted." },
      { title: "Independent assay verification", paragraph: "Third-party labs confirm purity and volume before anything enters storage — this figure, not our own, is what goes on your record." },
      { title: "Insured, access-logged storage", paragraph: "Verified material moves into secured storage under a dedicated custody insurance policy, with every access logged against the batch." },
    ],
    audience: [
      { title: "Buyers", paragraph: "You purchase mineral volumes and need verified purity documentation and a clean chain of custody." },
      { title: "Traders", paragraph: "You need a reliable supply partner with consistent assay standards across every batch." },
      { title: "Institutional holders", paragraph: "You need insured, audited custody for mineral assets held as part of a larger portfolio." },
    ],
    faq: [
      { q: "How is stored material insured?", a: "Each batch is covered under a dedicated custody insurance policy specific to its assayed value — it isn't blended into a general company asset policy." },
      { q: "Where exactly is material stored?", a: "We don't publish storage or extraction site locations publicly, for security reasons — this is standard industry practice. Verified clients can review storage security arrangements directly, in person, at our head office." },
    ],
  },
  {
    slug: "partner-site-scouting",
    depth: "03 / PARTNERS",
    title: "Site Scouting for Partner Companies",
    tags: ["Companies seeking concessions"],
    shortdesc: "We locate and prepare government-viable sites on your behalf.",
    lede: "For companies that need a mining site but don't have in-house scouting expertise — we handle identification, feasibility and application support, under your name.",
    capability: [
      { title: "Brief & criteria", paragraph: "We take your mineral target, budget and region constraints and translate them into a search criteria." },
      { title: "Candidate identification", paragraph: "Desk research and field visits shortlist sites matching your criteria and with clean legal standing." },
      { title: "Feasibility assessment", paragraph: "Sampling and yield modelling on shortlisted sites, so you compare options on the same basis before choosing." },
      { title: "Concession application support", paragraph: "We prepare the technical documentation your application needs — under your company's name, with our field data behind it." },
    ],
    audience: [
      { title: "Manufacturers", paragraph: "You need a reliable, owned supply of a specific mineral rather than relying on the open market." },
      { title: "New market entrants", paragraph: "You're entering mining for the first time and need scouting expertise you don't yet have in-house." },
      { title: "Existing operators expanding", paragraph: "You already hold a concession and want to identify a second or third site under the same standard." },
    ],
    faq: [
      { q: "Does the concession end up in our name or yours?", a: "Yours. We act on your behalf throughout — our name appears as the technical partner in supporting documentation, but the license application and resulting concession are your company's." },
      { q: "How long does the process typically take?", a: "From initial brief to a submitted concession application usually runs three to six months, depending on site accessibility and the relevant government body's processing time." },
    ],
  },
  {
    slug: "market-analysis",
    depth: "04 / INTELLIGENCE",
    title: "Market Surveys & Investment Analysis",
    tags: ["Investors", "Boards"],
    shortdesc:
      "Know which deposit is worth mining before capital is committed.",
    lede: "We combine market pricing, demand trends and realistic extraction cost into a single, comparable read — so an investment decision holds up under scrutiny.",
    capability: [
      { title: "Market pricing research", paragraph: "Current and historical pricing for the mineral in question, across relevant regional and global markets." },
      { title: "Demand & extraction-cost modelling", paragraph: "We weigh projected demand against realistic extraction cost for your specific site conditions." },
      { title: "Comparative recommendation", paragraph: "Where you're weighing multiple minerals or sites, we rank them against each other on the same criteria." },
      { title: "Standing quarterly updates", paragraph: "For ongoing clients, we issue updated figures each quarter so your view of the market stays current." },
    ],
    audience: [
      { title: "Investors", paragraph: "You're comparing mineral classes or specific sites and need an independent, comparable read on each." },
      { title: "Boards & finance teams", paragraph: "You need documentation to support a capital allocation decision internally." },
      { title: "Existing operators", paragraph: "You want a periodic outside check on whether current operations still make commercial sense." },
    ],
    faq: [
      { q: "Where does your pricing data come from?", a: "We draw from public market data, industry trade reports, and our own field-level cost data from active sites — combining published figures with real extraction-cost experience." },
      { q: "Can you analyse a mineral you don't currently mine?", a: "Yes. Market analysis is available independently of our mining and storage services." },
    ],
  },
  {
    slug: "operations-management",
    depth: "05 / FIELD OPS",
    title: "Mining Operations Management",
    tags: ["Operating companies"],
    shortdesc:
      "Crew, equipment, safety compliance and output reporting, end to end.",
    lede: "For companies that hold a concession but need it operated to a consistent standard — crew, safety, output tracking and reporting, handled end to end.",
    capability: [
      { title: "Crew & equipment management", paragraph: "Staffing, scheduling and equipment upkeep handled to a consistent operational standard." },
      { title: "Safety & compliance", paragraph: "Site safety protocols and regulatory compliance monitored continuously, not just at audit time." },
      { title: "Output tracking", paragraph: "Extraction volumes and quality logged against the same assay standard used across our own operations." },
      { title: "Standing reporting", paragraph: "Regular reports on output, cost and compliance status, so you retain full visibility without running daily operations yourself." },
    ],
    audience: [
      { title: "New concession holders", paragraph: "You've secured a site but don't yet have an operational team in place to run it." },
      { title: "Remote owners", paragraph: "You hold a concession but are based elsewhere and need day-to-day management handled locally." },
      { title: "Investors post-acquisition", paragraph: "You've acquired a stake in an active site and want professional operational management going forward." },
    ],
    faq: [
      { q: "Do you take over the license itself?", a: "No — the concession and license remain in your company's name. We manage operations under an operating agreement with you." },
      { q: "Can you take over a site that's already running?", a: "Yes. We start with an operational audit of the existing site before transitioning management, so nothing is disrupted mid-handover." },
    ],
  },
];

export type Mineral = {
  slug: string;
  depth : string;
  name: string;
  color: string;
  status: "In production" | "Scouting";
  uses: string;
  ledeparagraph: string;
  FaqQuestion: {eyebrow:string, title: string}[]
  capabilities : {title: string; paragraph: string}[]
};

export const MINERALS: Mineral[] = [
  { 
    slug: "gold",
    depth: "Mineral Profile", 
    name: "Gold", 
    color: "#C9A227", 
    status: "In production", 
    uses: "Reserve asset, jewellery, electronics",
    ledeparagraph: "Gold remains our highest-volume mineral — extracted from alluvial and reef deposits and moved into insured storage under independent assay verification",
    FaqQuestion: [
      {eyebrow:"What purity do you typically deliver?", title:"Purity is confirmed per batch by independent assay — exact figures are shared with buyers alongside the certificate, rather than quoted as a blanket number here."},
      {eyebrow:"Can I buy a specific batch?", title:"Yes, subject to availability. Batches are sold with full assay documentation and chain-of-custody records." }
    ],
    capabilities : [
      {      title: "Extraction method", paragraph: "Alluvial and reef mining, depending on deposit type at each site."},
      {      title: "Purity standard", paragraph: "Independently assayed before storage; certificate available per batch."},
      {      title: "Current status", paragraph: "In active production across our operating concessions."},
    ],

  },
  { 
    slug: "lithium", 
    depth: "Mineral Profile",
    name: "Lithium", 
    color: "#8A8F92", 
    status: "In production", 
    uses: "Battery-grade concentrate" ,
    ledeparagraph: "Extracted from pegmatite ore bodies and processed to battery-grade concentrate — a market we track closely given how quickly demand and pricing shift.",
    FaqQuestion: [
      {eyebrow:"Why is lithium pricing volatile right now?", title:"Battery demand and new supply coming online globally are both moving quickly — see our Market Insights for current-quarter analysis."},
      {eyebrow:"Do you supply direct to battery manufacturers?", title:"Yes, subject to volume and specification requirements — get in touch with your needs."},
    ],
    capabilities : [
      {title: "Extraction method",paragraph: "Hard-rock pegmatite mining, processed on-site to concentrate."},
      {title: "Grade standard",paragraph: "Processed toward battery-grade specification, verified independently."},
      {title: "Current status",paragraph: "In active production; volumes tracked against current market volatility."},
    ]
  },
  { 
    slug: "titanium",
    depth: "Mineral Profile", 
    name: "Titanium", 
    color: "#6E7B85", 
    status: "Scouting", 
    uses: "Aerospace, pigment feedstock",
    ledeparagraph: "Currently in the scouting phase — we're surveying heavy mineral sand deposits and expect to move toward production as current site assessments complete.",
    FaqQuestion: [
      {eyebrow:"When will titanium be available?", title:"We don't commit to a date until survey and feasibility results are confirmed — ask for our current progress update."},
      {eyebrow:"Can I be notified when it moves to production?", title:"Yes — flag your interest via the contact form and we'll follow up directly."},
    ],
    capabilities : [
      {title: "Deposit type",paragraph: "Heavy mineral sand, currently under geological survey."},
      {title: "Current status",paragraph: "Scouting — not yet in production."},
      {title: "Expected timeline",paragraph: "Production status will update as current surveys complete; ask for the latest read."},
    ], 
  },
  { 
    slug: "aquamarine",
    depth: "Mineral Profile", 
    name: "Aquamarine", 
    color: "#5C9384", 
    status: "In production", 
    uses: "Gemstone grade, jewellery",
    ledeparagraph: "Extracted from pegmatite veins and graded to gemstone standard — a smaller-volume, higher-scrutiny operation compared to our industrial minerals.",
    FaqQuestion: [
      {eyebrow:"Do you sell individual stones or by volume?", title:"Both, depending on the buyer — jewellers and gem traders typically work with us differently than industrial buyers of other minerals."},
      {eyebrow:"Is grading independently verified?", title:"Yes, gemstone grading is confirmed by a third-party gemologist before any stone leaves storage."},
    ],
    capabilities : [
      {title: "Extraction method",paragraph: "Pegmatite vein mining, hand-sorted for gem quality."},
      {title: "Grading standard",paragraph: "Independently graded for clarity and colour before storage."},
      {title: "Current status",paragraph: "In active, limited-volume production."},
    ], 
  },
  { 
    slug: "tin", 
    depth: "Mineral Profile",
    name: "Tin", 
    color: "#9A9186", 
    status: "In production", 
    uses: "Solder, electronics alloys",
    ledeparagraph: "Extracted as cassiterite ore and processed for electronics and alloy use — a stable, consistent part of our production alongside copper",
    FaqQuestion: [
      {eyebrow:"What industries buy your tin?", title:"Primarily electronics and alloy manufacturers — solder-grade demand is our largest use case."},
      {eyebrow:"Can you supply on a recurring schedule?", title:"Yes, standing supply arrangements are available for consistent buyers — ask about terms."},
    ],
    capabilities : [
      {title: "Extraction method",paragraph: "Cassiterite ore mining, processed to concentrate on-site."},
      {title: "Purity standard",paragraph: "Assayed and graded before storage, consistent with our other minerals."},
      {title: "Current status",paragraph: "In active, steady production."},
    ],
  },
  { 
    slug: "copper",
    depth: "Mineral Profile", 
    name: "Copper", 
    color: "#B4552D", 
    status: "In production", 
    uses: "Wiring, construction, EVs",
    ledeparagraph: "One of our highest-demand minerals, driven by wiring, construction and EV manufacturing — extracted from sulphide deposits and processed on-site.",
    FaqQuestion: [
      {eyebrow:"", title:""},
      {eyebrow:"", title:""},
    ],
    capabilities : [
      {title: "Extraction method",paragraph: "Sulphide ore mining, processed to concentrate before storage."},
      {title: "Purity standard",paragraph: "Independently assayed per batch, consistent with our custody standard."},
      {title: "Current status",paragraph: "In active production, with demand currently trending high."},
    ],
  },
  { 
    slug: "limestone", 
    depth: "Mineral Profile",
    name: "Limestone", 
    color: "#B7AF9C", 
    status: "In production", 
    uses: "Cement, construction aggregate",
    ledeparagraph: "Quarried from sedimentary bedrock for cement and construction aggregate use — our highest-volume, lowest-complexity extraction.",
    FaqQuestion: [
      {eyebrow:"What volumes are typically available?", title:"Limestone is our highest-volume mineral — ask for current available tonnage."},
      {eyebrow:"Do you supply to construction firms directly?", title:"Yes, both direct supply and standing contracts are available"},
    ],
    capabilities : [
      {title: "Extraction method",paragraph: "Sedimentary bedrock quarrying."},
      {title: "Grade standard",paragraph: "Graded for construction and cement-industry specification."},
      {title: "Current status",paragraph: "In active, high-volume production."},
    ], 
  },
];

export const PROCESS_STEPS = [
  { title: "Scout", heading: "Terrain screening & scouting", paragraph: "Desk research plus field visits to identify land with credible mineral potential and clear legal standing." },
  { title: "Assay", heading: "Survey, sampling & valuation", paragraph: "Geological sampling and market-value analysis determine whether the deposit is commercially worth pursuing." },
  { title: "Extract", heading: "Licensed extraction", paragraph: "Mining begins under permit, with safety, environmental and labour compliance built into every phase." },
  { title: "Store", heading: "Secure storage & custody", paragraph: "Extracted material moves into insured, access-logged storage with a documented chain of custody." },
  { title: "Report", heading: "Reporting & advisory", paragraph: "You receive standing reports on output, market value shifts, and recommendations on next moves." },
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
  { name: "Mineral", trend: "TREND (90D)", demand : "DEMAND", pct : "", signal : "SIGNAL STRENGTH"},
  { name: "Gold", trend: "up" as const, pct: "+4.2%", demand: "High", signal: 86 },
  { name: "Lithium", trend: "down" as const, pct: "-2.1%", demand: "Volatile", signal: 58 },
  { name: "Copper", trend: "up" as const, pct: "+1.8%", demand: "High", signal: 74 },
  { name: "Titanium", trend: "up" as const, pct: "+3.0%", demand: "Rising", signal: 60 },
  { name: "Tin", trend: "down" as const, pct: "+0.6%", demand: "Steady", signal: 80 },

];


export const CONTACT_TYPES = [
  {
    title : "Investors",
    paragraph: "Request our current market report and a feasibility read on a mineral or region you are watching.",
    link : "contact",
    linkText : "Request market report →"
  },
  {
    title : "Companies seeking a site",
    paragraph: "We'll scout, assess and carry a concession through to government-ready feasibility on your behalf.",
    link : "contact",
    linkText : "Start a site request →"
  },
  {
    title : "Existing operators",
    paragraph: "Hand us day-to-day running of your active site — crew, compliance, output reporting.",
    link : "contact",
    linkText : "Discuss operations support →"
  },
]

export type step = {title:string, paragraph:string}[]

export const STEP1 : step = [
  {title:"Investor", paragraph:"Request our current market report and a feasibility read on a mineral or region you're watching"},
  {title:"Company seeking a site", paragraph:"We'll scout, assess and carry a concession through to government-ready feasibility on your behalf."},
  {title:"Existing operator", paragraph:"Hand us day-to-day running of your active site — crew, compliance, output reporting."},

]

export type address = {
  h1:string,
  title: string,
  paragraph: string
}[]

export const contactaddress : address = [
 {h1:"CALL", title:"09015581406",paragraph:"Mon – Fri, 9:00 – 17:00 WAT"},
 {h1:"EMAIL", title:"mining@theloniousglobal.com",paragraph:"We reply within one business day"},
 {h1:"VISIT", title:"82, Mobolaji Bank Anthony Way, Ikeja, Lagos",paragraph:"No appointment required during business hours"},
]

