import { NextResponse } from "next/server";

const content = [
  { id: "cnt_1", type: "Reel", status: "Scheduled", platform: "Instagram", funnelStage: "TOFU", leadsGenerated: 8 },
  { id: "cnt_2", type: "Carousel", status: "Draft", platform: "LinkedIn", funnelStage: "MOFU", leadsGenerated: 3 }
];

export async function GET() {
  return NextResponse.json({ data: content });
}
