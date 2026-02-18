import { NextResponse } from "next/server";
import { adServices } from "@/lib/services/ad-platforms";

export async function GET() {
  const [meta] = await adServices.meta.sync();
  const [google] = await adServices.google.sync();
  const [linkedin] = await adServices.linkedin.sync();

  return NextResponse.json({
    priorities: 3,
    adSpendToday: meta.spend + google.spend + linkedin.spend,
    leadsToday: meta.leads + google.leads + linkedin.leads,
    revenueThisMonth: 18220,
    followUpsDue: 7,
    contentScheduled: 5,
    platformMetrics: { meta, google, linkedin }
  });
}
