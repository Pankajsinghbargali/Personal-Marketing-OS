import { NextResponse } from "next/server";
import { campaigns } from "@/lib/data/mock-data";

export async function GET() {
  return NextResponse.json({ data: campaigns });
}
