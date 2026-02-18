import { describe, it, expect } from "vitest";
import { registerSchema, ideaSchema } from "@/lib/validators";

describe("validators", () => {
  it("rejects short password", () => {
    const result = registerSchema.safeParse({ name: "Sam", email: "sam@test.com", password: "123" });
    expect(result.success).toBe(false);
  });

  it("accepts valid idea payload", () => {
    const result = ideaSchema.safeParse({ title: "New funnel hook", tags: ["hook"] });
    expect(result.success).toBe(true);
  });
});
