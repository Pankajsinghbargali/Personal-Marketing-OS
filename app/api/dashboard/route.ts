import { NextResponse } from "next/server";
import { dashboardStats } from "@/lib/data/mock-data";

export async function GET() {
  return NextResponse.json({ data: dashboardStats, refreshedAt: new Date().toISOString() });
}
