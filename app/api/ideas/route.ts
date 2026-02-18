import { NextRequest, NextResponse } from "next/server";
import { ideas } from "@/lib/data/mock-data";
import { ideaSchema } from "@/lib/validation/schemas";

export async function GET() {
  return NextResponse.json({ data: ideas });
}

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const parsed = ideaSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({ data: { id: crypto.randomUUID(), ...parsed.data } }, { status: 201 });
}
