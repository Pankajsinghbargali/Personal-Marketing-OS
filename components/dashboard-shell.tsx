"use client";

import { useMemo, useState } from "react";
import { Plus, Mic, LayoutDashboard, Lightbulb, Megaphone, CalendarDays, Users, BarChart3, Brain, Timer } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

type Tab = "dashboard" | "ideas" | "campaigns" | "content" | "leads" | "analytics" | "growth";

const metrics = [
  { label: "Top Priorities", value: "3", sub: "Finalize ad creative, close 2 hot leads, publish reel" },
  { label: "Ad Spend Today", value: "$428", sub: "↑ 8% vs yesterday" },
  { label: "Leads Today", value: "34", sub: "Warm: 11 | Hot: 5" },
  { label: "Revenue This Month", value: "$18,220", sub: "ROAS 3.6" },
  { label: "Follow-ups Due", value: "7", sub: "4 within next 2 hours" },
  { label: "Content Scheduled", value: "5", sub: "2 reels, 2 carousels, 1 post" }
];

const roasData = [
  { name: "W1", roas: 2.1, cpl: 26 },
  { name: "W2", roas: 2.8, cpl: 24 },
  { name: "W3", roas: 3.5, cpl: 20 },
  { name: "W4", roas: 3.2, cpl: 22 }
];

const pipeline = ["Cold", "Warm", "Hot", "Site Visit", "Closed", "Lost"];

const tabs = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "ideas", label: "Idea Vault", icon: Lightbulb },
  { key: "campaigns", label: "Campaign Manager", icon: Megaphone },
  { key: "content", label: "Content War Room", icon: CalendarDays },
  { key: "leads", label: "Lead Tracker", icon: Users },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "growth", label: "Personal Growth", icon: Brain }
] as const;

export function DashboardShell() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [autoRefresh, setAutoRefresh] = useState(true);

  const panel = useMemo(() => {
    if (activeTab === "dashboard") {
      return (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="card shadow-glow">
              <p className="text-sm text-zinc-400">{metric.label}</p>
              <h3 className="mt-2 text-3xl font-semibold text-gold">{metric.value}</h3>
              <p className="mt-1 text-xs text-zinc-500">{metric.sub}</p>
            </article>
          ))}
        </section>
      );
    }

    if (activeTab === "ideas") {
      return (
        <section className="space-y-4">
          <div className="card">
            <h2 className="text-lg font-medium">Quick Brain Dump</h2>
            <div className="mt-4 flex flex-col gap-3 md:flex-row">
              <input className="w-full rounded-xl border border-zinc-700 bg-black/40 px-4 py-3" placeholder="Capture idea instantly..." />
              <button className="rounded-xl border border-gold/50 px-4 py-3 text-gold"><Mic className="inline h-4 w-4" /> Voice</button>
            </div>
          </div>
          <div className="card">
            <h3 className="mb-3 font-medium">Recent Ideas</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Carousel on ROI myths — tags: content, middle-funnel</li>
              <li>• Webinar retargeting sequence — tags: paid, warm-leads</li>
            </ul>
          </div>
        </section>
      );
    }

    if (activeTab === "campaigns") {
      return (
        <section className="card space-y-3">
          <h2 className="text-lg font-medium">Campaign Snapshot</h2>
          <p className="text-sm text-zinc-400">Platforms: Meta, Google, LinkedIn, YouTube (API-ready mock structure)</p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-700 p-3">Launch Sprint - META - Lead Gen - Budget $1500</div>
            <div className="rounded-xl border border-zinc-700 p-3">Search Intent Capture - GOOGLE - Conversion - Budget $2200</div>
          </div>
        </section>
      );
    }

    if (activeTab === "content") {
      return (
        <section className="card">
          <h2 className="text-lg font-medium">Content War Room</h2>
          <p className="mt-2 text-sm text-zinc-400">Calendar + list planning with hooks, captions, scripts, and performance fields.</p>
          <div className="mt-4 grid gap-2 text-sm md:grid-cols-3">
            <div className="rounded-xl border border-zinc-700 p-3">Draft: 8</div>
            <div className="rounded-xl border border-zinc-700 p-3">Scheduled: 5</div>
            <div className="rounded-xl border border-zinc-700 p-3">Posted: 21</div>
          </div>
        </section>
      );
    }

    if (activeTab === "leads") {
      return (
        <section className="grid gap-4 md:grid-cols-3">
          {pipeline.map((stage) => (
            <article key={stage} className="card min-h-36">
              <h3 className="text-gold">{stage}</h3>
              <p className="mt-2 text-sm text-zinc-400">Kanban stage with WhatsApp-ready follow-up automation hooks.</p>
            </article>
          ))}
        </section>
      );
    }

    if (activeTab === "analytics") {
      return (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="card h-72">
            <h3 className="text-sm text-zinc-400">ROAS & CPL Trend</h3>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={roasData}>
                <CartesianGrid stroke="#30333a" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#81848f" />
                <YAxis stroke="#81848f" />
                <Tooltip />
                <Line type="monotone" dataKey="roas" stroke="#d4af37" strokeWidth={2} />
                <Line type="monotone" dataKey="cpl" stroke="#7dd3fc" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="card h-72">
            <h3 className="text-sm text-zinc-400">Platform Comparison</h3>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={[{ p: "Meta", leads: 44 }, { p: "Google", leads: 31 }, { p: "LinkedIn", leads: 17 }]}>
                <CartesianGrid stroke="#30333a" />
                <XAxis dataKey="p" stroke="#81848f" />
                <YAxis stroke="#81848f" />
                <Tooltip />
                <Bar dataKey="leads" fill="#d4af37" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      );
    }

    return (
      <section className="grid gap-4 md:grid-cols-2">
        <article className="card">
          <h3 className="font-medium">Personal Growth Tracker</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>Skills learned: 2</li>
            <li>Books read: 1</li>
            <li>Courses completed: 1</li>
            <li>Experiments run: 4</li>
          </ul>
        </article>
        <article className="card">
          <h3 className="font-medium">Deep Work Timer</h3>
          <p className="mt-2 text-sm text-zinc-400">Focus sprint: 45:00</p>
          <button className="mt-4 rounded-lg bg-gold/90 px-4 py-2 text-black"><Timer className="mr-1 inline h-4 w-4" /> Start Session</button>
        </article>
      </section>
    );
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-charcoal to-black px-4 py-6 md:px-8">
      <header className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-wide text-gold">MARKETING COMMAND CENTER</h1>
          <p className="text-sm text-zinc-400">Personal Marketing OS • Fast, premium, distraction-free</p>
        </div>
        <label className="text-sm text-zinc-400">Auto-refresh
          <input checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} type="checkbox" className="ml-2 accent-gold" />
        </label>
      </header>

      <nav className="mb-6 grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-7">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            className={`rounded-xl border px-3 py-2 text-sm transition ${activeTab === key ? "border-gold bg-gold/10 text-gold" : "border-zinc-800 bg-black/40 text-zinc-300 hover:border-zinc-600"}`}
            onClick={() => setActiveTab(key)}
          >
            <Icon className="mr-1 inline h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>

      {panel}

      <button className="fixed bottom-6 right-6 rounded-full bg-gold p-4 text-black shadow-glow transition hover:scale-105" aria-label="Quick add">
        <Plus className="h-5 w-5" />
      </button>
    </main>
  );
}
