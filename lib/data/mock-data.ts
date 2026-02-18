export const dashboardStats = {
  topPriorities: [
    "Launch Meta retargeting refresh",
    "Finalize high-intent webinar funnel",
    "Publish LinkedIn case study"
  ],
  activeCampaigns: 6,
  adSpendToday: 18420,
  leadsGeneratedToday: 42,
  revenueThisMonth: 412000,
  followUpsDueToday: 18,
  contentScheduledToday: 5
};

export const campaigns = [
  {
    id: "cmp_1",
    name: "Q1 Lead Accelerator",
    platform: "Meta",
    objective: "Lead Generation",
    budget: 250000,
    funnelStage: "MOFU",
    spend: 156700,
    impressions: 1700000,
    ctr: 2.9,
    cpc: 28,
    leads: 214,
    roas: 4.3
  },
  {
    id: "cmp_2",
    name: "Search Intent Capture",
    platform: "Google",
    objective: "Conversions",
    budget: 180000,
    funnelStage: "BOFU",
    spend: 90400,
    impressions: 760000,
    ctr: 4.2,
    cpc: 38,
    leads: 131,
    roas: 5.1
  }
];

export const analyticsTrend = [
  { month: "Jan", roas: 2.4, cpl: 720, revenue: 180000 },
  { month: "Feb", roas: 3.1, cpl: 650, revenue: 230000 },
  { month: "Mar", roas: 3.6, cpl: 610, revenue: 286000 },
  { month: "Apr", roas: 4.4, cpl: 560, revenue: 337000 },
  { month: "May", roas: 4.8, cpl: 530, revenue: 402000 }
];

export const leadsPipeline = {
  Cold: 19,
  Warm: 13,
  Hot: 8,
  "Site Visit": 5,
  Closed: 11,
  Lost: 4
};

export const ideas = [
  {
    id: "idea_1",
    title: "Create hook bank from top performing ads",
    notes: "Mine winning intros from CTR > 3% campaigns.",
    tags: ["content", "creative"],
    priority: "High",
    status: "Open",
    linkedCampaign: "Q1 Lead Accelerator"
  }
];
