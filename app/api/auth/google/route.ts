import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signJwt } from "@/lib/utils";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name } = body as { email?: string; name?: string; idToken?: string };

  // OAuth token validation would occur here against Google tokeninfo endpoint in production.
  if (!email) {
    return NextResponse.json({ error: "google email is required" }, { status: 400 });
  }

  const user = await prisma.user.upsert({
    where: { email },
    create: { email, name },
    update: { name }
  });

  const token = signJwt({ sub: user.id, email: user.email, role: user.role, provider: "google" });
  return NextResponse.json({ token, user: { id: user.id, email: user.email, name: user.name } });
}
