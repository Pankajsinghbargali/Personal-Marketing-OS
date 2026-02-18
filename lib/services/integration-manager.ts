import crypto from "crypto";
import { prisma } from "@/lib/prisma";

const encryptionKey = (process.env.CREDENTIAL_ENCRYPTION_KEY ?? "0123456789abcdef0123456789abcdef").slice(0, 32);

function encrypt(text: string) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(encryptionKey), iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${iv.toString("hex")}:${encrypted}`;
}

export async function storeCredential(provider: string, token: string, refreshToken?: string) {
  return prisma.integrationCredential.create({
    data: {
      provider,
      encryptedKey: encrypt(token),
      refreshToken
    }
  });
}
