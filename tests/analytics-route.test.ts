import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/analytics/route";

describe("analytics route", () => {
  it("returns platform comparison", async () => {
    const response = await GET();
    const data = await response.json();
    expect(Array.isArray(data.platformComparison)).toBe(true);
  });
});
