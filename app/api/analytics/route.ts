import { NextResponse } from "next/server";
import { analyticsTrend } from "@/lib/data/mock-data";

export async function GET() {
  return NextResponse.json({ data: analyticsTrend });
}
