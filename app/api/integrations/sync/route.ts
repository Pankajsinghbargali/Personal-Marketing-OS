import { NextRequest, NextResponse } from "next/server";
import { syncIntegration } from "@/lib/services/integrations";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { integration?: Parameters<typeof syncIntegration>[0] };

  if (!body.integration) {
    return NextResponse.json({ error: "integration is required" }, { status: 400 });
  }

  const result = await syncIntegration(body.integration);
  return NextResponse.json({ data: result });
}
