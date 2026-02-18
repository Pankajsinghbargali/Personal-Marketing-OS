import { describe, expect, it } from "vitest";
import { ideaSchema, loginSchema } from "@/lib/validation/schemas";

describe("validation schemas", () => {
  it("validates login payload", () => {
    const result = loginSchema.safeParse({ email: "user@test.com", password: "password123" });
    expect(result.success).toBe(true);
  });

  it("rejects invalid idea payload", () => {
    const result = ideaSchema.safeParse({ title: "x", priority: "Critical", status: "Open" });
    expect(result.success).toBe(false);
  });
});
