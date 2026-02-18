import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    roasTrend: [2.1, 2.8, 3.5, 3.2],
    cplTrend: [26, 24, 20, 22],
    monthlyRevenue: [9200, 12400, 15800, 18220],
    platformComparison: [
      { platform: "Meta", leads: 44, spend: 920 },
      { platform: "Google", leads: 31, spend: 850 },
      { platform: "LinkedIn", leads: 17, spend: 520 }
    ]
  });
}
