import { NextResponse } from "next/server";
import { leadsPipeline } from "@/lib/data/mock-data";

export async function GET() {
  return NextResponse.json({ data: leadsPipeline });
}
