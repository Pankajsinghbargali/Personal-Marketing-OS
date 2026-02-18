import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Google OAuth endpoint placeholder. Configure client id/secret and callback URL.",
    oauthUrl: "https://accounts.google.com/o/oauth2/v2/auth"
  });
}
