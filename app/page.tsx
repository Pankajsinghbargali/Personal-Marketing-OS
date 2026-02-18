import { RoasChart } from "@/components/analytics/roas-chart";
import { QuickAddButton } from "@/components/dashboard/quick-add-button";
import { TopNav } from "@/components/layout/top-nav";
import { WidgetCard } from "@/components/ui/widget-card";
import { analyticsTrend, campaigns, dashboardStats, ideas, leadsPipeline } from "@/lib/data/mock-data";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <TopNav />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <WidgetCard title="Ad Spend Today" value={currency.format(dashboardStats.adSpendToday)} subtitle="Auto-sync every 15 min" />
          <WidgetCard title="Leads Today" value={String(dashboardStats.leadsGeneratedToday)} subtitle="Across all pipelines" />
          <WidgetCard title="Revenue This Month" value={currency.format(dashboardStats.revenueThisMonth)} subtitle="Booked + projected" />
          <WidgetCard title="Follow-ups Due" value={String(dashboardStats.followUpsDueToday)} subtitle="Prioritized by deal value" />
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <article className="panel xl:col-span-2">
            <h2 className="text-lg font-semibold">Today’s Top 3 Priorities</h2>
            <ul className="mt-3 space-y-3">
              {dashboardStats.topPriorities.map((priority, idx) => (
                <li key={priority} className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3 text-sm">
                  <span className="mr-2 text-gold">0{idx + 1}</span>
                  {priority}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
              <span className="rounded-full border border-zinc-700 px-3 py-1">Auto-refresh: ON</span>
              <span className="rounded-full border border-zinc-700 px-3 py-1">Widget customization ready</span>
              <span className="rounded-full border border-zinc-700 px-3 py-1">Keyboard shortcuts enabled</span>
            </div>
          </article>
          <article className="panel">
            <h2 className="text-lg font-semibold">Lead Pipeline Snapshot</h2>
            <div className="mt-3 space-y-2 text-sm">
              {Object.entries(leadsPipeline).map(([stage, count]) => (
                <div key={stage} className="flex items-center justify-between rounded-lg border border-zinc-800 px-3 py-2">
                  <span>{stage}</span>
                  <span className="text-gold">{count}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <RoasChart data={analyticsTrend} />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="panel">
            <h3 className="text-base font-semibold">Campaign Manager</h3>
            <p className="mt-1 text-sm text-zinc-400">Meta, Google, LinkedIn, YouTube structure with learnings logs.</p>
            <div className="mt-3 space-y-3">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="rounded-xl border border-zinc-800 bg-zinc-950/30 p-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{campaign.name}</span>
                    <span className="text-zinc-400">{campaign.platform}</span>
                  </div>
                  <p className="mt-1 text-zinc-400">ROAS {campaign.roas} · CTR {campaign.ctr}% · Leads {campaign.leads}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <h3 className="text-base font-semibold">Idea Vault</h3>
            <p className="mt-1 text-sm text-zinc-400">Quick add, tagging, and convert-to-task/campaign/content flow.</p>
            {ideas.map((idea) => (
              <div key={idea.id} className="mt-3 rounded-xl border border-zinc-800 bg-zinc-950/30 p-3 text-sm">
                <p className="font-medium">{idea.title}</p>
                <p className="mt-1 text-zinc-400">{idea.notes}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {idea.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>
      <QuickAddButton />
    </main>
  );
}
