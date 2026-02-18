import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { signSession } from "@/lib/auth/jwt";
import { loginSchema } from "@/lib/validation/schemas";

const mockUser = {
  id: "usr_admin",
  email: "admin@marketingos.dev",
  role: "admin" as const,
  passwordHash: bcrypt.hashSync("password123", 10)
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const passwordOk = await bcrypt.compare(parsed.data.password, mockUser.passwordHash);

  if (parsed.data.email !== mockUser.email || !passwordOk) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signSession({ userId: mockUser.id, role: mockUser.role, email: mockUser.email });
  return NextResponse.json({ token });
}
